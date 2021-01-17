import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Interpreter } from "../components/Interpreter"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Interpreter />
    </Layout>
  )
}

export default IndexPage
