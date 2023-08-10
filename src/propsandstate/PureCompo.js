import React, { PureComponent } from 'react'

export class PureCompo extends PureComponent {

    // pure componet render on the basis of sellow prop and state comparision
  render() {
      console.log('form pure component')
    return (
      <div>
          <h3>Welcome {this.props.name} from pure Component</h3>
      </div>
    )
  }
}

export default PureCompo