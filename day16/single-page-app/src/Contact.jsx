import {useState} from "react";

export default function Contact(){
    const [data,setData]=useState('')    //strings
    const [names,setNames]=useState([])   //array
    const handleSubmit=(e)=>{
        e.preventDefault()
        //alert("data")
        console.log(`you entered ${data}`)
        //add to list
        setNames([...names,data])   //connecting array with individual names
        
        setData("")     //empty inbox
    }
    return(
        <>
        <h2>this is contact page</h2>
        <form onSubmit={handleSubmit}>
        <label>Name : <input type='text'
        placeholder="enter your name"
        value={data}
        onChange={e=> setData(e.target.value)}
        required />
        </label>
        <button type="submit">Submit</button>
        </form>
        <h2>the names entered are </h2>
        <ul>
            {names.map((hii,i)=>(
                <li key={i}> {hii}</li>
            ))}
        </ul>
        </>
    )
}