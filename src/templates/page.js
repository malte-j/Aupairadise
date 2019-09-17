import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({data}) => {

  const { ghostPage: page } = data

  return (
  <Layout>
    <section>
      <h1 className='pageTitle'>{ page.title }</h1>
      <div className='content' dangerouslySetInnerHTML={{ __html: page.html }}></div>
    </section>
  </Layout>)
}

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            title,
            html
        }
    }
`
