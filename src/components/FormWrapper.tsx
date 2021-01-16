import { useFormik } from "formik"
import React from "react"
import { input } from "../types/global"
import { formElement } from "./FormElements/DynamicFormElement"

export type Form = {
  inputs: input[]
  initialValues: Record<string, string>
  initialized: boolean
}

type FormWrapperProps = React.HTMLAttributes<HTMLFormElement> & {
  form: Form
  handleSubmit: (values: any) => void
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  form,
  handleSubmit,
  ...props
}) => {
  const formik = useFormik({
    initialValues: form.initialValues,
    onSubmit: values => handleSubmit(values),
  })

  return (
    <form onSubmit={formik.handleSubmit} className="mt-6" {...props}>
      {form.inputs.map(input =>
        formElement({
          ...input,
          value: formik.values[input.name],
          onChange: formik.handleChange,
        })
      )}
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-purple-200 border-2 border-purple-700 px-3 py-2 shadow-sm clickable mt-4"
        >
          Zurück
        </button>
        <button
          type="submit"
          className="bg-purple-200 border-2 border-purple-700 px-3 py-2 shadow-sm clickable mt-4"
        >
          Weiter
        </button>
      </div>
    </form>
  )
}
