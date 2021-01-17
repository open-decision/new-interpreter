import { RulesLogic } from "json-logic-js"

type formElementTypes = "text" | "number" | "radio" | "list" | "textarea"

export type input = {
  type: formElementTypes
  display_as?: formElementTypes
  name: string
  value?: string
  label: string
  options?: string[]
  validation?: any
}

export type node = {
  name: string
  text: string
  inputs: input[]
  rules?: RulesLogic
  destination: Record<string, string> & { default?: string }
  action: string[]
  value?: any
}
