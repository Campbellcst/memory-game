import Card from "./card";
import characters from "../data/characters";
import "./CardGrid.css"

function CardGrid() {
    return (
        <div className="container">
            <div className="cardGrid">
                {characters.map((card) => (<Card key={card.id} name={card.name} image={card.image}/>))}
            </div>
        </div>
    )  
}

export default CardGrid