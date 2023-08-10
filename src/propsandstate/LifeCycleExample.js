import React, { Component } from 'react'
import MountingExample from './MountingExample'
import Unmounting from './Unmounting'
import UpdatingExample from './UpdatingExample'


class LifeCycleExample extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  src:lifecycle
        methods:<h3 className='text text-secondary'>all related its phase are exposed here click button beside to know about its methods</h3>
      }
      
    }

    mountingHandler = () => {
        this.setState({
            methods:<MountingExample fevcol='blue'/>
        })
    }
    updatingHandler = () => {
        this.setState({
            methods:<UpdatingExample stt='second'/>
        }) 
    }
    unmountingHandler = () => {
        this.setState({
            methods:<Unmounting/>
        }) 
    }
    errorHandler = () => {
        this.setState({
            methods:<h3 className='text text-danger'>
            <p>static getDerivedStateFromError </p> 
            <p>componentDidCatch </p>
            </h3>
        })
    }
render() {
    return (
    <div className='row'>
         <div className='col-md-3'>
            <div className="btn-group-vertical btn-lg">
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.mountingHandler}>Mounting</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={this.updatingHandler}>Updating</button>
                <button type="button" className="btn btn-warning btn-lg btn-block" onClick={this.unmountingHandler}>Unmounting</button>
                <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.errorHandler}>Error Handling</button>
            </div>
        </div>
        <div className='col-md-9'>
            {/* <img className='col-md-12' width='95%' height='95%' src={this.state.src} alt='lifecycle'/> */}
            {this.state.methods}
        </div>
        
    </div>
    )
  }
}

export default LifeCycleExample;