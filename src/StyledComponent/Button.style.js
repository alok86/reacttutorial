import styled,{keyframes} from 'styled-components'

export const StyledButton = styled.button`
border: 2px solid green;
background-color: ${(props)=>props.variant === 'outline'?'white':'green'};
color: ${(props)=>props.variant==='outline'?'green':'white'};
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
cursor: pointer;
transition: 0.5s all ease-out;
&:hover{
    background-color: ${(props)=>props.variant !== 'outline'?'white':'green'};
color: ${(props)=>props.variant !== 'outline'?'green':'white'};
}
`
export const FancyButton = styled(StyledButton)`
background-image: linear-gradient(to right, lightgreen 0%,green 100%) ;
`
export const SubmitButton = styled(StyledButton).attrs((props)=>({
    type:'submit',
}))`
box-shadow: 0 9px #999;
&:active{
    background-color: ${(props)=>props.variant !== 'outline'?'#FFF':'#4acf50'};
    box-shadow   : 0 5px #666 ;
    transform: translate(4px);
}
`
const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
export const AnimatedLogo = styled.img`
height: 40vmin;
pointer-events: none;
animation: ${rotate} infinite 20s linear;
`
export const DarkButton = styled(StyledButton)`
border:2px solid ${(props)=>props.theme.primary};
background-color: ${(props)=>props.theme.primary};
color: ${(props)=>props.theme.text};
`