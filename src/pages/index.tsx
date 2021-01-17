import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

const IndexPage = () => {
  return (
    <div
      className="grid h-screen overflow-y-scroll"
      style={{
        gridTemplateColumns: "1fr 10fr 1fr",
        gridTemplateRows: "max-content 1fr",
      }}
    >
      <header
        className="col-span-full mb-1 bg-red-900 border-b border-gray-200 grid"
        style={{ grid: "inherit" }}
      >
        <div className="col-start-2">
          <h1 className="m-0 text-2xl py-3">
            <Link to="/" className="text-white">
              Kanzlei Partner und Partner
            </Link>
          </h1>
        </div>
      </header>
      <SEO title="Home" />
      <div className="col-start-2">
        <p className="pt-3">Ihr Partner im Arbeitsrecht.</p>
        <h3 className="text-2xl border-b-4 border-l-4 border-red-600 max-w-max pb-1 pl-2 mt-12">
          Wurde Ihnen gekündigt?
        </h3>
        <p className="pt-3 text-lg mb-4">
          Starten Sie hier ein automatisiertes Erstgespräch:
        </p>
        <Link to="/interpreter" className="text-red-900">
          Fancy Version (unstable)
        </Link>
        <br></br>
        <Link to="/prototype" className="text-red-900">
          Open Decision Prototype Standard
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
