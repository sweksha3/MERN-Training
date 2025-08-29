import './App.css'
import { Movie } from './movie'
import wallE from './assets/wallE.jpeg'
import zootopia from './assets/zootopia.jpeg'
import toystory from './assets/toystory.jpeg'
import jurasicpark from './assets/jurasicpark.png'
import jurasicworld from './assets/jurasicworld.jpeg'

function M(){
  return (
    <>
    
    <h1>MOVIES</h1>

    <Movie pic={wallE} title="WallE" desc="Robot based"/>
    <Movie pic={zootopia} title="Zootopia" desc="Animal based"/>
    <Movie pic={toystory} title="Toy Story" desc="Space based"/>
    <Movie pic={jurasicpark} title="Jurassic Park" desc="Dianasour"/>
    <Movie pic={jurasicworld} title="Jurassic World" desc="Dianasour Cloning"/>
     
    </>
  )
}
export default M

