import React from "react"
import {  graphql } from "gatsby";

import css from "./index.module.scss"
import logo from "../../static/AupairadiseLogoBig.svg"

import Layout from "../components/layout"
// import BlogPreview from "../components/blogPreview"

export default ({ data }) => {
  
  const { description } = data.allGhostSettings.nodes[0]

  console.log(data)

  return (
  <Layout>
    <header className={css.header}> 
      <img src={ logo } alt="Aupairadise"/>
      <h2>{ description }</h2>
		</header>
		    
    {/* <BlogPreview/> */}
  </Layout>)
}

export const pageQuery = graphql`
query {
  allGhostSettings {
    nodes {
      description
    }
  }
}
`
