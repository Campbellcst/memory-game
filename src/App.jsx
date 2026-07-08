import { useEffect, useState } from 'react'
import Scoreboard from './components/Scoreboard'
import Card from './components/Card'
import CardGrid from './components/CardGrid'
import fetchPokemon from './data/characters'

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lastClickedCard, setLastClickedCard] = useState("");
  const [prevNames, setPrevNames] = useState([]);
  
  useEffect(() => {
    
    async function getPokemon() {
      const characters = await fetchPokemon();

      setCards(characters);
    }
    
    getPokemon();
    
  }, []);
  console.log(cards);

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

  function handleScore(name) {
    let newArr = [...prevNames];
    newArr.push(name);
    setPrevNames(newArr)

    if (prevNames.includes(name)) {
      setScore(0);
      setPrevNames([]);
    } else {
    setScore(score + 1);
    }
    if (score >= highScore) {
        setHighScore(score)
      }
    console.log(prevNames);
  }

  function handleClick(card) {
      //shuffle logic
      console.log(card.name);
      const shuffled = [...cards];
      shuffle(shuffled);
      setCards(shuffled);


      //score logic
      handleScore(card.name);
  }

  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <p>Get points by clikcing on an image but don't click on any more than once!</p>
      <Scoreboard score={score} highScore={highScore}/>
      <CardGrid cards={cards} onCardClick={handleClick}/>
    </>
  )
}

export default App
