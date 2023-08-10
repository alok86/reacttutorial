import React from 'react'
import Person from './Person'

export default function UserGreeting() {
    //const names = ['Alok' , 'ravi' ,'pritee']
    //const nameList = names.map(name=><Person name={name}/>)

    const prson = [
        {
            id:1,
            name:'alok',
            age:35,
            skill:'react'
        },
        {
            id:2,
            name:'saumya',
            age:28,
            skill:'office automation'
        }
    ]

    const prsonList = prson.map(per=><Person key={per.id} pers={per}/>)
  return (
    <div className='col border border-primary'>
        {prsonList}
    </div>
  )
}
