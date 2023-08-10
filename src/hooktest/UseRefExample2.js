import React,{useState,useEffect,useRef} from 'react'

function UseRefExample2() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(()=>{
      setTimer(prevTimer => prevTimer+1)
    },1000)
  
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  
  return (
    <>
    <h3 className='text text-success'>{timer}</h3>
    <button className='btn btn-info' onClick={()=>clearInterval(intervalRef.current)}>clear interval</button>
    </>
  )
}

export default UseRefExample2