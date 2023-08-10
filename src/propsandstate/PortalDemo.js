import React from 'react'
import ReactDOM from 'react-dom'
import { Link, NavLink } from 'react-router-dom'


function PortalDemo() {
    return ReactDOM.createPortal(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <img src='logo192.png' alt="Logo" style={{ width: '40px' }} />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/typescript">Typescript</a>
                    {/* <Link to='/' className='nev-link'>Typescript/</Link> */}
                    {/* <NavLink to='/' className='nev-link'>Typescript</NavLink> */}
                    {/* NavLink can be styple in index.css file under the class 
                    nav a {}  and nav a.active{}*/}
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/hooks">Hooks</a>
                    {/* <Link to='/hooks' className='nev-link'>Hooks/</Link> */}
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/react">React</a>
                    {/* <Link to='/react' className='nev-link'>React/</Link> */}
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/greet">Greet</a>
                    {/* <Link to='/greet' className='nev-link'>Greet/</Link> */}
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/greetcls">GreetCls</a>
                    {/* <Link to='/greetcls' className='nev-link'>GreetCls</Link> */}
                </li>
            </ul>
           
            {/* <span className='text text-white'>this is portal example divided into three part 1. creare node in index.html  2. call child node to app.js and 3. return the jsx using ReactDom.creatPortal</span> */}
        </nav>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo