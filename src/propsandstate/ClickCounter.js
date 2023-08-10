import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }

    // clickHandler = ()=>{
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }

  render() {
      const {count , incrementCount} = this.props
    return (
      <button className='btn btn-info' onClick={incrementCount}>{this.props.name} Clicked {count} time</button>
    )
  }
}

export default UpdatedComponent(ClickCounter , 2)