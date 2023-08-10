import React, { useContext } from 'react'
import ContextHookD from './ContextHookD'
import { FNameContext, LNameContext } from './Main'

function ContextHookC() {
    const fname = useContext(FNameContext)
    const lname = useContext(LNameContext)
  return (
    <div>
        <ContextHookD/>
        <h3>{fname}&nbps;{lname}</h3>
    </div>
  )
}

export default ContextHookC