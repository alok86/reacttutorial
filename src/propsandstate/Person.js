import React from 'react'

function Person(props) {
  return (
    <div>
        <h2>Welcome {props.pers.name} age {props.pers.age} and skill is {props.pers.skill}</h2>
    </div>
  )
}

export default Person