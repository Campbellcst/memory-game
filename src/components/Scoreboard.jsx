import { useState } from 'react'

function Scoreboard() {
    
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return (
        <>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
        </>
    )
}

export default Scoreboard