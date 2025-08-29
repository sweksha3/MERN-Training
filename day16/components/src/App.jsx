import './App.css'
import { Cards } from './components/cards'
import bowler from './assets/bh.jpeg'
import batsman from './assets/vk.jpeg'
import hitman from './assets/rs.jpeg'
function App(){
  return (
    <>
    
    <h1>welcome to components</h1>

    <Cards pic={bowler} title="Jasprit Bumrah" desc="Yorker king"/>
    <Cards pic={batsman}title="Virat Kohli" desc="Best batsman"/>
    <Cards pic={hitman} title="Rohit sharma" desc="captain"/>
    </>
  )
}
export default App

