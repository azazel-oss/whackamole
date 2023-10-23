import styles from "../styles/Mole.module.css"
import PropTypes from 'prop-types'

function Mole({value, setScore}) {
    const clickHandler = () => {
        if (value) {
            setScore(prevScore => prevScore + 1)
        }
    }
    return <div className={`${styles.mole} ${value ? styles.active : ""}`} onClick={clickHandler}></div>
}

Mole.propTypes = {
    value: PropTypes.bool.isRequired,
    setScore: PropTypes.func.isRequired
}

export default Mole
