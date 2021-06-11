import styles from "./Question.module.css"
import Button from "../Button/Button"
import {Dialog} from "@material-ui/core"
import {useState} from "react"

function Question({question, clues}) {

    const [isClueDialogOpen, setIsClueDialogOpen] = useState(false);

    const toggleClueDialog = () => {
        setIsClueDialogOpen(!isClueDialogOpen)
    }

    return (
        <div className={`${styles.question_wrapper}`}>
            <div className={`${styles.question_box}`}>
                <p>QUESTION</p>
                <p>{question}</p>
            </div>
            <div className={`${styles.clues_box}`}>
                <Button text={"Clue"} onClickMethod={toggleClueDialog}/>
            </div>
            <Dialog open={isClueDialogOpen}>
                <div className={`${styles.clue_wrapper}`}>
                    {
                        clues.length > 0 &&
                        clues.map((clue, key) => {
                            return (
                                <div key={key} className={`${styles.clue}`}>
                                    <p>CLUE {key}</p>
                                    {clue !== null ? <p>{clue}</p> : <p>No clues to show!</p>}
                                </div>
                            )
                        })
                    }
                    <div style={{textAlign: 'center'}}>
                        <Button text={"Close"} onClickMethod={toggleClueDialog}/>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Question
