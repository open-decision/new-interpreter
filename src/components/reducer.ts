import produce, { Draft } from "immer"
import { InterpreterState, node } from "./Interpreter"

export type reducerActions =
  | { type: "ADD_QUESTION"; id: string; node: node }
  | { type: "EDIT_VALUE"; questionId: string; newValue: unknown }
  | {
      type: "EDIT_INPUT_VALUE"
      questionId: string
      inputId: string
      newValue: unknown
    }

export const reducer = () =>
  produce((draft: Draft<InterpreterState>, action: reducerActions) => {
    switch (action.type) {
      case "ADD_QUESTION":
        draft[action.id] = action.node
        break
      case "EDIT_VALUE":
        draft[action.questionId].value = action.newValue
        break
      case "EDIT_INPUT_VALUE":
        draft[action.id].value = action.newValue
        break
    }
  })
