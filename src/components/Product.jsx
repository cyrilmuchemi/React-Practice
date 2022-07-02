import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'

export class Product extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       product: this.props.product
    };
  }
  
  render() {
    return (
      <div className='col-lg-6'>
      <div className='card m-2'>
        <div className='card-body'>
          <div className='text-muted'># {this.state.product.id}</div>
          <h5 className='p-2 border-top'>{this.state.product.productName}</h5>
          <div>${this.state.product.price}</div>
        </div> 
        <div className='card-footer'>
          <div className='float-start'>
            <div className='btn-group'>
            <span className='quantity'>{this.state.product.quantity}</span>
              <button className='btn btn-outline-success' onClick={()=>{this.props.onIncrement(this.state.product, 10)}}>+</button>
              <button className='btn btn-outline-success' onClick={()=>{this.props.onDecrement(this.state.product, 0)}}>-</button>
            </div>
          </div>
          <div className='float-end'>{this.props.children}</div>
        </div>
      </div>
      </div>
    )
  }
}

export default Product
