import React from 'react'
import useCounter from './hook/useCounter'

function CustomeHookExample2() {
    const [count , increment , decrement , reset] = useCounter(10,10)
  return (
    <>
    <h3 className='text text-success'>{count}</h3>
    <button className='btn btn-primary m-1' onClick={increment}>increment</button>
    <button className='btn btn-primary m-1' onClick={decrement}>decrement</button>
    <button className='btn btn-primary m-1' onClick={reset}>reset</button>
    </>
  )
}

export default CustomeHookExample2