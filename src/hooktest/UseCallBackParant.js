import React, { useState ,useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function UseCallBackParant() {
    const [age ,setAge] = useState(25)
    const [salary , setSalary] = useState(25000)

    const incrementAge =useCallback(
        ()=>{
            setAge(age+1)
        },
      [age],
    )
     

    const incrementSalary = useCallback(
        ()=>{
            setSalary(salary+1000)
        },
      [salary],
    )
     
  return (
    <div>
        <Title/>
        <Count text='age' count={age}/>
        <Button clickHandler={incrementAge}>increase Age</Button>
        <Count text='salary' count={salary}/>
        <Button clickHandler={incrementSalary}>increase salary</Button>
        <p className='text text-secondary'>
            as we can see this conponent have three nested component which are called five time
            and whenever we try to increase the age it render the salary too same way when we called
            salary it render the age too , which cause unnecessary calling of component which cause the 
            performence issue
                   therefore ,useCallBack Hook which reduce unnecessary rendering
        </p>
    </div>
  )
}

export default UseCallBackParant