import React from 'react'

function Count({text,count}) {
    //console.log(`render from count${text}`)
  return (
    <h3 className='text text-warning'>
        {text} = {count}
    </h3>
  )
}

export default React.memo(Count)