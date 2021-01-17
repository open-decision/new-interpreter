import { Link } from "gatsby"
import React from "react"
import { SEO } from "../components/Seo"

const prototype = () => {
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
          <Link to="/" className="text-white">
            Zurück zur Startseite
          </Link>
        </div>
      </header>
      <SEO title="Page two" />
      <div className="col-start-2">
        <p className="text-xl font-semibold pt-6 pb-3">
          Automatisiertes Erstgespräch
        </p>
        <iframe
          src="http://builder.open-decision.org/publish/cweokeryxe?embedded=true"
          width="1000"
          height="600"
        >
          Your browser does not support iFrames
        </iframe>
      </div>
    </div>
  )
}

export default prototype
