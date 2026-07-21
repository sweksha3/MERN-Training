import React from 'react'
import { useState } from 'react'
import './App.css'

export default function Form() {
    const [formData,setFormData]=useState({
        name : "",
        email : ""
    })

    const handleChange=(e)=>{
        const {name,value} = e.target
        setFormData({...formData, [name] : value})
    }

    const myData=(e)=>{
        e.preventDefault()
        console.log(`name : ${formData.name} && email : ${formData.email}`)
        setFormData({
            name : "",
            email : ""
        })
    }

    return (
    <>
        <h1> Form Handling Assessment </h1>
            <form onSubmit={myData}>
            <h2>Form</h2>
            Name : <input 
            placeholder='enter name'
            type='text'
            name='name'
            value={FormData.name}
            onChange={handleChange}
            required />
            Email : <input
            placeholder='enter email id'
            type='text'
            name='email'
            value={FormData.email}
            onChange={handleChange}
            required />
            <button> Add </button>
        </form>
    </>
  )
}
