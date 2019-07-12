import React from "react"
import { Link } from "gatsby"
import css from "./index.module.scss"


const internalLinkA = ( children, to ) =>
  <Link to={ to }>
    { children }
  </Link>

const externalLinkA = ( children, to ) => 
  <a href={ to } target="_blank" rel="noopener noreferrer" >
    { children }
  </a>

export default ({ children, type, to, externalLink }) => 
<div className={`${type.map(mod => css[mod]).join(' ')} ${css.button}`}>
  { (externalLink ? externalLinkA(children, to) : internalLinkA(children, to)) }
</div>
