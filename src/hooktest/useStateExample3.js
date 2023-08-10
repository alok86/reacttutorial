import React , {useState} from 'react'

function useStateExample3() {
    const initialCount = 0
    const [count , setCount] = useState(initialCount)

    // the following function is use to increment the count by 5 but increase only by 1
    // const incrementFive = ()=>{
    //     for(var i =1 ; i <=5 ; i++)
    //     {
    //         setCount(count+1)
    //     }
    // }

    const incrementFive = ()=>{
        for(var i =1 ; i <=5 ; i++)
        {
            setCount(prevCount=> prevCount+1)
        }
    }

  return (
    <div>
        <h1> {count} </h1>
        <button type='button' className='btn btn-info' onClick={()=>setCount(initialCount)}>Reset</button>
        <button type='button' className='btn btn-info' onClick={()=>setCount(prevCount=> prevCount+1)}>Increment</button>
        <button type='button' className='btn btn-info' onClick={()=>setCount(prevCount=> prevCount-1)}>Decrement</button>
        <button type='button' className='btn btn-info' onClick={incrementFive}>Increment 5</button>
        <p>
            This example is helping us to understand , what is the safe method to increase the value of 
            variable . Because in the example we can understand by increase count directly it incremet only 
            by one there use the prevCount which store the previous value
        </p>
    </div>
  )
}

export default useStateExample3