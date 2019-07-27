import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import "./blog-post.scss"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
      },
    }
  }

  return <Img {...normalizedProps} />
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <article>
        {
          (frontmatter.featuredimage ? 
            <NonStretchedImage className='featuredImage' fluid={frontmatter.featuredimage.childImageSharp.fluid}/>
          : "")

        }
        <div className="header">
          <h1 className="title" >{ frontmatter.title }</h1>
          <h2 className="date">{ frontmatter.date} </h2>
        </div>
        <section>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id:  { eq: $id } ) {
      html
      frontmatter {
        date(locale: "de", formatString: "DD MMMM, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }`