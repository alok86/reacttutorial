import React, { Component } from 'react'

export class MountingExample extends Component {
    constructor(props) {
      console.log('I am from constructor')
      super(props)
    
      this.state = {
         fevcolor : 'red'
      }
    }
    static getDerivedStateFromProps(props,state)
    {
      console.log('I am from getDerivedStateFromProps')
      state={
        fevcolor:props.fevcol
      }
      
      return state
     
    }

    componentDidMount(){
      console.log('I am from componentDidMount')
      // setTimeout(() =>{
      //   this.setState({fevcolor:'green'})
      // },2000)
      this.setState({fevcolor:'green'})
    }
  render() {
    console.log('I am form render method')
    return (
      <>
      <h3>{this.state.fevcolor}</h3>
      </>
    )
  }
}

export default MountingExample