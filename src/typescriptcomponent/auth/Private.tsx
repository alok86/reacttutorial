import React from 'react'
import { Login } from './Login'
import {profileProps} from './Profile'
type propType = {
    isLogedIn : boolean
    component : React.ComponentType<profileProps>
}
export const Private = ({isLogedIn , component:Component}:propType) => {
    if(isLogedIn)
  {return <Component name='Alok'/>}
  else{ return <Login/>}
}
