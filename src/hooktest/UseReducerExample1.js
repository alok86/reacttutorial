import React,{useReducer} from 'react'
const initialState =0

const reducer = (state , action) => {
  switch(action){
      case 'increment' :
          return state + 1
      case 'decrement' :
          return state - 1
      case 'reset':
          return initialState
      default :
          return state
  }
}


function UseReducerExample1() {
   const [count , dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>count - {count}</div>
        <button className='btn btn-primary' onClick={()=> dispatch('increment')}>increment</button>
        <button className='btn btn-primary' onClick={()=> dispatch('decrement')}>decrement</button>
        <button className='btn btn-primary' onClick={()=> dispatch('reset')}>reset</button>
    </div>
  )
}

export default UseReducerExample1