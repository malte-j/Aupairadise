import React from "react"
import Layout from "../components/layout"
import "./index-page.scss"
import {  graphql } from "gatsby";

import logo from "../../static/logo.svg"
import Button from "../components/button"

export default ({ data }) => {
  const fm = data.markdownRemark.frontmatter
  return (
  <Layout>
    <header>
			<div className="placeholder"></div>
 
      <img className="logo" src={logo} alt="Trekdinner Oldenburg"/>
       
      <Button className="light" to="/404">{fm.cta}</Button>


      {/* <button className="button--bright">Mehr erfahren</button> */}
			
			<svg className="wave" viewBox="0 0 411 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M205.5 12C325 -14 411 12 411 12V24H0V12C0 12 86 38 205.5 12Z" fill="white"/>
			</svg>
		</header>
		
		<section className="about">
			<h1>{fm.about.heading}</h1>	
			<p>{fm.about.description}</p>
		</section>
	
    {console.log(data.markdownRemark.frontmatter.about.heading)}
    	
		
		
		<section className="log">
			<h1>{fm.postsName}</h1>

			<div className="posts">
				<div className="post">
					<img src="https://fillmurray.com/900/500" alt=""/>
					<p>Hello there, General Kenobi, I'd really like to talk to you.</p>
				</div>
	
				<div className="post">
					<img src="https://fillmurray.com/900/500" alt=""/>
					<p>You're a bold one!</p>
				</div>
			</div>

			<button className="button--fullwidth">Alle Einträge anschauen</button>

		</section>

		<section>

			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero sed expedita dicta iure sapiente eum omnis blanditiis reiciendis, ducimus asperiores error porro culpa ratione, itaque quisquam? Optio, repellendus voluptates.</p>
		</section>   

    </Layout>)
}

/*
   <p>{data.site.siteMetadata.title}</p>
<Link to={'/my-files'}>my Files</Link>

     */

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