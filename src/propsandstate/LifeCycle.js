import React, { Component } from 'react'
import Mounting from './Mounting'
import Unmounting from './Unmounting'
import Updating from './Updating'


class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  src:lifecycle
        methods:<h3 className='text text-secondary'>all related its phase are exposed here click button beside to know about its methods</h3>
      }
    }

    mountingHandler = () => {
        this.setState({
            methods:<Mounting/>
        })
    }
    updatingHandler = () => {
        this.setState({
            methods:<Updating/>
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
         <div className='col-md-2'>
            <div className="btn-group-vertical btn-lg">
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.mountingHandler}>Mounting</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={this.updatingHandler}>Updating</button>
                <button type="button" className="btn btn-warning btn-lg btn-block" onClick={this.unmountingHandler}>Unmounting</button>
                <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.errorHandler}>Error Handling</button>
            </div>
        </div>
        <div className='col-md-5'>
            {/* <img className='col-md-12' width='95%' height='95%' src={this.state.src} alt='lifecycle'/> */}
            {this.state.methods}
        </div>
        <div className='col-md-5'>
            <h1 className='text text-danger'>Lifecycle Methods </h1>
            <h2 className='text text-success'>Mounting</h2>
            <p>
                When instance of component being created and inserted into DOM
            </p>
            
            <h2 className='text text-warning'>Updating</h2>
            <p>
                When a component is being rerandered as a result of changes to either its props or state
            </p>
            
            <h2 className='text text-info'>Unmounting</h2>
            <p>
                When component is being removed from the DOM
            </p>
            
            <h2 className='text text-danger'>Erro Handling</h2>
            <p>
                When there is an error during rendering , in  a lifecycle Methods,or in the constructor of any child component
            </p>
        </div>
    </div>
    )
  }
}

export default LifeCycle