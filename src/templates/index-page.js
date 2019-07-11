import React from "react"
import {  graphql } from "gatsby";

import "./index-page.scss"

import Layout from "../components/layout"
import logo from "../../static/logo.svg"
import Button from "../components/button"
import BlogPreview from "../components/blogPreview"

export default ({ data }) => {
  const fm = data.markdownRemark.frontmatter
  return (
  <Layout nav={{chameleon: true}}>
    <header>
			<div className="placeholder"></div>
 
      <img className="logo" src={logo} alt="Trekdinner Oldenburg"/>
       
      <Button type={['light']} to="/404">{fm.cta}</Button>

			<svg className="wave" viewBox="0 0 411 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M205.5 12C325 -14 411 12 411 12V24H0V12C0 12 86 38 205.5 12Z" fill="white"/>
			</svg>
		</header>
		
		<section className="about">
			<h1>{fm.about.heading}</h1>	
			<p>{fm.about.description}</p>
		</section>
		
		<section className="log">
			<h1>{fm.postsName}</h1>


		</section>
      
      <BlogPreview/>
      <Button to="/" type={['dark', 'centered']}>Alle Einträge anschauen</Button>

		<section>

			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sed expedita dicta iure sapiente eum omnis blanditiis reiciendis, ducimus asperiores error porro culpa ratione, itaque quisquam? Optio, repellendus voluptates.</p>
		</section>   

    </Layout>)
}

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
    frontmatter {
      title
      cta
      about {
        heading
        description
      }
      postsName
    }
  }
}
`