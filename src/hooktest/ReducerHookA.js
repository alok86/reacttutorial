import React ,{useContext} from 'react'
import { countContext } from './UseReducerExample4'


function ReducerHookA() {
    const Context = useContext(countContext)
  return (
    <div>
        component A = {Context.countState}
        <button className='btn btn-success m-1' onClick={()=>Context.countDispatch('increment')}>Increment</button>
        <button className='btn btn-success m-1' onClick={()=>Context.countDispatch('decrement')}>Decrement</button>
        <button className='btn btn-success m-1' onClick={()=>Context.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerHookA