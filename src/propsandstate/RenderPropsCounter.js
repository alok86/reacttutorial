import React, { Component } from 'react'

class RenderPropsCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
  
      clickHandler = ()=>{
          this.setState({
              count:this.state.count+1
          })
      }
  render() {
    return (
      <div>
          {this.props.render(this.state.count,this.clickHandler)}
      </div>
    )
  }
}

export default RenderPropsCounter