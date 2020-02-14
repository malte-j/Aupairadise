import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import css from "./index.module.scss"

export default ({ posts }) => {
  const data = useStaticQuery(graphql`
    query {   
      instagram: file(relativePath: {eq: "socialImages/Instagram.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spotify: file(relativePath: {eq: "socialImages/Spotify.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
    }
  ]

  return (
    <div className={css.posts}>
      {posts.map(({node: post})=>(        
        <article className={css.post} key={post.slug}>
          <div className={css.inside}>
            <Link to={`/${post.slug}/`} > 
              <Img fluid={post.featuredImage.childImageSharp.fluid} className={css.thumbnail}/>
            </Link>
            <Link className={css.title} to={`/${post.slug}/`}> { post.title } </Link>
          </div>
        </article>        
      ))}

      {socialLinks.map(link => (
        <div className={ `${css.post} ${css.social}` } key={link.link}>
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