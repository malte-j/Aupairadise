import React from "react"
import css from "./index.module.scss"
// import Img from "gatsby-image"

import Layout from "../../components/layout"
import BlogPreview from "../../components/blogPreview"

export default () => {
  return (
    <Layout>
      <section>
        
        <h1 className={ css.title }>Mein Blog</h1> 
        
        <BlogPreview/> 

      </section>
    </Layout>
  )
}