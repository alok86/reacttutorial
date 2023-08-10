import React from 'react'

type headingType = {
    children:string
}
export const Heading = (props : headingType) => {
  return (
   <>
    <h3>{props.children}</h3>
   <h3 className='text text-danger'>{props.children}</h3>
   </>
  )
}
