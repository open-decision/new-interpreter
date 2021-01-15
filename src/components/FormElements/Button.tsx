import React from "react"

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label: string
}

export const Button: React.FC<ButtonProps> = props => (
  <button>{props.label}</button>
)
