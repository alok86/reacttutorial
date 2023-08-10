import React,{useState} from 'react'

type AuthType = {
    name : string
    email : string
}

export const User = () => {
    const [user ,setUser] =useState<AuthType|null>(null)

    const loginHandler = ()=>{
        setUser({
            name:'Alok',
            email:'alok.seth@gmail.com'
        })
    }

    const logoutHandler =()=>{
        setUser(null)
    }
  return (
    <>
    {user? 
   <h5>{user.name} and {user.email}</h5> 
    :<h5>Welcome guest</h5>}
    <button className='btn btn-primary m-1' onClick={loginHandler}>Log In</button>
    <button className='btn btn-primary m-1' onClick={logoutHandler}>Log out</button>
    </>
  )
}
