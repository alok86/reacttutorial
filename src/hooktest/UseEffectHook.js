import React , {useState} from 'react'
import UseEffectExample1 from './UseEffectExample1'
import UseEffectExample2 from './UseEffectExample2'
import UseEffectExample3 from './UseEffectExample3'
import UseEffectExample4 from './UseEffectExample4'
import UseEffectExample5 from './UseEffectExample5'
import UseEffectExample6 from './UseEffectExample6'


function UseEffectHook() {
  const [example , setExample] = useState('')
  return (
    <React.Fragment>
    <div className='btn-group btn-group-md mb-md-5'>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample1/>)}>Example 1</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample2/>)}>Example 2</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample3/>)}>Example 3</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample4/>)}>Example 4</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample5/>)}>Example 5</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample6/>)}>Example 6</button>
    </div>
    <div>
    {example}
    </div>
    </React.Fragment>
  )
}

export default UseEffectHook 