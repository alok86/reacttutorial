import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParantInput extends Component {
    constructor(props) {
      super(props)
     this.inputRef = React.createRef()
    }
    clickHandler = ()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div className='col-md-4'>
          <FRInput ref={this.inputRef}/>
          <button onClick={this.clickHandler}> Focus input</button>
      </div>
    )
  }
}

export default FRParantInput