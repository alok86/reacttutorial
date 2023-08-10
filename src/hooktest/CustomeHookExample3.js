import React from 'react'
import useInput from './hook/useInput'

function CustomeHookExample3() {
    const [user , bindUser , resetUser] = useInput('')
    const [password ,bindPassword , resetPassword ] = useInput('')
    const submitHandler = e=>{
        e.preventDefault()
        window.alert(`hello ${user} your password is ${password}`)
    }
    const resetHandler = ()=>{
        resetUser()
        resetPassword()
    }
  return (
    <>
    <h2>Form Validation</h2>
            <p>In this example, we use <code>.was-validated</code> to indicate what's missing before submitting the form:</p>
            <form className="was-validated" onSubmit={submitHandler}>
            {/* <form onSubmit={submitHandler}> */}
                <div className="form-group">
                    <label for="uname">Username:</label>
                    <input type="text" className="form-control"   {...bindUser}  required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control"   {...bindPassword}  required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" required /> I agree on blabla.
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                    </label>
                </div>
                <button type='button' className='btn btn-primary m-1' onClick={resetHandler}>reset fields</button>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
    </>
  )
}

export default CustomeHookExample3