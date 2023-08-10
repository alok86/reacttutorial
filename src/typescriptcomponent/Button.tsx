import React from 'react'

type ButtonProps ={
    handleClick : (event:React.MouseEvent<HTMLButtonElement> , id : number )=> void
}

export const Button = (props: ButtonProps) => {
  return (
    <button className='btn btn-primary m-1' onClick={event=>props.handleClick(event ,1)}>click</button>
  )
}
