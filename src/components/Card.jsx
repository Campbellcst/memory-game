import "./Card.css"

function Card({name, image}) {
    console.log(name, image)
    
    return (
        <div className="cardContainer">
            <div className="imgContainer">
                <img src={image}/>
            </div>
            <div className="nameContainer">
                <p className="cardName">{name}</p>
            </div>
        </div>
    )
}

export default Card