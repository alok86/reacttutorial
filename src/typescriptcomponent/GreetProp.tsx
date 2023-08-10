import React from 'react'


type GProps ={
    name : string
    messageCount?: number
    isLogedIn : boolean
}

const GreetProp = (props: GProps) => {
  const {messageCount = 0 } = props
  return (
      <>
      {props.isLogedIn
        ? <h4>welcom {props.name} you have {messageCount} unread messages...</h4>
        : <h4>Welcome Guest</h4>}
      </>
  )
}

export default GreetProp

