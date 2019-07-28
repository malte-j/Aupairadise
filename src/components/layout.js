import React from "react"
import Helmet from "react-helmet"
import "../styles/global.scss"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navBar"
import Footer from "../components/footer"

export default ({ children, nav }) => {
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
    <div className="layout">
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link href="https://fonts.googleapis.com/css?family=PT+Serif&display=swap" rel="stylesheet"></link>
      </Helmet>

      <NavBar {...nav}/>
      
      {children}

      <Footer/>
    </div>
  )
}