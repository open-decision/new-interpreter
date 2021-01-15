import React from "react"

type ListProps = { options: string[] }

export const List: React.FC<ListProps> = ({ options }) => (
  <ul>
    {options.map(label => (
      <li>
        <button>{label}</button>
      </li>
    ))}
  </ul>
)
