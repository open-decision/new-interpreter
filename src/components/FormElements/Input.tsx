import { FieldHookConfig, useField } from "formik"
import React from "react"

type InputProps = FieldHookConfig<string> & {
  label: string
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <label className="text-lg font-semibold text-purple-900 grid gap-2 mt-6">
      {label}
      <input
        {...field}
        className="border-2 border-purple-200 rounded-md py-2 px-4 focus:bg-purple-100 bg-purple-50"
      />
    </label>
  )
}
