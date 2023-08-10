import {useContext} from 'react'
import { UserContext } from './UserContext'

export const User1  = () => {

  const userContext = useContext(UserContext)

    const loginHandler = ()=>{
      if(userContext){
        userContext.setUser({
          name:'Alok Seth',
          email: 'alok@gmail.com'
        })
      }
    }
    const logoutHandler = ()=>{
      if(userContext){
        userContext.setUser(null)
      }
    }
  return (
    <>
    <button className='btn btn-primary m-1' onClick={loginHandler}>Login</button>
    <button className='btn btn-primary m-1' onClick={logoutHandler}>Logout</button>
    <h5>User Name is {userContext?.user?.name}</h5>
    <h5>User Email is {userContext?.user?.email}</h5>
    </>
  )
}
