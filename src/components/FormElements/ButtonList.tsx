import React from "react"
import { formElement } from "./DynamicFormElement"

export const ButtonList = (input: formElement) => {
  return (
    <div
      role="group"
      aria-labelledby={input.label}
      className="radio-toolbar flex space-x-4"
    >
      {input.options.map((option, index) => (
        <div key={option} className="flex-1 flex">
          <input
            className="opacity-0 w-0"
            value={index}
            id={option}
            name={input.name}
            onChange={input.onChange}
            type={input.type}
          />
          <label
            className="bg-gray-100 px-3 py-2 border-2 border-gray-700 rounded-sm flex-1 flex justify-center text-xl shadow-sm hover:shadow-lg transition-shadow"
            htmlFor={option}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}
