import React from 'react'
type GreetProp ={
    name :{
        Fname:string
        Lname:string
    }
}

const GreetProObj = (props : GreetProp) => {
   
  return (
    <>
    <h5>Welcome {props.name.Fname} {props.name.Lname} </h5>
    </>
  )
}

export default GreetProObj