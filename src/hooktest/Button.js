import React from 'react'

function Button({clickHandler , children}) {
    //console.log(`rendere from ${children}`)
  return (
    <button className='btn btn-danger' onClick={clickHandler}>
            {children}
    </button>
  )
}

export default React.memo(Button)