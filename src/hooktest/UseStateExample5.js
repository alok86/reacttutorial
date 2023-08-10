import React ,{useState} from 'react'

function UseStateExample5() {
    const [item , setItem]= useState([])

    const addItem = ()=>{
        setItem([...item ,{
            id:item.length,
            value:Math.floor(Math.random()*10)+1
            
        }])
        // console.log(Math.random())
        // console.log(Math.random()*10)
        // console.log(Math.floor(Math.random()*10)+1)
    }
  return (
    <div>
        <h3>Click button to insert number in the list</h3>
        <button type='button' className='btn btn-dark' onClick={addItem}>insert</button>
        <ul>
            {item.map(item =>(
                <li key={item.id} >{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseStateExample5