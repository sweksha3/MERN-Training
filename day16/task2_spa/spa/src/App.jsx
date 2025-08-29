import './App.css'
import Contact from './Contact'
import Customererror from './Customerror'
import Feedback from './Feedback'
import Home from './Home'
import {Link, Routes,Route} from 'react-router-dom'

export default function App(){
  return(
    <>
    <h1>this is the first page</h1>
    <div className='main'>
      <div className='navbar'>
        <Link to='/'></Link>
        <Link to='/contact'>contact</Link>
        <Link to='/feedback'>feedback</Link>
        {/* <Link to='/home'>home</Link> */}
      </div>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/contact' element={<Contact/>}></Route> 
      <Route path='/feedback' element={<Feedback/>}></Route> 
      <Route path='*' element={<Customererror/>}></Route> 
    </Routes>
    </>
  )
}