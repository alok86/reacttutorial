import React,{useState} from 'react'
import CompoStyling from './CompoStyling'
import CondiGreeting from './CondiGreeting'
import Counter from './Counter'
import FocusInput from './FocusInput'
import FormComponent from './FormComponent'
import FRParantInput from './FRParantInput'
import Greet from './GreetwiOutJSX'
import HocTest from './HocTest'
import LifeCycle from './LifeCycle'
import LifeCycleExample from './LifeCycleExample'
import Message from './Message'
import Parant from './Parant'
import ParantComponent from './ParantComponent'
import RefDemo from './RefDemo'
import RenderExample from './RenderExample'
import UserGreeting from './UserGreeting'


function ComponentMain() {
    const [ compo, setCompo ] = useState(<Greet/>)
    
    return (
        <div className="col-xl-12 border border-primary rounded">
            <div className="jumbotron rounded bg bg-primary">
                <h1 className="display-4 text text-light"><center>React Component</center></h1>
                <center className="lead text text-light"><b>Learn , placing component by following example...</b></center>
            </div>
            <div className="row">
                <div className="col-lg-2 rounded-left btn-group-vertical">
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Parant/>)}>parant</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Counter/>)}>Counter Example</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Message/>)}>Message</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<UserGreeting/>)}>User Greeting</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<CondiGreeting/>)}>Condition Greeting</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<CompoStyling/>)}>Component style</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<FormComponent/>)}>Form Component</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<LifeCycle/>)}>Life Cycle</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<LifeCycleExample/>)}>LifeCycleExample</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<ParantComponent/>)}>Pure Component</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<RefDemo/>)}>Reference Demo</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<FocusInput/>)}>Focus input</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<FRParantInput/>)}>Forword Reference</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<HocTest/>)}>High order Component</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<RenderExample/>)}>Render Example</button>
                </div>
                <div className="col-lg-10 rounded-right">
                    {compo}
                </div>
            </div>
        </div>
    )
}

export default ComponentMain

