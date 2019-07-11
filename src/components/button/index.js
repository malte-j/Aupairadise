import React from "react"
import { Link } from "gatsby"
import css from "./index.module.scss"

export default ({ children, type, to }) => 
<div className={`${type.map(mod => css[mod]).join(' ')} ${css.button}`}>
  <Link to={ to }>
    { children }
  </Link>
</div>