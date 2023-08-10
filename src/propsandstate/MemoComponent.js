import React from 'react'

function MemoComponent(props) {
    //console.log('Rendering from memoComponent')
  return (
    <div><h3>welcome {props.name}</h3>
    <span className='text text-success'>this is example of pure (pure componet is class based component) and memo( memo is functional component) component and how its work</span>
    </div>
  )
}

export default React.memo(MemoComponent)