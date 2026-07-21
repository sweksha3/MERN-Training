import React from 'react'
import './App.css'
import { useState } from 'react'
import Form from './Form'

export default function App() {
  // const [firstName,setFirstName]=useState('')
  // const [myEmail,setMyEmail] = useState('')
  const [formData, setFormData]= useState({
    name : "",
    email : ""
  })

  const handleChange=(e)=>{
    const {name,value} = e.target
    setFormData({...formData, [name] : value})
  }

  const myData=(e)=>{
    e.preventDefault()        //this will make data stay on the page
    console.log(`you entered :${formData.name} && the email is ${formData.email}`)
    // setFirstName('')            //after entering the data and clicking submit it will make UI empty to enter new data
    setFormData({
      name:"",
      email:""
    })
  }

  return (
    <>
      <form onSubmit={myData}>
        <h1>Form handling</h1>
        Name :<input 
        placeholder='enter name'
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        // value={firstName}               //here we have connected the data with the useState      //because of this we won't be able to enter the data
        // onChange={e=>setFirstName(e.target.value)}       //this will help us to enter the data
        required/>
        email :<input 
        placeholder='enter email'
        type='text'
        name="email"
        value={formData.email}
        onChange={handleChange}
        // value={firstName}                   
        required />
        <button>Add</button>
      </form>
      <br /><br />
      <h3>The user details are</h3>
      <ul></ul>
      <br /><br />
      {/* <Form /> */}
    </>
  )
}