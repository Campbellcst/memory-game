import { useState } from 'react'
import Scoreboard from './components/Scoreboard'
import Card from './components/Card'
import CardGrid from './components/CardGrid'
import characters from './data/characters'

function App() {


  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <p>Get points by clikcing on an image but don't click on any more than once!</p>
      <Scoreboard />
      <CardGrid />
    </>
  )
}

export default App
