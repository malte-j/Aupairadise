import React from "react"
import css from "./index.module.scss"

import Button from "../button"
import FindUsOnF from "../../../static/FindUsOnF.png"

const currYear = new Date().getFullYear();

export default ({ children }) => (
  <footer className={ css.footer }>
    <svg className={ css.wave } viewBox="0 0 411 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M205.5 14.5555C86 40.5555 0 14.5555 0 14.5555V0H411V14.5555C411 14.5555 325 -11.4445 205.5 14.5555Z" fill="white"/>
    </svg>

    <div className={ css.content }>
      <p className={css.copyright}>
        © 2009 - {currYear} Trekdinner Oldenburg
      </p>

      <Button externalLink type={['light']} to="https://de-de.facebook.com/trekdinner.oldenburg.de/">
        <img src={ FindUsOnF } alt="Facebook"/>
      </Button>
    </div>

  </footer>
)