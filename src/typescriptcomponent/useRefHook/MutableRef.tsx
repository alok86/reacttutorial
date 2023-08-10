import React,{useState , useRef , useEffect} from 'react'

export const MutableRef = () => {
    const [timer , setTimer] = useState(0)
    const intervalRef =useRef<number|undefined>(undefined)

    const stopTimer = ()=>{
        window.clearInterval(intervalRef.current)
    }
    const startTimer = ()=>{
        intervalRef.current = window.setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000)
    }
    const resetTimer = ()=>{
        setTimer(0)
    }
    useEffect(()=>{
        intervalRef.current = window.setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000)
        return()=>{
            stopTimer()
        }
    },[])
  return (
    <>
    <h5>Hook timer {timer}</h5>
    <button className='btn btn-danger m-1' onClick={()=>stopTimer()}>Stop timer</button>
    <button className='btn btn-success m-1' onClick={()=>startTimer()}>Start timer</button>
    <button className='btn btn-primary m-1' onClick={()=>resetTimer()}>Reset timer</button>
    </>
  )
}
