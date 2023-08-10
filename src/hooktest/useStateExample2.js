import React ,{useState} from 'react'

function useStateExample2() {
  const [count , setCount] = useState(0)
  return (
    <React.Fragment>
    <div>counter {count} </div>
    <button type='button' className='btn btn-primary' onClick={()=>setCount(count+1)}>Increase</button>
    </React.Fragment>
  )
}

export default useStateExample2