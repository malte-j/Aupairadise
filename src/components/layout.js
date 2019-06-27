import React from "react"
import Helmet from "react-helmet"
import "../styles/global.scss"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Open+Sans&display=swap" rel="stylesheet"/>
      </Helmet>

      {children}
    </div>
  )
}