import React, { Component } from 'react'

export class MainComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pageTile: 'customers',
       customersCount: 5,
       customers: [
        {
          id:1, 
          name:'Scott', 
          phone:'133-777', 
          address:{city:'New York'},
          photo: 'https://picsum.photos/id/1011/60'
        },
        {
          id:2, name:'Angie', 
          phone:'222-666', 
          address:{city:'New Delhi'},
          photo: 'https://picsum.photos/id/1012/60'
        },
        {
          id:3, name:'Qui', 
          phone:'000-987', 
          address:{city:'Dubai'},
          photo: 'https://picsum.photos/id/1013/60'
        },
        {
          id:4, 
          name:'Putha', 
          phone:'', 
          address:{city:'Kisumu'},
          photo: 'https://picsum.photos/id/1014/60'
        },
        {
          id:5, 
          name:'Justin', 
          address:{city:'London'},
          photo: 'https://picsum.photos/id/1015/60'
        }
       ]
    }
  }
  onStopClick = () => {
    console.log('Sop there!')
  }

  getRenderToPhone = (phone) => {
    if(phone) {
      return phone
    }
    else {
      return <div className='bg-danger p-2'>No Phone</div>
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Main Content</h1>
        <button className='btn btn-danger' onClick={this.onStopClick}>Stop</button>
        <table className='table'>
          <thead>
            <tr>
              <th>Photo</th>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerTable()}</tbody>
        </table>
      </div>
    )
  }
  getCustomerTable = () => {
   return (
      this.state.customers.map((customer)=>{
        return(
        <tr key={customer.id}>
          <tr><img src={customer.photo} alt= 'Customer' /></tr>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{this.getRenderToPhone(customer.phone)}</td>
            <td>{customer.address.city}</td>
       </tr>
        )

      })
   )

  }
}

export default MainComponent
