import styles from "./AccountVerification.module.css"
import {useHistory} from "react-router-dom"
import Button from "../../components/Button/Button"

function AccountVerification() {

    const history = useHistory()

    return (
        <div className={styles.wrapper}>
            <div className={styles.image_box}>
                <img src={`${process.env.PUBLIC_URL}/images/gameover/gameover.svg`}/>
            </div>
            <div className={styles.text_box}>
                <h1>Email Verified Successfully. Please login to continue :)</h1>
                <Button text={"Login"}
                        onClickMethod={() => history.push("/login")}/>
            </div>
        </div>
    )
}

export default AccountVerification