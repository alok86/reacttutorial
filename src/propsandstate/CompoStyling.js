import React from 'react'

function CompoStyling(props) {
    const textStyle={
        fontSize:'22px',
        color:'orange',
        textShadow:'2px 2px gray',
        border: 'px solid pink',
        borderRadius:'5px',
        boxShadow:'5px 10px gray',
        margin:'15px'
    }
    // inline styling 
  return (
    <div className='col' >
        <div style={textStyle}>
        <h1> Self styled component {props.user}</h1>
        </div>
        
    </div>
  )
}

export default CompoStyling