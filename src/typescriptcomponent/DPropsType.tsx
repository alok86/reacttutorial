import React from 'react'
import GreetProp from './GreetProp'


export const DPropsType = (props :React.ComponentProps<typeof GreetProp>) => {
  return (
    <>
    {
        props.isLogedIn?
        <h5>hello {props.name} your have {props.messageCount} unread message</h5> :
        <h5>Welcome Guest</h5>
    }
    </>
  )
}
