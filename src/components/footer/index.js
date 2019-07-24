import React from "react"
import css from "./index.module.scss"

const currYear = new Date().getFullYear();

export default ({ children }) => (
  <footer className={ css.footer }>
    <p className={css.copyright}>
      © {currYear} Luise Fuhrhop
    </p>
  </footer>
)