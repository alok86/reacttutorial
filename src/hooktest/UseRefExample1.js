import React ,{useState , useEffect , useRef} from 'react'

function UseRefExample1() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const userRef = useRef('')
    const passwordRef = useRef('')
    const submitRef = useRef('')

    useEffect(() => {
        userRef.current.focus()
          
    }, [])

    const userClickHandler = (e)=>{
        if(e.keyCode===13){
        setUsername(userRef.current.value)
        passwordRef.current.focus()
        }
    }
    
    const passClickHandler = (e)=>{
        if(e.keyCode===13){
        setPassword(passwordRef.current.value)
        submitRef.current.focus()
        }
    }

    const submitHandler = ()=>{
        window.alert(`hello ${username} your password is ${password}`)
    
    }


    return (
        <>
            <h2>Form Validation</h2>
            <p>In this example, we use <code>.was-validated</code> to indicate what's missing before submitting the form:</p>
            {/* <form action="/action_page.php" className="was-validated"> */}
                <div className="form-group">
                    <label for="uname">Username:</label>
                    <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required ref={userRef} onKeyDown={userClickHandler} />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required ref={passwordRef} onKeyDown={passClickHandler}/>
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
                <button type="submit" className="btn btn-primary" ref={submitRef} onClick={submitHandler}>Submit</button>
            {/* </form> */}
        </>
    )
}

export default UseRefExample1