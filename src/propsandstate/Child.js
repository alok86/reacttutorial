import React from 'react'

export default function Child(props) {
  return (
    <div>
        <button className='btn btn-info' onClick={()=>props.greetHandler('child')}>greet Parant</button>
    </div>
  )
}
