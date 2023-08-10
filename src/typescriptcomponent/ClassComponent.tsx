import React, { Component } from 'react'
type stateType = {
    count:number
}
type propeType = {
    msg : string
}
export class ClassComponent extends Component<propeType , stateType> {
    state = {
        count:0
    }
    clickHandle = ()=>{
        this.setState(prevState =>({count:prevState.count+1}))
    }
  render() {
    return (
      <>
      <h5>{this.props.msg} and {this.state.count}</h5>
      <button className='btn btn-primary m-1' onClick={this.clickHandle}>Increment</button>
      </>
    )
  }
}

export default ClassComponent