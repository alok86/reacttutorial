import React , {useState , useEffect} from 'react'

function UseEffectExample4() {
  
    const[count , setCount] = useState(0)

    const tick = ()=>{
        setCount(prevCount=> prevCount+1)
    }
    
    // if useEffect dependency , we set the empty array then count will increase 
    // only once and it set to 1 from 0
    // in that case setCount should based on prevCount

    // if you have to call some functio inside the useeffect , then
    // it is better to define inside he useEffect and then call it
    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return(()=>{
            clearInterval(interval)
        })
    },[])
    
  return (
    <h1 >
        {count}
    </h1>
  )
}

export default UseEffectExample4