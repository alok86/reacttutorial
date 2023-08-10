import React, { Component } from 'react'
import Child from './Child'

class Parant extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
           parantName:'parant' 
      }
       this.parantGreet = this.parantGreet.bind(this)
    }

    parantGreet(child)
    {
       alert(`hello ${this.state.parantName} from ${child}`)
    }
  render() {
    return (
      <div className='col-md-4 border border-success'>
          <Child greetHandler={this.parantGreet}/>
      </div>
    )
  }
}

export default Parant