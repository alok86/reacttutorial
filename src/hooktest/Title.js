import React from 'react'

function Title() {
    //console.log('render from title')
  return (
    <h2>useCallBackHook Example</h2>
  )
}

export default React.memo(Title)