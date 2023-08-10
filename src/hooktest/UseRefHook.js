import React,{useState} from 'react'
import UseRefExample1 from './UseRefExample1'
import UseRefExample2 from './UseRefExample2'
import UseRefExplaination from './UseRefExplaination'

function UseRefHook() {
     
    const [example , setExample] = useState(<UseRefExplaination/>)
  return (
    <React.Fragment>
    <div className='btn-group btn-group-md mb-md-5'>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseRefExample1/>)}>Example 1</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseRefExample2/>)}>Example 2</button>
      {/* <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseReducerExample3/>)}>Example 3</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseReducerExample4/>)}>Example 4</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseReducerExample5/>)}>Example 5</button> */}
      {/* <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample6/>)}>Example 6</button> */}
    </div>
    <div>
    {example}
    </div>
    </React.Fragment>
  )
  
}

export default UseRefHook