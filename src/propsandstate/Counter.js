import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,
        // st:0
      }
    }
    increment(){
       
                // this.setState({
                //      count:this.state.count+1
                //  },
                //  () => {
                //      console.log('count is ',this.state.count);
                //  }
                //  )
                this.setState((prevState, props)=>({
                  count:prevState.count+1
                
                }),()=>{
                  console.log('count =' ,this.state.count)
                })
           
    }

    sleep = ms => new Promise(r => setTimeout(r,ms));
    async countrunner()
    {
      for(var i=0 ; i<100;i++)
       {this.increment()
       await this.sleep(1000)
      }
    }
  render() {
    return (
      <div className='col-md-4'>
         <h3>Counter {this.state.count}</h3>
         <button className='btn btn-warning' onClick={()=>this.countrunner()}>Start counter</button>
        </div>
    )
  }
}

export default Counter