import { useFormContext, useSchemaContext } from './FormProvider'


function AutoField(props) {
  const { name, defaultValue, onChange, onBlur } = props
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
          <select {...register(name)}>
            {
              Object.getOwnPropertyNames(field.options)
                .map(val => <option key={val} value={val}>{field.options[val]}</option>)
            }
          </select>
        )
      case 'radio':
      case 'checkbox':
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
      case 'textarea':
        return (
          <textarea {...fieldProps} {...register(name, { ...field.constraints })}
                    aria-invalid={errors[name] ? 'true' : 'false'}
          />
        )
      default:
        return (
          <input {...fieldProps} type={field.type} {...register(name, { ...field.constraints })}
                 aria-invalid={errors[name] ? 'true' : 'false'}
          />
        )
    }
  }

  return switchComponent(field.type)
}

export default AutoField
