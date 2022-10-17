import { createContext, useContext } from 'react'
import { FormProvider as RootFormProvider, useFormContext as useRootFormContext } from 'react-hook-form'

const FormContext = createContext()

export const useFormContext = () => useRootFormContext()
export const useSchemaContext = () => useContext(FormContext)

function FormProvider({ children, schema, methods }) {
  return (
    <FormContext.Provider value={schema}>
      <RootFormProvider {...methods}>
        {children}
      </RootFormProvider>
    </FormContext.Provider>
  )
}

export default FormProvider