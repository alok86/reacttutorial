import React,{useReducer} from 'react'

const initialState = {
    firstCount : 0
}

const reducer = (state , action)=>{
    switch(action.type)
    {
        case 'increment':
            return{firstCount:state.firstCount+1}
        case 'decrement':
            return{firstCount:state.firstCount-1}
        case 'reset':
            return initialState
        default :
            return state
    }
}

function UseReducerExample2() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [stateTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
      <>
    <div>count - {state.firstCount}</div>
    <button className='btn btn-info' onClick={()=>{dispatch({type:'increment'})}}>increment</button>
    <button className='btn btn-info' onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
    <button className='btn btn-info' onClick={()=>{dispatch({type:'reset'})}}>reset</button>
    <div>count - {stateTwo.firstCount}</div>
    <button className='btn btn-info' onClick={()=>{dispatchTwo({type:'increment'})}}>increment</button>
    <button className='btn btn-info' onClick={()=>{dispatchTwo({type:'decrement'})}}>decrement</button>
    <button className='btn btn-info' onClick={()=>{dispatchTwo({type:'reset'})}}>reset</button>
    </>
  )
}

export default UseReducerExample2