import React, { Component } from 'react'

class UpdatingExample extends Component {
    constructor(props) {
        console.log("i am from constructor")
      super(props)
    
      this.state = {
        favoritecolor: "red"
      }
    }
    
    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
    getSnapshotBeforeUpdate( prevProps , prevState){
        console.log("I am from getSnapshotBeforUpdate")
        document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
    return
    }
    static getDerivedStateFromProps(props , state){
        console.log("i am from getDerivedStateFromProps")
        return state
    }
    shouldComponentUpdate()
    {
        console.log('I am from shouldComponentUpdate')
        return true
    }
    componentDidUpdate(){
        console.log("I am from componentDidUpdate")
        document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
    }

  render() {
      console.log('i am from render method')
    return (
        <>
        <div>{this.state.favoritecolor}</div>
        <div id='div1'> UpdatingExample</div>
        <div id='div2'>UpdatingExample</div>
        </>
      
    )
  }
}

export default UpdatingExample