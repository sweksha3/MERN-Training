import {useContext} from 'react'
import userContext from './CreateContext'

export const GrandChild = () => {
    const user = useContext(userContext)
  return (
    <div>GrandChild {user}</div>
  )
}
