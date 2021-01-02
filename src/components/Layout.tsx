import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./Header"

const centeredContent = "col-start-2"

export const Layout: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      className="grid h-screen"
      style={{
        gridTemplateColumns: "1fr 10fr 1fr",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header
        className={centeredContent}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main className={`${className} ${centeredContent}`}>{children}</main>
      <footer className={`py-4 ${centeredContent}`}>
        © {new Date().getFullYear()}, by
        {` `}
        <a href="https://www.open-legal-tech.org">Open Legal Tech</a>
      </footer>
    </div>
  )
}
