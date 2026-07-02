import { useState } from "react";

import Card from "./card";
import characters from "../data/characters";
import "./CardGrid.css"

function CardGrid() {

    const [cards, setCards] = useState(characters);

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) { 
            
            // Generate random index 
            const j = Math.floor(Math.random() * (i + 1));
                        
            // Swap elements at indices i and j
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    function handleClick(card) {
        console.log(card.name);
        const shuffled = [...cards];
        
        shuffle(shuffled);
        setCards(shuffled);
    }

    return (
        <div className="container">
            <div className="cardGrid">
                {cards.map((card) => 
                    (<Card 
                        key={card.id} 
                        name={card.name} 
                        image={card.image}
                        onClick={() => handleClick(card)}
                    />
                ))}
            </div>
        </div>
    )  
}

export default CardGrid