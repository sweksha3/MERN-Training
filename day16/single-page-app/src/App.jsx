import './App.css'
import React from 'react'
import Contact from './Contact'
import About from './About'
import Feedback from './Feedback'
import Home from './Home'
import Notfound from './Notfound'
import { Link,Routes,Route } from 'react-router-dom'

export default function App(){
  return(
    <>
    <h1>This is the main page</h1>
    <div className='main'>
      <div className='navbar'>
        <Link to='/'></Link>
        <Link to='contact'>contact us</Link>
        <Link to='feedback'>feedback</Link>
        <Link to='about'>about</Link>

      </div>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/feedback' element={<Feedback/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>

    </>
  )
  
}