import React from 'react'
import {FNameContext,LNameContext} from './Main'

function ContextHookD() {
  return (
    <div>
        <FNameContext.Consumer>
            {
                user=>{
                    return(
                        <LNameContext.Consumer>
                            {
                                lname=>{
                                    return <div>user context value {user} , last name context value is {lname}</div>
                                }
                            }
                        </LNameContext.Consumer>
                       
                    ) 
                   
                }
            }
        </FNameContext.Consumer>
    </div>
  )
}

export default ContextHookD