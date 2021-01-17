// import { tree } from "./test"
import { tree } from "./tree"
import React from "react"
import jsonLogic, { RulesLogic } from "json-logic-js"
import { input, node } from "../types/global"
import { FormWrapper } from "./FormWrapper"
import { reducer, reducerActions } from "./reducer"
import clsx from "clsx"
import { equals, isEmpty, pickBy, pipe } from "ramda"
import { Link } from "gatsby"

type values = Record<string, Record<string, string> | string>

export const button =
  "bg-purple-100 border-2 border-purple-300 px-3 lg:px-5 py-2 lg:py-4 shadow-sm clickable lg:text-xl rounded disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500"

const stripWhiteSpace = (string: string) => string.replace(/\s/g, "")

const createNode = (node: node): node => {
  const inputs: input[] = node.inputs.map(
    input => ({
      ...input,
      name: `${stripWhiteSpace(node.name)}.${input.name}`,
      key: input?.name ?? input.type,
      options: input?.options ?? [],
    }),
    []
  )

  return {
    ...node,
    inputs,
    value: node?.value ?? "",
  }
}

const createInitialValues = (questions: Record<string, node>) =>
  Object.values(questions).reduce((acc: Record<string, string>, question) => {
    acc[stripWhiteSpace(question.name)] = question?.value ?? ""
    return acc
  }, {})

const getChangedNodes = (oldState: values, newState: values): string[] => {
  const result = Object.entries(oldState).reduce((acc: string[], value) => {
    const oldValue = Object.values(value[1])
    const newValue = Object.values(newState[value[0]])

    //Return early if the newState does not contain any values for the node
    if (isEmpty(oldValue)) return acc
    if (equals(oldValue, newValue)) return acc

    acc.push(value[0])
    return acc
  }, [])

  return result
}

export const Interpreter: React.FC<{ className?: string }> = ({
  className,
}) => {
  const bottomRef = React.useRef<HTMLDivElement>(null)
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  // Get the start node from all questions
  const startNode: node = tree.questions[tree.header.start_node]

  const [state, dispatch] = React.useReducer<
    React.Reducer<node[], reducerActions>
  >(reducer, [createNode(startNode)])

  const currentNode: node = state[state.length - 1]
  const [savedValues, setSavedValues] = React.useState<values>({})

  const addNewNode = (values, node) => {
    const newNodeName = handleLogic({
      rules: node.rules,
      vars: values[stripWhiteSpace(node.name)],
      destination: node.destination,
    })

    dispatch({
      type: "ADD_NEW_NODE",
      node: createNode(tree.questions[newNodeName]),
    })
  }

  const handleSubmit = async (values: any) => {
    if (currentNode.action.includes("email")) {
      const response = await fetch(`/.netlify/functions/send-email`, {
        method: `POST`,
        headers: {
          Accept: `*`,
          "Content-Type": `application/json`,
        },
        body: JSON.stringify({ values }),
        redirect: `follow`,
      })

      console.log(response)
    }

    //#region
    // const changedNodes = getChangedNodes(savedValues, values)

    // if (!isEmpty(changedNodes)) {
    //   dispatch({
    //     type: "RESET_STATE_TO_SPECIFIC_NODE",
    //     name: changedNodes[0],
    //   })

    //   const currentNode = pipe(
    //     pickBy((val, key) => val.name === changedNodes[0]),
    //     Object.keys
    //   )(tree.questions)

    //   return addNewNode(values, tree.questions[currentNode[0]])
    // } else {
    // }

    //#endregion
    try {
      setSavedValues(values)
      return addNewNode(values, currentNode)
    } catch (error) {
      alert(
        "Leider ist ein Fehler aufgetreten! Bitte versuchen Sie es nochmal."
      )
      dispatch({ type: "RESET" })
    }
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [state])

  type logic = {
    rules?: RulesLogic
    vars: Record<string, string>
    destination: any
  }

  const handleLogic = ({ rules, vars, destination }: logic): string => {
    if (destination.default) return destination.default

    if (rules) {
      const result = jsonLogic.apply(rules, vars)
      console.log(result)

      return destination[result]
    }

    const result = Object.values(vars)[0]

    return destination[result]
  }

  return (
    <>
      <FormWrapper
        id="form"
        handleSubmit={handleSubmit}
        state={state}
        className={clsx(className, "grid grid-cols-1 items-center")}
        style={{ gridAutoRows: "100vh" }}
        initialValues={createInitialValues(tree.questions)}
      ></FormWrapper>
      <div className="fixed right-8 lg:right-40 bottom-8 lg:bottom-20 space-x-6">
        <button
          disabled={!(state.length > 1)}
          onClick={event => {
            event.preventDefault()
            dispatch({ type: "REMOVE_LAST_QUESTION" })
          }}
          className={button}
        >
          Zurück
        </button>
        <button type="submit" className={button} form="form">
          Weiter
        </button>
        <button className={button} onClick={() => dispatch({ type: "RESET" })}>
          Neustarten
        </button>
        <Link className={button} to="/">
          Zurück zur Startseite
        </Link>
      </div>
      <div ref={bottomRef} />
    </>
  )
}
