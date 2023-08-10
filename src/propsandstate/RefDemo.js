import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
      super(props)
     // step 1  create ref as follow
      this.inputRef = React.createRef()

      // older approch is using as follows 
      //older stap 1
      this.cbRef = null
      //older step 2
      this.setCbRef = element =>{
          this.cbRef = element
      }

    }
   
    componentDidMount()
    {
        //older step 4
        if(this.cbRef){
            this.cbRef.focus()
        }

        //console.log(this.inputRef)
         // step 3 focus on DOM node as follows
       // this.inputRef.current.focus()
    }

    clickHandler = () =>
    { 
        // older approch
        alert(this.cbRef.value)
        // work when newer approch
      // alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div className='col-md-4'>
          {/* step 2 create reference as follow */}
          <input type='text' ref={this.inputRef}/>
          {/*older step 3 create reference as follow */}
          <input type='text' ref={this.setCbRef}/>
          <button className='btn btn-info' onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefDemo