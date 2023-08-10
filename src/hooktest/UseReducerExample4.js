import React ,{useReducer} from 'react'
import ReducerHookA from './ReducerHookA'
import ReducerHookB from './ReducerHookB'
import ReducerHookC from './ReducerHookC'

export const countContext = React.createContext()

const initialState = 0
const reducer = (state , action) => {
  switch(action)
  {
    case 'increment':
      return state+1
    case 'decrement':
      return state-1
    case 'reset' :
      return initialState
    default :
      return state
  }
}


function UseReducerExample4() {
  const [count , dispatch] = useReducer(reducer,initialState)
    return (
      <countContext.Provider value={{countState:count , countDispatch:dispatch}}>
            <h2 className='text text-warning text-center'>{count}</h2>
            <ReducerHookA/>
            <ReducerHookB/>
            <ReducerHookC/>
      </countContext.Provider>
     )
}

export default UseReducerExample4