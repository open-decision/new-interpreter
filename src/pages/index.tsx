import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { SEO } from "../components/Seo"
import { Search } from "../components/Search"

export type treeMetaData = {
  name: string
  metadata: {
    build_date: string
    tags: string[]
    tree_name: string
    description: string
    start_node: string
  }
}

const IndexPage = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query AllTreeMetadata {
      allFile(filter: { sourceInstanceName: { eq: "data" } }) {
        edges {
          node {
            childDataJson {
              header {
                build_date
                tags
                tree_name
                description
                start_node
              }
            }
            name
          }
        }
      }
    }
  `)

  const data: treeMetaData[] = edges.map(({ node }: { node: any }) => ({
    metadata: node?.childDataJson?.header,
    name: node?.name,
  }))

  return (
    <Layout className="space-y-3">
      <SEO title="Home" />
      <p className="pt-6 my-1">What can I help you with?</p>
      <Search data={data} />
      <ul className="m-0">
        <li>
          <Link
            to="/page-2/"
            className="hover:bg-gray-50 border border-gray-200 hover:border-transparent hover:shadow-lg block rounded-lg p-4"
          >
            <h3>Application Title</h3>
            <p>This is a short description of the Application.</p>
          </Link>
        </li>
        <li>
          <Link
            to="/page-2/"
            className="hover:bg-gray-50 border border-gray-200 hover:border-transparent hover:shadow-lg block rounded-lg p-4"
          >
            <h3>Application Title</h3>
            <p>This is a short description of the Application.</p>
          </Link>
        </li>
      </ul>
      <p className="pt-3">
        This is a white label website to manage your Open Decision Apps. Go on
        and include your own data, change the title, text and colors as you
        please.
      </p>
    </Layout>
  )
}

export default IndexPage
