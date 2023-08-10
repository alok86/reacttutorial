import React,{useState} from 'react'
import CustomeHookExample1 from './CustomeHookExample1'
import CustomeHookExample2 from './CustomeHookExample2'
import CustomeHookExample3 from './CustomeHookExample3'

function CustomHook() {
   const [example , setExample] = useState(<p className='text text-secondary'>
       custom hook is is function which name start with use for example ' useMyHook'
       and other functionality is same as function in javascript ,
       It can be consider as special function which use common code sharing among the components
       and to achive modularity
   </p>)
    return (
      <React.Fragment>
      <div className='btn-group btn-group-md mb-md-5'>
        <button type="button" className="btn btn-secondary" onClick={()=>setExample(<CustomeHookExample1/>)}>Example 1</button>
        <button type="button" className="btn btn-secondary" onClick={()=>setExample(<CustomeHookExample2/>)}>Example 2</button>
        <button type="button" className="btn btn-secondary" onClick={()=>setExample(<CustomeHookExample3/>)}>Example 3</button>
         {/*<button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample4/>)}>Example 4</button>
        <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample5/>)}>Example 5</button>
        <button type="button" className="btn btn-secondary" onClick={()=>setExample(<UseEffectExample6/>)}>Example 6</button> */}
      </div>
      <div>
      {example}
      </div>
      </React.Fragment>
    )  
}

export default CustomHook