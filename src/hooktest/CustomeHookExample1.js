import React, { useState } from 'react'
import useDocumentTitle from './hook/useDocumentTitle'

function CustomeHookExample1() {
    const [count , setCount] = useState(0)
    useDocumentTitle(count)
  return (
    <>
    <button className='btn btn-primary' onClick={()=>setCount(prevCount=>prevCount+1)}>increase Counter {count}</button>
    </>
  )
}

export default CustomeHookExample1