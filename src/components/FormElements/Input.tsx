import React from "react"
import { input } from "../Interpreter"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const Input: React.FC<InputProps> = props => {
  return <input {...props} className="border-2 border-gray-600" />
}
