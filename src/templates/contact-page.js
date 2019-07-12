import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => (
  <Layout>

  </Layout>
)

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
    frontmatter {
      title
      cta
      about {
        heading
        description
      }
      postsName
    }
  }
}
`