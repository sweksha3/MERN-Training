import {useState,useEffect} from 'react'

export default function State() {
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(18)

    const add=()=>{
        setCount(count+1)
    }
    const less=()=>{
        setCount(count-1)
    }

    const addAge=()=>{
        setAge(age+1)
    }
    const lessAge=()=>{
        setAge(age-1)
    }

    useEffect(()=>{
        console.log(`You clicked counter : ${count} times`)
    })

    useEffect(()=>{
        console.log(`You clicked age : ${age} times`)
    })

  return (
    <div>
        The Counter value is : {count} <br /> <br />
        <button onClick={add}> + </button> 
        <button onClick={less}> - </button> <br /><br /><br />

        The Counter value is : {age} <br /> <br />
        <button onClick={addAge}> + </button> 
        <button onClick={lessAge}> - </button>
    </div>
  )
}
