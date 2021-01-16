import React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const Input: React.FC<InputProps> = props => {
  return (
    <label className="text-lg grid gap-2">
      {props.label}
      <input
        {...props}
        className="border-2 border-gray-600 rounded-sm py-2 px-4 focus:bg-purple-50"
      />
    </label>
  )
}
