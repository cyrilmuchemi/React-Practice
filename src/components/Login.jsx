import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: '',
         password: ''
      }
    }
    
  render() {
    return (
      <div className='col-lg-9'>
        <h4 className='m-1 p-2 border-bottom'>Login</h4>

        {/*Email Starts*/}
        <div className='form-group form-row'>
          <label className='col-lg-4'>Email:</label>
          <input type='text' 
          className='form-control' 
          value={this.state.email}
          onChange={(event)=> {this.setState( {email: event.target.value});}}
          />
        </div>
        {/*Email ends */}

        {/*password Starts*/}
        <div className='form-group form-row'>
          <label className='col-lg-4'>Password:</label>
          <input type='password' 
          className='form-control' 
          value={this.state.password}
          onChange={(event)=> {this.setState( {password: event.target.value});}}
          />
        </div>
        {/*password ends */}
        <div>
          <button className='btn btn-primary' onClick={this.onLoginClick}>Login</button>
        </div>
      </div>
    )
  }
  onLoginClick = () => {
    console.log(this.state)
  }
}

export default Login
