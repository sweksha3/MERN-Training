import {useState} from 'react'
import Parent from './Parent'
import userContext from './CreateContext'

export default function Data() {
    const [user,setUser] = useState('NIET MERN Course')
  return (
    <userContext.Provider value={user}>
      <h1>
        {`Hello ${user}`}
        <Parent user />
      </h1>  
    </userContext.Provider>
    
  )
}
