import React,{useReducer} from 'react'

const initialState = {
    firstCount:0,
    secondCount:0
}

const reducer = (state ,action)=>{
    switch(action.type)
    {
        case 'increment':
            return{...state,firstCount : state.firstCount + action.value}
        case 'decrement':
            return{...state,firstCount : state.firstCount - action.value}
        case 'incrementtwo':
            return{...state,secondCount : state.secondCount + action.value}
        case 'decrementtwo':
            return{...state,secondCount : state.secondCount - action.value}
        case 'reset' :
            return initialState
        default :
            return state
    }
}

function UseReducerExample3() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <div>counter One - {state.firstCount}   ,   counter two -{state.secondCount}</div>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'increment' , value:1})}>increment</button>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'decrement' , value:1})}>decrement</button>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'increment' , value:5})}>increment 5 </button>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'decrement' , value:5})}>decrement 5</button>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'incrementtwo' , value:1})}>increment counter two</button>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'decrementtwo' , value:1})}>decrement counter two</button>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'incrementtwo' , value:5})}>increment counter two 5 </button>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'decrementtwo' , value:5})}>decrement counter two 5</button>
    <button className='btn btn-warning' onClick={()=>dispatch({type:'reset'})}>reset</button>
    </>
  )
}

export default UseReducerExample3