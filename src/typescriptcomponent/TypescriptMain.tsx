import React ,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { Button } from './Button'
import { Counter } from './Counter'
import Greeting from './Greeting'
import GreetProObj from './GreetProObj'
import GreetProp from './GreetProp'
import { Heading } from './Heading'
import { Input } from './Input'
import { OscarProp } from './OscarProp'
import { Person } from './Person'
import { Status } from './Status'
import { User } from './User'
import { Box } from './context/Box'
import { ThemeContextProvider } from './context/ThemeContext'
import { UserContextProvider } from './context/UserContext'
import {User1} from './context/User1'
import { DomRef } from './useRefHook/DomRef'
import { MutableRef } from './useRefHook/MutableRef'
import ClassComponent from './ClassComponent'
import { Private } from './auth/Private'
import { Profile } from './auth/Profile'
import { List } from './generic/List'
import { RendomNumber } from './RendomNumber'
import { Toast } from './templetLiteral/Toast'
import { CustomButton } from './html/Button'
import { CustomInput } from './html/Input'
import { DPropsType } from './DPropsType'
import { TextTest } from './polimorphic/TextTest'


function TypescriptMain() {
    const [compo ,setCompo] = useState(<Greeting/>)

    const person = {
        Fname : "Bruce",
        Lname : "Wayne"
    }
    const namelist = [
        {
            Fname : "Dwayn",
            Lname : "jonson"
        },
        {
            Fname : "Robert",
            Lname : "Downy Jr."
        },
        {
            Fname : "Huge",
            Lname : "Jackman"
        },
        {
            Fname : "Bruce",
            Lname : "Wayne"
        }
    ]
  return (
    <div className="col-xl-12 border border-primary rounded">
            <div className="jumbotron rounded bg-warning mb-0">
                <h1 className="display-4 text text-light text-center">React Typescript</h1>
                 <p className="lead text text-light text-center"><b>More advance and much managable code writing</b></p>
            </div>
            <div className="row">
                <div className="col-lg-3 rounded-left btn-group-vertical">
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<GreetProp name='Alok' messageCount={20} isLogedIn={true} />)} >Geeting with props</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<GreetProObj name={person}/>)}>Greeting props as object</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Person names={namelist}/>)}> Props as array</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Status status='Loading'/>)}>Union of string</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Heading>Welcome Alok</Heading>)}>Props by children</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<OscarProp><Heading>Leonardo deCaprio !</Heading></OscarProp>)}>Children as React node</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<GreetProp name='Alok' isLogedIn={true} />)} >Props as option</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Button handleClick={(event , id)=>{console.log('Button clicked' , event , id)}}/>)}>Event Props Type</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Input value='' handleChange={(event)=>console.log(event)}/>)}>Event Props Type Input</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Container style={{border:'1px solid black',padding : '1rem' ,height:'350px' }}/>)}>Style Props</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<User/>)}>useState with typescript</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Counter/>)}>useReducer with typescript</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<ThemeContextProvider><Box/></ThemeContextProvider>)}>useContext with typescript Theme</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<UserContextProvider><User1/></UserContextProvider>)}>useContext with typescript Login</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<DomRef/>)}>useRef , DOM ref</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<MutableRef/>)}>useRef , Mutable ref</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<ClassComponent msg='counter value is -' />)}>Class Component using typescript</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Private isLogedIn={true} component={Profile}/>)}>Complex Component Login</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<List items={['Batman' , 'Superman' , 'Worder Women']} onClick={(item)=>console.log(item)}/>)}>Generic type</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<RendomNumber value={10} isPositive/>)}>Never type</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<Toast position='center-bottom'/>)}>templet Litrels</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<CustomButton variant='primary'onClick={(e)=>console.log(`clicked ${e}`)} >Custom Button</CustomButton>)}>Custom Button with passed varient</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<CustomInput type='text' placeholder='enter some text'/>)}>Coustom Input</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<DPropsType isLogedIn={true} messageCount={20} name='alok'/>)}>Destructuring props type</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>setCompo(<TextTest/>)}>Polymorphic component</button>
                </div>
                <div id='display' className="col-lg-9 rounded-right">
                    {compo} 
                </div>
            </div>
        </div>
  )
}

export default TypescriptMain