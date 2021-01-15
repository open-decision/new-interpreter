import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Interpreter } from "../components/Interpreter"

const IndexPage = () => {
  return (
    <Layout className="space-y-3">
      <SEO title="Home" />
      <Interpreter className="mt-12" />
    </Layout>
  )
}

export default IndexPage
