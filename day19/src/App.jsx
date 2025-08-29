// import {Myform} from "./components/Myform"
// import './App.css'

// export default function App() {
//   return (
//     <>
//     <h1> i am learning form handling </h1>
//     <Myform />
//     </>
//   )
// }



import React from 'react'

import { Myform } from './components/Myform'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Boot } from './components/Boots';
import { Data } from './components/data';
import './App.css'

export default function App() {
  return (
    <>
    <h1> I am Learning React </h1>
    <Myform />
    <Data />
    {/* <Boot />    */}
    </>
  )
}
