import React from "react"
import { Link } from "gatsby"
import css from "./index.module.scss"

export default ({ children, className, to }) => 
<Link to={ to } className={`${css[className]} ${css.button}`}>
  { children }
</Link>