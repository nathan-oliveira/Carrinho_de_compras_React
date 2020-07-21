import '../css/Details.css'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { DataContext } from '../Context'
import Colors  from './Colors'

class Details extends Component {
  componentDidMount() {
    this.getProduct();
  }

  static contextType = DataContext;

  state = {
    product: []
  }

  getProduct = () => {
    if(this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter(item => {
        return item._id === this.props.match.params.id
      })
      this.setState({product: data})
    }
  }

  render() {
    const { product } = this.state
    const { addCart } = this.context

    return (
      <>
        {
          product.map(item => (
            <div className="details" key={item._id}>
              <img src={item.src} />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors}/>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                  Add to cart
                </Link>
              </div>
            </div>
          ))
        }
      </>
    )
  }
}

export default Details