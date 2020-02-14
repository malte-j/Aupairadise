import React from "react"
import css from "./index.module.scss"
import { Link } from 'gatsby'

// pageNumber: 0
// humanPageNumber: 1
// skip: 0
// limit: 9
// numberOfPages: 2
// previousPagePath: ""
// nextPagePath: "/blog/2"

export default ({ pageContext }) => {


  if(pageContext.numberOfPages > 0) {
    const links = Array(2).map(el => (<div>hi</div>))
  
  
    return (
      <footer className={ css.footer }>
        <p className={css.copyright}>
          {
            pageContext.previousPagePath !== "" && 
            <Link to={pageContext.previousPagePath}>«</Link> 
          }

         {links}

          {
            pageContext.nextPagePath !== "" && 
            <Link to={pageContext.nextPagePath}>»</Link> 
          }
  
        </p>
      </footer>
    )
  } else {
    return "";
  }
}