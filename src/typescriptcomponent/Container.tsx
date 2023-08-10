import React from 'react'
type containerProps ={
    styles : React.CSSProperties
}

export const Container = (props : containerProps) => {
  return (
    <div style={props.styles}>
        <h1>Text content goes here ... </h1>
    </div>
  )
}
