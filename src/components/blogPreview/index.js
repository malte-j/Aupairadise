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
    
      soundcloud: file(relativePath: {eq: "socialImages/Soundcloud.jpg"}) {
        childImageSharp {
          
          fluid(maxWidth: 350, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: {eq: "socialImages/Instagram.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spotify: file(relativePath: {eq: "socialImages/Spotify.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { edges: posts } = data.allMarkdownRemark;

  const socialLinks = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/au__pairadise/",
      image: data.instagram
    },
    {
      title: "Podcast",
      link: "https://open.spotify.com/show/7znUWUFuaMUFdSyV564bQt",
      image: data.spotify
    },
    {
      title: "Podcast",
      link: "https://soundcloud.com/aupairadise",
      image: data.soundcloud
    }  
  ]

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

      {socialLinks.map(link => (
        <div className={ css.post }>
          <div className={ css.inside }>
            <a href={ link.link } target="_blank" rel="noopener noreferrer" >
              <Img fluid={link.image.childImageSharp.fluid} className={css.thumbnail}/>
            </a>
            <a className={css.title} href={ link.link } target="_blank" rel="noopener noreferrer" >
              { link.title }
            </a>
          </div>
        </div>
      ))}
      

    </div>
  )
}