import { useState } from 'react'
import './App.css'
import Game from './components/Game'

function App() {
    const [score, setScore] = useState(0)

  return (
    <>
      <h1>Score: {score}</h1>
      <Game score={score} setScore={setScore}/>
    </>
  )
}

export default App
