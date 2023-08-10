import React , {useState} from 'react'

function UseStateExample4() {

    const [name , setName]= useState({firstName:'',lastName:''})
  return (
    <div >
        
        <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h3><span className='text text-success'>{name.firstName}</span>  
        <span className='text text-warning'>{name.lastName}</span></h3>
        {JSON.stringify(name)}<br/><br/><br/>
        <p className='text text-info'><b>using this example we can understand that if we try to to assign the value directly 
            to name object , it will assign the value to name property only one at a time therefore
            we need to use spred opearator which is "...name" this operator create the virtula copy of
            name object and value will concatenate in name object
            
            therefore use <br/>
            <span className='text text-danger'> onChange={"{e=>setName({...name,lastName:e.target.value})}"} </span> <br/>
            instead of   <br/>
            <span className='text text-danger'> onChange={"{e=>setName({lastName:e.target.value})}"}</span></b>
        </p>
    </div>
  )
}

export default UseStateExample4