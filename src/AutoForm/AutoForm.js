import { useForm } from 'react-hook-form'
import FormProvider from './FormProvider'
import clsx from 'clsx'

function AutoForm(props) {
  const { children, schema, onSubmit, className, classes } = props

  const methods = useForm()

  return (
    <FormProvider methods={methods} schema={schema}>
      <form className={clsx(classes.root, className)} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

AutoForm.defaultProps = {
  className: ''
}

export default AutoForm