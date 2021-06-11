import styles from "./ErrorPage.module.css"
import Button from "../../components/Button/Button"
import {useHistory} from "react-router-dom"

function ErrorPage({errorCode, errorMsg, buttonText, buttonClickURL}) {

    const history = useHistory();

    const clickedButton = () => {
        history.push("/")
    }

    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.box} floater`}>
                <h1>{errorCode}&nbsp;:(</h1>
                <p>{errorMsg}</p>
                <Button text={buttonText} onClickMethod={() => clickedButton(buttonClickURL)}/>
            </div>
        </div>
    )
}

export default ErrorPage