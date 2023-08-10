import React from 'react'
import { personListProp } from './Person.type'


export const Person = (props: personListProp) => {
    return (
        <>
            {
                props.names.map((name) => {
                    return (
                        <h5 key={name.Fname}>{name.Fname} {name.Lname}</h5>
                    )

                })
            }
        </>
    )
}
