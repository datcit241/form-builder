import { useForm } from 'react-hook-form'
import FormProvider from './FormProvider'

function AutoForm(props) {
  const { children, schema, onSubmit } = props

  const methods = useForm()

  return (
    <FormProvider methods={methods} schema={schema}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default AutoForm