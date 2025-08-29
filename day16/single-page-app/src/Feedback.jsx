import {useState} from "react";                      //use state gives us the initial state

export default function Feedback(){
    const [data,setData]=useState('')    
    const [names,setNames]=useState([])  
    const handleSubmit=(e)=>{
        e.preventDefault()                                    //if we dont write it the data in our console would just appear for less than a second
        console.log(`you entered ${data}`)
        setNames([...names,data])   
        setData("")    
    }
    return(
         <>
        <h2>this is feedback page</h2>
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