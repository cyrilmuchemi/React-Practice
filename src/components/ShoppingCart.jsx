import React, { Component } from 'react'
import { Product } from './Product'

export class ShoppingCart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        products: [
          {id: 1, productName: 'iPhone', price: 890, quantity: 0},
          {id: 2, productName: 'Sumsung 4k Tv', price: 900, quantity: 0},
          {id: 3, productName: 'Playstation 5', price: 750, quantity: 0},
          {id: 4, productName: 'Xbox series X', price: 690, quantity: 0},
          {id: 5, productName: 'Nintendo Switch', price: 420, quantity: 0},
          {id: 6, productName: 'Asus Rogue', price: 1090, quantity: 0},
        ],  
      };
    }
    
  render() {
    return (
      <div className='container-fluid'>
        <h4>Shopping Cart</h4>
        <div className='row'>
          {this.state.products.map((prod)=>{
          return <Product 
          key={prod.id} 
          product = {prod}
          onIncrement= {this.handleIncrement}
          onDecrement= {this.handleDectement}
          >
            <button className='btn btn-primary'>Buy Now</button>
          </Product>
        })}
        </div>
      </div>
    )
  }
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product)
    if(allProducts[index].quantity < maxValue) {
      allProducts[index].quantity ++;
      this.setState({products: allProducts})
    }  
  }

  handleDectement = (product, minValue) => {
    //console.log('Item decresed', product)
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product)
    if(allProducts[index].quantity > minValue) {
      allProducts[index].quantity --;
    this.setState({products: allProducts}) 
    }
    
  }
}

export default ShoppingCart
