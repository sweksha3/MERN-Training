// import cric from '../assets/vk.jpeg'
// import cric1 from '../assets/rs.jpeg'

export function Cards({pic,title,desc}){
    return(
        <div className="card">
            <img className="photo" src={pic} alt="a photo" height="200px"/>
            <h4 className="title">{title}</h4>
            <p>{desc}</p>
        </div>
    )
}
