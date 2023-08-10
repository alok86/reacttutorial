import React, { Component } from 'react'
import InputRef from './InputRef'

class FocusInput extends Component {
    constructor(props) {
      super(props)
      // ref can not be attached in functional component it can only be used as class component
      this.componentRef = React.createRef()
    }
    clickHandler = ()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div className='col-md-4'>
          <span className='text text-primary'>in this example parant calling the child method where button is part of parant while text fild is part of child on clicking the button child getting focus</span>
          <InputRef ref={this.componentRef}/>
          <button className='btn btn-info' onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput