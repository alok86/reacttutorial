import React from 'react'

function PrimaryPage() {
    return (
        <div className='text text-dark'>
            <p className='text text-primary'> Hooks were added to React in version 16.8.</p>
            <p className='text text-primary'> Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
            <p className='text text-primary'> Although Hooks generally replace class components, there are no plans to remove classes from React.</p>
            <h3 className='text text-danger'>What is a Hook?</h3>
            <p className='text text-primary'>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
            <p className='text text-primary'>You must import Hooks from react.</p>
            <p className='text text-primary'>Here we are using the useState Hook to keep track of the application state.</p>
            <p className='text text-primary'>State generally refers to application data or properties that need to be tracked.</p>
            <h3 className='text text-danger'>Hook Rules</h3> 
            <p className='text text-primary'>There are 3 rules for hooks:</p>
            <p className='text text-primary'>Hooks can only be called inside React function components.</p>
            <p className='text text-primary'>Hooks can only be called at the top level of a component</p>.
            <p className='text text-primary'>Hooks cannot be conditional</p>
            <b className='text text-primary'>Note:</b> Hooks will not work in React class components.
            <p className='text text-primary'> Custom Hooks</p>
            <p className='text text-primary'>If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.</p>
            <p className='text text-primary'>We'll go into more detail in the Custom Hooks section.</p>
        </div>
    )
}

export default PrimaryPage