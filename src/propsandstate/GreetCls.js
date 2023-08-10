import React from "react";

class GreetCls extends React.Component
{
    render(){
        const {name ,lastname}=this.props
        return(
            <div className="col-md-4 bg-secondary">
                <h2>hello {name} {lastname} welcome your from GreetCls</h2>
        
            </div>
          );  
    };
};

export default GreetCls;