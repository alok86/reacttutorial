import React from 'react'
type oscarType ={
    children : React.ReactNode
}

export const OscarProp = (props : oscarType) => {
  return (
    <>
    <h5 className='text text-success'> Oscar gose to {props.children}</h5>
    </>
  )
}
