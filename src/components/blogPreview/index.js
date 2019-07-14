import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "./index.module.scss"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {
          frontmatter:
            {templateKey: {eq: "blog-post"}}
        },
        limit: 8
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
                  fluid(maxWidth: 700) {
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
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className={css.posts}>
      {posts.map(({node: post})=>(        
        <article className={css.post} key={post.fields.slug}>
          <div className={css.inside}>
            <Link to={post.fields.slug} > 
              <Img fluid={post.frontmatter.featuredimage.childImageSharp.fluid} className={css.thumbnail}/>
            </Link>
            <Link className={css.title} to={post.fields.slug}> {post.frontmatter.title} </Link>
          </div>
        </article>        
      ))}
    </div>
  )
}