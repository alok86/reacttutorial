import React,{useContext,useState} from 'react'
import { Themecontext } from './ThemeContext'

export const Box = () => {
 const {primary , secondary} = useContext(Themecontext)
 const [theme , setTheme] = useState(primary)
 const [state , setState] = useState(false)
 const clickHandler = ()=>{
   if(state === false){
       setTheme(secondary)
       setState(true)
   }
   else if(state===true)
   {
       setTheme(primary)
       setState(false)
   }
 }
  return (
    <div style={{backgroundColor:theme.main ,color : theme.text}}>
        <h5>Theme context</h5>
        <button className='btn btn-warning m-1' onClick={clickHandler} > change theme</button>
    </div>
  )
}
