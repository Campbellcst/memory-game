import { useState } from "react";

import Card from "./card";
import "./CardGrid.css"

function CardGrid({ cards, onCardClick }) {
    

    return (
        <div className="container">
            <div className="cardGrid">
                {cards.map((character) => 
                    (<Card 
                        key={character.id} 
                        name={character.name} 
                        image={character.image}
                        onClick={() => onCardClick(character)}
                    />
                ))}
            </div>
        </div>
    )  

}

export default CardGrid