import { Link } from "react-router-dom";


export default function Notfound(){
    return(
        <>
        <h2>404 error, page not found</h2>
        <Link to ="/">
        <button>back to home</button>
        </Link>
        </>
    )
}