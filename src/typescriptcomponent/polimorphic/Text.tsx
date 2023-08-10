import React from 'react'
//created initially
// type textProp = {
//     size?:'sm'|'md'|'lg'
//     color?:'primary'|'secondary'
//     children:React.ReactNode
// }

type textOwnProp<E extends React.ElementType> = {
       size?:'sm'|'md'|'lg'
       color?:'primary'|'secondary'
       children:React.ReactNode
       as?:React.ElementType
}
      //  as?:string
      
type textProp<E extends React.ElementType> = textOwnProp<E> & React.ComponentProps<E> &
Omit<React.ComponentProps<E>, keyof textOwnProp<E>>
//export const Text = ({size , color , children}:textProp) => {
    export const Text = <E extends React.ElementType = 'div'>({size , color , children ,as}:textProp<E>) => {
        const Component = as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}
