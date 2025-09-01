import {useState, useReducer} from 'react'

function reducer(state, action){
    switch(action.type){
        case 'increment' :
            return {count : state.count + 1}
        case 'decrement' :
            return {count : state.count - 1}
        case 'reset' :
            return {count : 0}
        default :
            return state
    }
}

export default function Counter() {
    console.log(useState)
    console.log("_________________")
    console.log(useReducer)
    const [state,dispatch] = useReducer(reducer,{count :5})
  return (
    <>
        <h1>Reducer count : {state.count}</h1>
        <button onClick={()=> dispatch({type : 'increment'})}> + </button>
        <button onClick={()=> dispatch({type : 'decrement'})}> - </button>
        <button onClick={()=> dispatch({type : 'reset'})}> reset </button>
    </>
    
  )
}
