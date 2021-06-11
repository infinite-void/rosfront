import styles from "./Result.module.css"
import {Dialog} from "@material-ui/core"
import Button from "../Button/Button"
import {IconContext} from "react-icons"
import {TiTick} from "react-icons/ti"
import {ImCross} from "react-icons/im"

function Result({isResultDialogOpen, setIsResultDialogOpen, result}) {
    const clickedButton = () => {
        setIsResultDialogOpen(!isResultDialogOpen)
    }

    return (
        <IconContext.Provider value={{color: result.res ? 'green' : 'red', className: `${styles.icon}`}}>
            <Dialog open={isResultDialogOpen} className={`${styles.dialog}`}>
                <div className={`${styles.result_wrapper}`}>
                    <div className={`${styles.result_box}`}>
                        <p>{result.mainText}&nbsp;{result.res ? <TiTick/> : <ImCross/>}</p>
                        <p>Score - {result.score}</p>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <Button text={result.buttonText} onClickMethod={clickedButton}/>
                    </div>
                </div>
            </Dialog>
        </IconContext.Provider>
    )
}

export default Result