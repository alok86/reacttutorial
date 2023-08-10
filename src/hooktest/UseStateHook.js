import React , {useState} from 'react'
import UseStateExample1 from './UseStateExample1'
import UseStateExample2 from './useStateExample2'
import UseStateExample3 from './useStateExample3'
import UseStateExample4 from './UseStateExample4'
import UseStateExample5 from './UseStateExample5'

function UseStateHook() {
  const [example , setExample] = useState('')
  return (
    <React.Fragment>
    <div className='btn-group btn-group-md mb-md-5'>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseStateExample1/>)}>Example 1</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseStateExample2/>)}>Example 2</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseStateExample3/>)}>Example 3</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseStateExample4/>)}>Example 4</button>
      <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseStateExample5/>)}>Example 5</button>
    </div>
    <div>
    {example}
    </div>
    </React.Fragment>
  )
}

export default UseStateHook