import { Link } from "gatsby"
import React from "react"

export const Header = ({ siteTitle = "" }) => (
  <header className="mb-1 bg-green-600">
    <div className="max-w-lg mx-auto px-1">
      <h1 className="m-0">
        <Link to="/" className="text-white">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)
