import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCount extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
  
    //   clickHandler = ()=>{
    //       this.setState({
    //           count:this.state.count+1
    //       })
    //   }
  render() {
    const {count , incrementCount} = this.props
    return (
      <h3 onMouseOver={incrementCount}> mouse hover {count} time</h3>
    )
  }
}

export default UpdatedComponent(HoverCount , 3)