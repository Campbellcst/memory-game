import "./Card.css"

function Card({name, image, onClick}) {
    return (
        <div className="cardContainer" onClick={onClick}>
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