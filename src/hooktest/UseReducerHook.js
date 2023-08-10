import React,{useState} from 'react'
import UseReducerExample1 from './UseReducerExample1'
import UseReducerExample2 from './UseReducerExample2'
import UseReducerExample3 from './UseReducerExample3'
import UseReducerExplaination from './UseReducerExplaination'
import UseReducerExample4 from './UseReducerExample4'
import UseReducerExample5 from './UseReducerExample5'

function UseReducerHook() {
    const [example , setExample] = useState(<UseReducerExplaination/>)
  return (
    <React.Fragment>
    <div className='btn-group btn-group-md mb-md-5'>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseReducerExample1/>)}>Example 1</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseReducerExample2/>)}>Example 2</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseReducerExample3/>)}>Example 3</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseReducerExample4/>)}>Example 4</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseReducerExample5/>)}>Example 5</button>
      {/* <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample6/>)}>Example 6</button> */}
    </div>
    <div>
    {example}
    </div>
    </React.Fragment>
  )
}

export default UseReducerHook