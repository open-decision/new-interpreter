import clsx from "clsx"
import { Field } from "formik"
import React from "react"
import { input } from "../../types/global"

export const ButtonList = (input: input) => {
  return (
    <div
      role="group"
      aria-labelledby={input.label}
      className="radio-toolbar mt-4 grid gap-2 lg:gap-4"
    >
      {input.options?.map(option => (
        <div key={option}>
          <Field
            className="opacity-0 w-0"
            value={option}
            id={`${input.name}.${option}`}
            type={input.type}
            name={input.name}
          />
          <label
            className={clsx(
              "bg-purple-50 px-3 py-2 border-4 border-purple-200 rounded-md flex-1 flex justify-center text-lg lg:text-xl shadow-sm hover:shadow-lg transition-shadow text-purple-900"
            )}
            htmlFor={`${input.name}.${option}`}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}
