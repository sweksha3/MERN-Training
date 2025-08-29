export function Movie({pic,title,desc}){
    return(
        <div className="movie">
            <img className="photo" src={pic} alt="a photo" height="200px"/>
            <h4 className="title">{title}</h4>
            <p>{desc}</p>
        </div>
    )
}
