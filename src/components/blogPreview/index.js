import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./index.module.scss"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter:
            {templateKey: {eq: "blog-post"}}
        },
        limit: 2
      ){
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                   ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark;
  return (
    <div className={css.blogPreview}>
      {edges.map(({node})=>(
        <Link to={node.fields.slug}>
          <Img fluid={node.frontmatter.featuredimage.childImageSharp.fluid} />
          {node.frontmatter.title}<br/>
        </Link>
        
      
      ))}
    </div>
  )
}