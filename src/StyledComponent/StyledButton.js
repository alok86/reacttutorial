import { StyledButton , FancyButton ,SubmitButton } from "./Button.style"

import React from 'react'

export const Button = () => {
  return (
    <StyledButton variant='outline' onClick={()=>window.alert('Button clicked')}>Click here</StyledButton>
  )
}

export default StyledButton
export {FancyButton}
export {SubmitButton}