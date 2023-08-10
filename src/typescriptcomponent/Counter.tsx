import React,{useReducer} from 'react'
type CounterState = {
    count : number
}
// descreminated union of typescript
type UpdateAction = {
    type : 'increment'| 'decrement'
    payload : number
}

type ResetAction ={
    type : 'reset'
}

// type CounterAction ={
//     type : string
//     payload ?: number
// }

const initialState = {
    count : 0
}

function reducer (state:CounterState , action:UpdateAction|ResetAction)
{
    switch(action.type)
    {
        case 'increment':
            return {count : state.count + action.payload}
        case 'decrement':
            return {count : state.count - action.payload}
        case 'reset':
            return initialState
        default :
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <h5>{state.count}</h5>
    <button className='btn btn-primary m-1' onClick={()=>dispatch({type:'increment' ,payload : 10})}>increment 10</button>
    <button className='btn btn-primary m-1' onClick={()=>dispatch({type:'decrement' ,payload : 10})}>decrement 10</button>
    <button className='btn btn-primary m-1' onClick={()=>dispatch({type:'reset'})}>reset</button>
    </>
  )
}
