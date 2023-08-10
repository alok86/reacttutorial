import React from "react";

const UpdatedComponent =( OriginalComponent , incrementNumber)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      
          clickHandler = ()=>{
              this.setState(prevState=>{
                  return{count:prevState.count + incrementNumber}
              })
          }

        render(){
            return <OriginalComponent 
            count={this.state.count} 
            incrementCount={this.clickHandler}
            // the following code is use to forword the prope which is forworded fro parant
            // and being tranferd to wrapped component
            {...this.props}
            />
        }
    }
    return NewComponent
}

export default UpdatedComponent