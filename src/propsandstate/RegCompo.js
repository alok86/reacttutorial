import React, { Component } from 'react'

export class RegCompo extends Component {
    // regular componet did not compare it rerender while its call
  render() {
      console.log('from regular component')
    return (
      <div><h3>Welcome {this.props.name} from Regular Component</h3></div>
    )
  }
}

export default RegCompo