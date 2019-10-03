import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import "./blog-post.scss"

// const NonStretchedImage = props => {
//   let normalizedProps = props
//   if (props.fluid && props.fluid.presentationWidth) {
//     normalizedProps = {
//       ...props,
//       style: {
//         ...(props.style || {}),
//         maxWidth: props.fluid.presentationWidth,
//       },
//     }
//   }

//   return <Img {...normalizedProps} />
// }

export default ({ data }) =>{
  const { ghostPost: post } = data
    
  return (
    <Layout>
      <article>
        <div className="wrapper">
          <Img className="thumbnail" fluid={ post.featuredImage.childImageSharp.fluid }/>
        </div>
        
        <div className="content">
          <div className="header">
            <h1 className="title" >{ post.title }</h1>
            <h2 className="date">{ post.published_at } </h2>
          </div>
          
          <section>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </section> 
        </div>
      </article>
    </Layout>
  )
}

export const postQuery = graphql`
    query($slug: String!) {
      ghostPost(slug: { eq: $slug }) {
          title
          published_at(locale: "de", formatString: "DD. MMMM YYYY")
          html
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
`

// export const pageQuery = graphql`
//   query($id: String!) {
//     markdownRemark(id:  { eq: $id } ) {
//       html
//       frontmatter {
//         date(locale: "de", formatString: "DD MMMM, YYYY")
//         title
//         featuredimage {
//           childImageSharp {
//             fluid(maxWidth: 700) {
//               ...GatsbyImageSharpFluid
//               presentationWidth
//             }
//           }
//         }
//       }
//     }
//   }`