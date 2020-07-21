import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Products from './section/Products'
import Details from './section/Details'
import Cart from './section/Cart'
import Payment from './section/Payment'

class Section extends Component {
  render() {
    return (
      <section>
        <Route exact path="/" component={Products} />
        <Route exact path="/product" component={Products} />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
      </section>
    )
  }
}

export default Section