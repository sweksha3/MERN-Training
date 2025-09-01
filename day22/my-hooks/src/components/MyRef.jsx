import {useRef} from 'react'

export default function MyRef() {
    // console.log(useRef)
    const myInp = useRef()

    function handleClick(){
        myInp.current.style.background = 'blue'
        myInp.current.style.width = '500px'
        console.log("run ref function")
    }
  return (
    <>
        <h2>MyRef</h2>
        <input type='text' placeholder='ref demo...' ref={myInp} />
        <button onClick={handleClick}> Click Me </button>
    </>
    
  )
}
