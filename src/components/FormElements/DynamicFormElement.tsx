import React from "react"
import { input } from "../../types/global"
import { ButtonList } from "./ButtonList"
import { Input } from "./Input"
import { Textarea } from "./Textarea"

export type formElement = input & {
  onChange: (e: React.ChangeEvent<any>) => void
}

export const formElement = (input: formElement) => {
  switch (input.type) {
    case "text":
      return <Input {...input} />
    case "textarea":
      return <Textarea {...input} />
    case "number":
      return <Input {...input} />
    case "radio":
      return <ButtonList {...input} />
    // case "list":
    //   return (
    //     <List
    //       options={input.options}
    //       key={input.label}
    //       onChange={handleChange}
    //     />
    //   )
  }
}
