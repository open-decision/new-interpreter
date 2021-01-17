import React from "react"
import { input } from "../../types/global"
import { ButtonList } from "./ButtonList"
import { Input } from "./Input"
import { Textarea } from "./Textarea"

export const formElement = (input: input) => {
  switch (input.type) {
    case "text":
      return <Input {...input} />
    case "textarea":
      return <Textarea {...input} />
    case "number":
      return <Input {...input} />
    case "radio":
    case "list":
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
