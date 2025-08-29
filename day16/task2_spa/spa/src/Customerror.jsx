import {Link } from 'react-router-dom'

export default function Customererror(){
    return(
        <>
        <h6>404...  PAGE NOT FOUND</h6>
        <Link to='/'>
        <button>go to main page</button>
        </Link>
        
        </>
    )
}