import { matchSorter } from "match-sorter"
import React from "react"
import { treeMetaData } from "../pages"

export const Search = ({ data }: { data: treeMetaData[] }) => {
  const [search, setSearch] = React.useState("")
  const [searchData, setSearchData] = React.useState(data)

  const fuzzySearch = (data: treeMetaData[], search: string) =>
    matchSorter(data, search, {
      keys: [
        "tree_name",
        "build_date",
        "description",
        data => data.metadata.tags.map(tag => tag),
      ],
    })

  React.useEffect(() => {
    setSearchData(fuzzySearch(data, search))
  }, [data, search])

  return (
    <input
      type="text"
      className="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
      value={search}
      onChange={event => setSearch(event.target.value)}
    />
  )
}
