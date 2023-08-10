import React from 'react'
type listProps<T> = {
    items: T[]
    onClick: (value: T) => void
}
// export const List = <T extends {id:number}>({ items, onClick }: listProps<T>) => {
export const List = <T extends string|number>({ items, onClick }: listProps<T>) => {
    return (
        <>
            <h4>List of items </h4>
            {
                items.map((item, index) => {
                    return (
                        <div key={index} onClick={() => onClick(item)}>
                            {item}
                            
                            </div>
                    )
                })
            }
        </>
    )
}
