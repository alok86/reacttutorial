import React , {useState , useEffect} from 'react'

function UseEffectExample1() {
    const[count , setCount]=useState(0)
    const[name , setName] = useState('')

    useEffect(()=>{
        console.log('document get update')
        document.title=`Clicked ${count}`
    },[count])

    // Here in useEffect dependency  on count show that use effect only run on the basis
    // of count change it will not be affaced by the change of name if both count and name pass
    // as dependency then it will depend on both variable and method to pass both dependency is
    //[count , name]

  return (
    <div>
        <input type='text' className='form-control' value={name} onChange={e=>setName(e.target.value)}/>
        <br/>
        <br/>
        <button type='button' className='btn btn-primary mb-sm-5' onClick={()=>setCount(count+1)} >Clicked {count}</button>
        <br/>
        <p className='text text-dark'>
            This example demonstrate the use of useEffect hook it run after the document is 
            rendered and after rendring , the side effect is shows by use effect in this example
            there is two dependency <br/>
            count<br/>
            name<br/>
            while useEffect hook only depends on count and it update the title of document if we remove 
            the dependency it will call the useEffect hook several time which will increase the load
            of site unnecessarily

        </p>
    </div>
  )
}

export default UseEffectExample1