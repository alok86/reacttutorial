import React,{useState} from 'react'

function UseStateExample1() {
    const[color , setColor]= useState('bg bg-primary')
  return (
    <div className={color}>
        <button className='btn btn-light' onClick={()=>setColor('bg bg-secondary')}> button 1</button>
        <button className='btn btn-light' onClick={()=>setColor('bg bg-info')}> button 2</button>
        <button className='btn btn-light' onClick={()=>setColor('bg bg-warning')}> button 3</button>
    </div>
  )
}

export default UseStateExample1