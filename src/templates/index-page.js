import React from "react"
import {  graphql } from "gatsby";

import css from "./index-page.module.scss"
import logo from "../../static/AupairadiseLogoBig.svg"

import Layout from "../components/layout"
import BlogPreview from "../components/blogPreview"

export default ({ data }) => {
  const fm = data.markdownRemark.frontmatter
  return (
  <Layout>
    <header className={css.header}> 
      <img src={ logo } alt="Aupairadise"/>
      <h2>{fm.blogDescription}</h2>
		</header>
		    
    <BlogPreview/>
  </Layout>)
}

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
    frontmatter {
      blogDescription
    }
  }
}
`