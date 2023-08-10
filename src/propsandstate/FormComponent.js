import React, { Component } from 'react'


class FormComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:'',
         password:''
      }
      this.userNameChange = this.userNameChange.bind(this)
      this.passwordChange = this.passwordChange.bind(this)
      this.clickHandler = this.clickHandler.bind(this)
    }
    userNameChange = (e)=>{
      this.setState({
        user:e.target.value
      })

    }

    passwordChange = (evt) =>{
      this.setState({
        password:evt.target.value
      })
    }
    clickHandler = (event )=>{
       alert(`hello ${this.state.user} your password is ${this.state.password}`)
       event.preventDefault()
      
        
    }
  render() {
    return (
      <div className='col-md-4'>
          <form onSubmit={this.clickHandler} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
                    <input type='text' className='form-control' placeholder='Enter email' onChange={this.userNameChange} value={this.state.user}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    {/* <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/> */}
                    <input type='password' className='form-control' autoComplete='on' placeholder='Enter password' onChange={this.passwordChange} value={this.state.password}/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                </form>

      </div>
    )
  }
}

export default FormComponent