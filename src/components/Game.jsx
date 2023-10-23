import { useState, useEffect } from "react"
import Mole from "./Mole"
import styles from "../styles/Game.module.css"
import PropTypes from 'prop-types'

function createGameMoles(numberOfMoles) {
    let randomIndex = Math.floor(Math.random() * numberOfMoles)
    let moles = new Array(numberOfMoles).fill(false)
    moles[randomIndex] = true
    return moles
}

const NUM_OF_MOLES = 9
function Game({ score, setScore }) {
    const [moles, setMoles] = useState(() => {
        return createGameMoles(NUM_OF_MOLES)
    })
    useEffect(() => {
        let timer = setInterval(() => {
            setMoles(createGameMoles(NUM_OF_MOLES))
        }, 800)

        return () => {
            clearTimeout(timer)
        }

    }, [moles])

    useEffect(() => {
        setMoles(createGameMoles(NUM_OF_MOLES))
    }, [score])
    return <div className={styles.game}>
        {moles.map((mole, idx) => {
            return <Mole key={idx} value={mole} setScore={setScore}/>
        })}

        </div>
}

Game.propTypes = {
    score: PropTypes.number.isRequired,
    setScore: PropTypes.func.isRequired
}

export default Game
