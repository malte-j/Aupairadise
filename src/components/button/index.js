import React from "react"
import css from "./index.module.scss"

export default ({ children, className }) => 
<button className={`${css[className]} ${css.button}`}>
  { children }
</button>