import { tree } from "./test"
import React from "react"
import jsonLogic, { RulesLogic } from "json-logic-js"
import { input, node } from "../types/global"
import { FormWrapper, Form } from "./FormWrapper"

export type InterpreterState = Record<string, node>

export const Interpreter: React.FC<{ className?: string }> = ({
  className,
}) => {
  // Get the start node from all questions
  const startNode: node = tree.questions[tree.header.start_node]

  //This state tracks all the visited questions and their answers
  const [currentNode, setCurrentNode] = React.useState(startNode)
  const [answers, setAnswers] = React.useState({})
  const [form, setForm] = React.useState<Form>({
    inputs: [],
    initialValues: {},
    initialized: false,
  })

  React.useEffect(() => {
    const inputs: input[] = currentNode.inputs.map(
      input => ({
        type: input.type,
        name: input?.name ?? input.label,
        label: input.label,
        key: input?.name ?? input.type,
        options: input?.options ?? [],
      }),
      []
    )

    const initialValues = inputs.reduce(
      (acc: Record<string, string>, input) => {
        acc[input.name] = ""
        return acc
      },
      {}
    )

    setForm({ inputs, initialValues, initialized: true })
  }, [currentNode])

  const handleSubmit = (values: any) => {
    console.log(values)

    setForm({ ...form, initialized: false })
    setAnswers({ ...answers, [currentNode.name]: { values } })

    const nameOfNextQuestion = handleLogic({
      rules: currentNode.rules,
      vars: values,
      destination: currentNode.destination,
    })

    setCurrentNode(tree.questions[nameOfNextQuestion])
  }

  type logic = {
    rules?: RulesLogic
    vars: Record<string, string>
    destination: any
  }

  const handleLogic = ({ rules, vars, destination }: logic): string => {
    if (rules) {
      const result = jsonLogic.apply(rules, vars)
      return destination[result]
    }

    const result = Object.values(vars)[0]

    return destination[result]
  }

  return (
    <div className={`${className} max-w-3xl`}>
      <h1 className="text-4xl">{currentNode.name}</h1>
      <div
        className="text-xl mt-4"
        dangerouslySetInnerHTML={{ __html: currentNode.text }}
      />
      {form.initialized && (
        <FormWrapper handleSubmit={handleSubmit} form={form}></FormWrapper>
      )}
    </div>
  )
}
