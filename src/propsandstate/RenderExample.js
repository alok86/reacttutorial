import React, { Component } from 'react'
import ClickCounterTwo from './ClickCounterTwo'
import HoverCountTwo from './HoverCountTwo'
import RenderPropsCounter from './RenderPropsCounter'


class RenderExample extends Component {
    render() {
        return (
            <div className='col-md-4'>
                <div className="card">
                    <div className="card-header">
                        This example is based on render prop
                    </div>
                    <div className="card-body">
                        <RenderPropsCounter
                            render={(count, incrementCount) => (
                                <ClickCounterTwo count={count} incrementCount={incrementCount} />
                            )}
                        />

                        <RenderPropsCounter
                            render={(count, incrementCount) => (
                                <HoverCountTwo count={count} incrementCount={incrementCount} />
                            )}
                        />
                    </div>
                </div>




                {/* it can be passed as follows to RenderPropsCounter and on their children prop will
          use instead of render props */}
                {/* <RenderPropsCounter >
            {(count,incrementCount)=>(
            <HoverCountTwo count={count} incrementCount={incrementCount}/>
            )}
          </RenderPropsCounter> */}


                {/* <ClickCounterTwo/>
          <HoverCountTwo/>
          <User render={(isLoggedIn)=>isLoggedIn?'alok':'Guest'}/> */}

            </div>
        )
    }
}

export default RenderExample