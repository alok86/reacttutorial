import React from "react";

class Message extends React.Component
{   
    constructor()
    {
        super();
        this.state={
            message:'Please click here to subscribe'
        }
    }
    changeMessage()
    {
       this.setState({
           message:'Thank you for subscribing'
       })
    }
    render()
    {
        const {message} = this.state 
        // return(
        //     <div className="col-md-4 ">
        //         <h3 className="text-info">{this.state.message}</h3>
        //         <button className="btn btn-primary" onClick={()=>this.changeMessage()}>subscribe</button>
        //     </div>
        // )
        return(
            <div className="col-md-4 ">
                <h3 className="text-info">{message}</h3>
                <button className="btn btn-primary" onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message