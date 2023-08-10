import React,{useState} from 'react'
import FatchDataWithoutReducer from './FatchDataWithoutReducer'
import FatchDataWithReducer from './FatchDataWithReducer'

function UseReducerExample5() {
    const [compo , setCompo]= useState('')
    return (
        <>
        <div className="btn-group btn-group-justified" style={{width:'100%'}} role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-primary" onClick={()=>setCompo(<FatchDataWithoutReducer/>)}>Fatching data without Reducer</button>
            <button type="button" className="btn btn-outline-primary" onClick={()=>setCompo(<FatchDataWithReducer/>)}>Fatching data with Reducer</button>
        </div>
       {compo}
        </>
    )
}

export default UseReducerExample5