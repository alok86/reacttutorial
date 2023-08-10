import React from "react";

const Greet = () => {
    // return(
    //     <h1 style={{color:'red'}}>from greet without JSX</h1>
    // );
    return React.createElement('div',{style:{color:'red'},className:'col-md-4 bg-warning'},React.createElement('h1',{id:'divgreet'},'greet without JSX' ));
};

export default Greet;