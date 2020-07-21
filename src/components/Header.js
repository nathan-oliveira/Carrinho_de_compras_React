import './css/Header.css'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MenuSvg from './svg/bars-solid.svg'
import CloseSvg from './svg/times-solid.svg'
import CartSvg from './svg/shopping-cart-solid.svg'
import { DataContext } from './Context'

class Header extends Component {
  static contextType = DataContext

  state = {
    toggle: false
  }

  menuToggle = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const {toggle} = this.state;
    const { cart } = this.context;
    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <img src={MenuSvg} alt="" width="23"/>
        </div>
        <div className="logo">
          <h1><Link to="/">Nike</Link></h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle": ""}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li className="close" onClick={this.menuToggle}>
              <img src={CloseSvg} alt="" width="20"/>
            </li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <img src={CartSvg} alt="" width="23"/>
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header