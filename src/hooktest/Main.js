import React, { useState } from "react"
import ContextHookA from "./ContextHookA"
import CustomHook from "./CustomHook"
import PrimaryPage from "./PrimaryPage"
import UseCallBackParant from "./UseCallBackParant"
import UseEffectHook from "./UseEffectHook"
import UseMemoHook from "./UseMemoHook"
import UseReducerHook from "./UseReducerHook"
import UseRefHook from "./UseRefHook"
import UseStateHook from "./UseStateHook"

export const FNameContext = React.createContext()
export const LNameContext = React.createContext()
function Main() {
    const [ compo, setCompo ] = useState(<PrimaryPage />)
    
    const contextHandler = ()=>{
            setCompo(
                <FNameContext.Provider value={'alok'}>
                    <LNameContext.Provider value={'seth'}>
                         <ContextHookA/>
                    </LNameContext.Provider>
                </FNameContext.Provider>
            
            )
    }
    
    return (
        <div className="col-xl-12 border border-primary rounded">
            <div className="jumbotron rounded bg bg-success">
                <h1 className="display-4 text text-light"><center>React Hooks</center></h1>
                <center className="lead text text-light"><b>Hook is simple and reduced the complaxcity of class...</b></center>
            </div>
            <div className="row">
                <div className="col-lg-2 rounded-left btn-group-vertical">
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<UseStateHook/>)}>useState Hook</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<UseEffectHook/>)}>useEffact Hook</button>
                    <button type="button" className="btn btn-secondary" onClick={contextHandler}>useContext Hook</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<UseReducerHook/>)}>useReducer Hook</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<UseCallBackParant/>)}>useCallBack Hook</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<UseMemoHook/>)}>useMemo Hook</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<UseRefHook/>)}>useRef Hook</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<CustomHook/>)}>custom Hook</button>
                </div>
                <div className="col-lg-10 rounded-right">
                    {compo}
                </div>
            </div>
        </div>
    )
}

export default Main