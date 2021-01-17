import { Form, Formik } from "formik"
import React from "react"
import { node } from "../types/global"
import { formElement } from "./FormElements/DynamicFormElement"

type FormWrapperProps = React.HTMLAttributes<HTMLFormElement> & {
  state: node[]
  handleSubmit: (values: any) => void
  initialValues: any
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  state,
  handleSubmit,
  initialValues,
  children,
  ...props
}) => {
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form {...props}>
        {state.map(node => (
          <div key={node.name} className="max-w-4xl max-h-full">
            <h1 className="text-3xl lg:text-4xl font-semibold border-b-4 border-purple-300 py-2 px-4 border-l-4 rounded-md">
              {node.name}
            </h1>
            <div
              className="text-base lg:text-xl mt-6"
              dangerouslySetInnerHTML={{ __html: node.text }}
            />
            {node.inputs.map(input => formElement(input))}
          </div>
        ))}
        {children}
      </Form>
    </Formik>
  )
}
