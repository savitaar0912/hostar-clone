import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import Home from './components/Home'
import Detail from './components/Detail'

export default function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path = "/" element= {<Login/>} ></Route>
        <Route exact path = "/home" element= {<Home/>} ></Route>
        <Route exact path = "/details/:id" element= {<Detail/>} ></Route>
      </Routes>
    </Router>
  )
}