import styles from "./Answer.module.css"
import {useState} from "react"
import Button from "../Button/Button"

function Answer({submitAnswer}) {
    const [answer, setAnswer] = useState();

    return (
        <div className={`${styles.answer_wrapper}`}>
            <h5>Enter you answer here</h5>
            <input type="text" onChange={(e) => setAnswer(e.target.value)}/>
            <Button text={"Answer"} onClickMethod={() => submitAnswer(answer)}/>
        </div>
    )
}

export default Answer