import produce, { Draft } from "immer"
import { node } from "../types/global"

export type reducerActions =
  | {
      type: "ADD_NEW_NODE"
      node: node
    }
  | { type: "REMOVE_LAST_QUESTION" }
  | { type: "RESET_STATE_TO_SPECIFIC_NODE"; name: string }
  | { type: "RESET" }

export const reducer = produce((draft: node[], action: reducerActions) => {
  switch (action.type) {
    case "ADD_NEW_NODE":
      draft.push(action.node)
      break
    case "REMOVE_LAST_QUESTION":
      draft.pop()
      break
    case "RESET_STATE_TO_SPECIFIC_NODE":
      const editedNode = draft.findIndex(node => node.name === action.name)
      draft.splice(editedNode + 1)
      break
    case "RESET":
      draft.splice(1)
      break
  }
})
