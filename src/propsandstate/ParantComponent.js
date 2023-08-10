import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
//import PureCompo from './PureCompo'
//import RegCompo from './RegCompo'

export class ParantComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'Alok'
      }
    }
 // uncomment following code to see the effect 
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({
    //             name:'Alok'
    //         })
    //     },2000)
    // }
  render() {
      //console.log('*******************Parant Component***********')
    return (
      <div className='col-md-4'>
        <MemoComponent name={this.state.userName}/>
          {/* <PureCompo name={this.state.userName}/>
          <RegCompo name={this.state.userName}/> */}
      </div>
    )
  }
}

export default ParantComponent