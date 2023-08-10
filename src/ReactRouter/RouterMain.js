import React from 'react'
import { Router , Route } from 'react-router-dom'
import { Login } from './Login'
import { NavElement } from './NavElement'
import { RHome } from './RHome'

BrowserRouter

function RouterMain() {
  return (
    <div>
        <NavElement/>
    <Router>
        <Route path='login' element={<Login/>}/>
        <Route path='rhome' element={<RHome/>}/>
    </Router>
    </div>
  )
}

export default RouterMain