import React, { Component } from 'react'
 
 export class CondiGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn:false,
          user:'user'
       }
       this.selectUser = this.selectUser.bind(this)
     }

     selectUser(){
         this.state.isLoggedIn?
         this.setState({user:'alok',isLoggedIn:false}):
         this.setState({user:'Saumya',isLoggedIn:true})
     }
   render() {
     return (
       <div className='col border border-warning'>
           <h1 className='text text-info'> hello {this.state.user}</h1>
           <button className='btn btn-success' onClick={this.selectUser}>greet user</button>
       </div>
     )
   }
 }
 
 export default CondiGreeting