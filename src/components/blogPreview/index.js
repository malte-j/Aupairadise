import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./index.module.scss"

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
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      {edges.map(({node})=>(
        <Link to={node.fields.slug}>
          {node.frontmatter.title}<br/>
        </Link>
        
      
      ))}
    </div>
  )
}