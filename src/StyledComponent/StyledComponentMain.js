import React, { useState } from 'react'
import { AnimatedLogo, DarkButton } from './Button.style'
import logo from '../logo.svg'
//import { FancyButton } from './Button.style'
import StyledButton, { Button,FancyButton,SubmitButton} from './StyledButton'
import {ThemeProvider , createGlobalStyle} from 'styled-components'

const theme = {
    dark:{
        primary :'#000',
        text : '#fff',
        fontFamily:'Segoe UI'
    },
    light:{
        primary :'#fff',
        text : '#000',
        fontFamily:'Segoe UI'
    },
    
    
}

const GlobleStyle = createGlobalStyle`
button{
    font-family: ${(props)=>props.theme.fontFamily};
}
`

export const StyledComponentMain = () => {
    const [ compo, setCompo ] = useState(<StyledButton>Styled Button</StyledButton>)
    
    
    
    return (
        <div className="col-xl-12 border border-primary rounded">
            <div className="jumbotron rounded bg bg-info">
                <h1 className="display-4 text text-light"><center>Styled Component</center></h1>
                <center className="lead text text-light"><b>Styled component make easy to manage individual component styled . <br/>
               
                </b></center>
            </div>
            <ThemeProvider theme={theme.dark}>
             <GlobleStyle/>
            <div className="row">
                <div className="col-lg-2 rounded-left btn-group-vertical">
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<Button/> )}>Outline Button</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<FancyButton as='a'>fancy button</FancyButton>)}>Fancy Button</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<SubmitButton >Submit</SubmitButton>)}>Submit Button</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<AnimatedLogo src={logo}/>)}>Logo animation</button>
                    <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<DarkButton>Dark Button</DarkButton>)}>Theming</button>
                    {/* <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<UseMemoHook/>)}>useMemo Hook</button> */}
                    {/* <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<UseRefHook/>)}>useRef Hook</button> */}
                    {/* <button type="button" className="btn btn-secondary" onClick={()=> setCompo(<CustomHook/>)}>custom Hook</button> */}
                </div>
                <div className="col-lg-10 rounded-right">
                    {compo}
                </div>
            </div>
            </ThemeProvider>
        </div>
    )
}
