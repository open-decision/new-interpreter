import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import clsx from "clsx"

export const centeredContent = "col-start-2"

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
      className="grid h-screen overflow-y-scroll"
      style={{
        gridTemplateColumns: "1fr 10fr 1fr",
      }}
    >
      <main className={clsx(className, centeredContent, "row-start-1")}>
        {children}
      </main>
    </div>
  )
}
