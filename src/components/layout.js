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
        <meta name="description" content="Ein Blog von Luise Fuhrhop über ihr Aupairjahr in Amerika."/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121221"/>
        <meta name="apple-mobile-web-app-title" content="Aupairadise"/>
        <meta name="application-name" content="Aupairadise"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
        <link href="https://fonts.googleapis.com/css?family=PT+Serif&display=swap" rel="stylesheet"></link>
      </Helmet>

      <NavBar {...nav}/>
      
      {children}

      <Footer/>
    </div>
  )
}