import React , {useState , useEffect} from 'react'
//import React from "react"

function UseEffectExample2() {
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

    const logMousePosition = e => {
       // console.log(`mouse position x ${e.clientX} y ${e.clientY}`)
        setX(e.clientX)
        setY(e.clientY)
        // setX(3)
        // setY(5)
    }

    useEffect(()=>{
        //console.log('useEffect')
       window.addEventListener('mousemove' , logMousePosition)
       // this return function is use to unmount the componet when it is focoused 
       // on other component othe wise it listen by the listener whether it is focused or not
       //this is use effect example with clean up code this return function is use 
       //cleaning up code
       return(()=>{
         //console.log('from the return function')
         window.removeEventListener('mousemove', logMousePosition)
       })
       
    },[])
  return (
    <div>
        <h3 className='text text-success mb-sm-5'>X = {x} , y = {y}</h3>
        <p>
            By using this example our targate to achive to call 
            useEffect only once and for that , need to pass empty array
            in useEffect dependency parameter <br/>
            {/* Beacuse of excessive input from mouse co-ordinate slowing down the performance
            that why the segment is commented to see the example uncomment the code */}
        </p>
    </div>
  )
}

export default UseEffectExample2