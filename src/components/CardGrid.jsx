import { useState } from "react";

import Card from "./card";
import characters from "../data/characters";
import "./CardGrid.css"

function CardGrid({ cards, onCardClick }) {

    return (
        <div className="container">
            <div className="cardGrid">
                {cards.map((card) => 
                    (<Card 
                        key={card.id} 
                        name={card.name} 
                        image={card.image}
                        onClick={() => onCardClick(card)}
                    />
                ))}
            </div>
        </div>
    )  
}

export default CardGrid