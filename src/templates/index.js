import React from "react"
import {  graphql } from "gatsby";

import css from "./index.module.scss"
import logo from "../../static/AupairadiseLogoBig.svg"

import Layout from "../components/layout"
import BlogPreview from "../components/blogPreview"
// import Pagination from "../components/pagination"

export default ({ data, pageContext }) => {
  
  const { description } = data.allGhostSettings.nodes[0]
  console.log(pageContext)

  return (
  <Layout>
    <header className={css.header}> 
      <img src={ logo } alt="Aupairadise"/>
      <h2>{ description }</h2>
		</header>
		    
    <BlogPreview posts={data.allGhostPost.edges}/>
    {/* <Pagination pageContext={pageContext}/> */}
  </Layout>)
}


export const pageQuery = graphql`
query GhostPostQuery($limit: Int!, $skip: Int!) {
  allGhostSettings {
    nodes {
      description
    }
  }

  allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          title,
          slug,
          feature_image,
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
}
`
