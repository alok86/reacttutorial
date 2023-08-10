import React, { useState , useMemo } from 'react'

function UseMemoHook() {
    const [countOne , setCountOne] = useState(0)
    const [countTwo , setCountTwo] = useState(0)

    const increaseCountOne = ()=>{
        setCountOne(countOne+1)
    }
    const increaseCountTwo = ()=>{
        setCountTwo(countTwo+1)
    }

    const isEven = useMemo(()=>{
        //console.log(countOne % 2 === 0)
        return countOne % 2 === 0
    }, [countOne]) 
  return (
    <div>
        {/* <h3>{countOne}  is  {isEven() ? 'even' : 'odd'}</h3> */}
        <h3>{countOne}  is  {isEven ? 'even' : 'odd'}</h3>
        <button className='btn btn-info' onClick={increaseCountOne}>Increase counter One</button>
        <h3>{countTwo}</h3>
        <button className='btn btn-info' onClick={increaseCountTwo}>Increase Counter Two</button>
        <p className='text text-secondary'>
            in this program we can see that even the function isEven() depends on countOne still when 
            we increase countTwo , isEven function is called which can cause the performence issu therefor
            useMemoHook is required here
        </p>
    </div>
  )
}

export default UseMemoHook