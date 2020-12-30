import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <iframe
      src="https://builder.open-decision.org/publish/ueiddhscbw?embedded=true"
      width="1000"
      height="400"
    >
      Your browser does not support iFrames
    </iframe>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
