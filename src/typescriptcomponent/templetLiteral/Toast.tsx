import React from 'react'
type horizontalPosition = 'left'|'center'|'right'
type verticalPosition ='top'|'center'|'bottom'

type toastProps = {
    position :Exclude<`${horizontalPosition}-${verticalPosition}`,'center-center'>|'center'
}
export const Toast = ({position }:toastProps) => {
  return (
    <div>Toast Notification position - {position}</div>
  )
}
