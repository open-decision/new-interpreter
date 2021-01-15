import { tree } from "./test"
import React from "react"
import { Input, Textarea, Button, List } from "./FormElements"
import { reducer, reducerActions } from "./reducer"
import { useFormik } from "formik"

type inputBase = {
  display_as?: formElementTypes
  name?: string
  value?: string
  label: string
}
type inputTypes =
  | { type: "free-text" }
  | { type: "text" }
  | { type: "number" }
  | { type: "list"; options: string[] }
  | { type: "textarea" }
  | { type: "button"; options: string[] }

export type input = inputBase & inputTypes

export type node = {
  name: string
  text: string
  inputs: input[]
  rules: {}
  destination: Record<string, string>
  action: {}
}

export type InterpreterState = Record<string, node>

type formElementTypes = "text" | "number" | "button" | "list" | "textarea"

type formElement = input & { onChange: (e: React.ChangeEvent<any>) => void }

const formElement = (input: formElement) => {
  switch (input.type) {
    case "text":
      return <Input {...input} />
    case "textarea":
      return <Textarea {...input} />
    case "number":
      return <Input {...input} />
    case "button":
      return <Button {...input} />
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
export const Interpreter = ({ className }) => {
  // Get the start node from all questions
  const startNode: node = tree.questions[tree.header.start_node]

  //This state tracks all the visited questions and their answers
  const [currentNode, setCurrentNode] = React.useState(startNode)
  const [answers, setAnswers] = React.useState({})

  //THis function produces the initialValues from the dataset
  const inputs = currentNode.inputs.map(
    input => ({
      type: input.type,
      name: input?.name ?? input.label,
      label: input.label,
      key: input?.name ?? input.type,
      options: [],
    }),
    []
  )

  const initialValues = inputs.reduce((acc: Record<string, string>, input) => {
    acc[input.name] = ""
    return acc
  }, {})

  const formik = useFormik({
    initialValues,
    onSubmit: values =>
      setAnswers({ ...answers, [currentNode.name]: { values } }),
  })

  return (
    <div className={className}>
      <h1 className="text-4xl">{currentNode.name}</h1>
      <div
        className="text-xl mt-4"
        dangerouslySetInnerHTML={{ __html: currentNode.text }}
      />
      <form onSubmit={formik.handleSubmit}>
        {inputs.map(input =>
          formElement({
            ...input,
            value: formik.values[input.name],
            onChange: formik.handleChange,
          })
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
