import React , {useState} from 'react'
import UseEffectExample2 from './UseEffectExample2'

function UseEffectExample3() {
    const[display , setDisplay]=useState(true)
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>setDisplay(false)}>Unmount component</button>
        <br/>
        <br/>
        {display && <UseEffectExample2/>}
    </div>
  )
}

export default UseEffectExample3