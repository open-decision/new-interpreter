import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout className="space-y-3">
      <SEO title="Home" />
      <p className="pt-3">This is a base website.</p>
      <Link to="/page-2" />
    </Layout>
  )
}

export default IndexPage
