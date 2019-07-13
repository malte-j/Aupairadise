import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => (
  <Layout>

    <section>
      <h1>{ data.markdownRemark.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </section>

    <section>
     <div style={{ height: "60vh"}} dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.map }}></div>
    </section>


  </Layout>
)

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
    frontmatter {
      title
      map
    }
    html
  }
}
`