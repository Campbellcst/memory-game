import { useState } from 'react'

function Scoreboard({score, highScore}) {
    
    
    
    return (
        <>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
        </>
    )
}

export default Scoreboard