import React, { useContext } from 'react'
import { countContext } from './UseReducerExample4'

function ReducerHookB() {

    const Context = useContext(countContext)
    return (
        <div className='mt-2'>
            component B = {Context.countState}
            <button className='btn btn-dark m-1' onClick={() => Context.countDispatch('increment')}>Increment</button>
            <button className='btn btn-dark m-1' onClick={() => Context.countDispatch('decrement')}>Decrement</button>
            <button className='btn btn-dark m-1' onClick={() => Context.countDispatch('reset')}>Reset</button>
        </div>

    )
}

export default ReducerHookB