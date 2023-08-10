import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCount from './HoverCount'

function HocTest() {
  return (
    <div className='col-md-4'>
      <div className="card">
        <div className="card-header">
          this is the example of higher order component
        </div>
        <div className="card-body">
          <ClickCounter name='alok' />
          <HoverCount />
        </div>
      </div>

    </div>
  )
}
export default HocTest