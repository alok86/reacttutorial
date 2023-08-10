import React from 'react'
export type profileProps = {
    name:string
}
export const Profile = ({name}:profileProps) => {
  return (
    <>
    <h5>hello {name}</h5>
    </>
  )
}
