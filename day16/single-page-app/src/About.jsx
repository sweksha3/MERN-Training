import {useState} from "react";

export default function About(){
    const [count,setCount]=useState(2)

    function add(){
        setCount(count+1)

    }

    function subtract(){
        setCount(count-1)

    }

    function reset(){
        setCount(0)
    }

    return(
        <>
        <h2>this is about page</h2>
        <h3>The counter value is : {count}</h3>
        <button onClick={add}>+</button> &nbsp; &nbsp; &nbsp;
        <button onClick={reset}>Reset</button>&nbsp; &nbsp; &nbsp;
        <button onClick={subtract} disabled={count===0}>-</button> 
        </>
    )
}