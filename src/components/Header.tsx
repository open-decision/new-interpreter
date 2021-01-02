import { Link } from "gatsby"
import React from "react"

export const Header = ({ siteTitle = "", className = "" }) => (
  <header
    className="col-span-full mb-1 bg-white border-b border-gray-200 grid"
    style={{ grid: "inherit" }}
  >
    <div className={className}>
      <h1 className="m-0 text-2xl py-3">
        <Link to="/" className="text-grey-900">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)
