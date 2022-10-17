import { useFormContext, useSchemaContext } from './FormProvider'
import clsx from 'clsx'

function ErrorField(props) {
  const { name, classes, className } = props

  const schema = useSchemaContext()
  const { formState: { errors } } = useFormContext()

  const field = schema.properties[name]

  return (
    <>
      {errors[name] && <p className={clsx(classes.root, className)}>{field.errors[errors[name].type]}</p>}
    </>
  )
}

ErrorField.defaultProps = {
  className: ''
}

export default ErrorField