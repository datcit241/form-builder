import { useFormContext, useSchemaContext } from './FormProvider'
import clsx from 'clsx'

function AutoField(props) {
  const { name, defaultValue, onChange, onBlur, className, classes } = props
  const fieldProps = {
    defaultValue,
    onChange,
    onBlur
  }

  const schema = useSchemaContext()
  const { register, formState: { errors } } = useFormContext()

  const field = schema.properties[name]

  const switchComponent = (type) => {
    switch (type) {
      case 'select':
        return (
          <select className={clsx(classes.root, className)} {...register(name)}>
            {
              Object.getOwnPropertyNames(field.options)
                .map(val => <option key={val} value={val}>{field.options[val]}</option>)
            }
          </select>
        )
      case 'textarea':
        return (
          <textarea {...fieldProps} {...register(name, { ...field.constraints })}
                    aria-invalid={errors[name] ? 'true' : 'false'}
          />
        )
      default:
        return (
          <>
            <input id={name} {...fieldProps} type={field.type} {...register(name, { ...field.constraints })}
                   aria-invalid={errors[name] ? 'true' : 'false'}
            />
            {
              field.text && <label htmlFor={name}>{field.text}</label>
            }
          </>
        )
    }
  }

  return switchComponent(field.type)
}

AutoField.defaultProps = {
  className: ''
}

export default AutoField
