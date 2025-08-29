import axios from "axios"
import { useEffect, useState } from "react"               //useEffect is used to get data from third party api

export const Data = () => {
  const [user,setUser]=useState([])
  const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            //.then(res=>console.log(res.data))
            // .then(res=>{setUser(res.data)})
            .then(res=>{
              setUser(res.data)
              setLoading(false)
            })

            .catch(error=>{
              console.error('The error is',error)
              setLoading(false)
            })
    },[])                 //console.log(res.data[1].name)
  return (
    <>
    <div>Data from  API</div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
        { loading ? (
          <tr>
            <td colspan="5" className="text-center"></td>
            <div className="d=flex justify-conent-center">
              <div className="spinner-border text primary" role="status">
                <span className="visually-hidden"> Loading... </span>
              </div>
            </div>
          </tr>
        ) : (
          user.map(abc => (
            <tr key={abc.id}>
              <th scope="row"> {abc.id} </th>
              <th> {abc.username} </th>
              <th> {abc.email} </th>
              <th> {abc.address.city} </th>
              <th> {abc.website} </th>
            </tr>
          ))
        )
      }   

        </tbody>
      </table>
    </>
  )
}
























