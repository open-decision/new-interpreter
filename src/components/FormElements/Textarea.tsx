import React, { TextareaHTMLAttributes } from "react"

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
}

export const Textarea: React.FC<TextAreaProps> = () => {
  return <input type="textarea"></input>
}
