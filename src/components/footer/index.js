import React from "react"
import css from "./index.module.scss"

import Button from "../button"
// import FindUsOnF from "../../../static/FindUsOnF.png"

const currYear = new Date().getFullYear();

export default ({ children }) => (
  <footer className={ css.footer }>
    <p className={css.copyright}>
      © {currYear} Luise Fuhrhopp
    </p>
  </footer>
)