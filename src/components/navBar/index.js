import React from "react"
import { Link } from 'gatsby'
import css from "./index.module.scss"

const Navbar = class extends React.Component {
  
  constructor(props) {
    super(props)
    let currentClass = (props.chameleon ? css.navbarChameleon : '')
    this.state = {
      currentClass,
      active: false,
      onScrollClass: css.navbarActive,
    }
  }
  
  componentDidMount() {
    if(this.props.chameleon) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    if (this.props.chameleon) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  handleScroll = e => {
    if (!this.state.active && window.scrollY > 0) {
      this.setState({
        currentClass: `${this.state.onScrollClass} ${css.navbarChameleon}`,
        active: true,
      })
    } else if (this.state.active & window.scrollY === 0){
      this.setState({
        currentClass: css.navbarChameleon,
        active: false
      })
    }
  }


  render() {
    return (
      <nav className={`${css.navbar} ${this.state.currentClass}`}>
          <div className={css.wrapper}>
            <Link to="/">Home</Link>
            <Link to="/about">Über Uns</Link>
            <Link to="/contact">Kontakt</Link>
            <Link to="/blog">Captain's Log</Link>
          </div>
      </nav>
    )
  }
}

export default Navbar