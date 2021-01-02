import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <p className="pt-3">Hello from Page 2.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
