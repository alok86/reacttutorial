import React from "react";

// const Greet = (props)=>{
//     return(
//         <div className="col-md-4 bg-info">
//              <h1>Welcome on my first page {props.name} and hobby is {props.hobby}</h1>
//              {props.children}
            
//         </div>
       
//     );
// };

// destructuring of props in funtion parameter itself
// const Greet = ({name , hobby , children})=>{
//     return(
//         <div className="col-md-4 bg-info">
//              <h1>Welcome on my first page {name} and hobby is {hobby}</h1>
//              {children}
            
//         </div>
       
//     );
// };

const Greet = (props)=>{
    const {name,hobby,children}=props
    return(
        <div className="col-md-4 bg-info">
             <h1>Welcome on my first page {name} and hobby is {hobby}</h1>
             {children}
            
        </div>
       
    );
};

export default Greet;