import styles from "./GameOver.module.css"
import Button from "../../components/Button/Button"
import {useHistory} from "react-router-dom"
import {useEffect, useState} from "react"
import {apiQuestion} from "../../api/auth"
import ErrorPage from "../ErrorPage/ErrorPage"
import Loader from "../../components/Loader/Loader"
import Result from "../../components/Result/Result"

import Cookies from "js-cookie"

function GameOver() {

    const history = useHistory()
    const [fetchError, setFetchError] = useState(false);
    const [loader, setLoader] = useState(false);
    const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);

    const resultForLastAnswer = {
        res: true,
        buttonText: "Close",
        mainText: "You got it!",
        score: 10
    }

    const checkIsGameOver = async () => {
        let token = Cookies.get("token")
        const resp = await apiQuestion({
            "token": token
        });

        if (resp.status === 200) {
            setFetchError(false)
            if (resp.data.gameOver === false) {
                history.push("/solve")
            }
        } else {
            setFetchError(true)
        }
    }

    useEffect(() => {
        if (history.location.state !== undefined && history.location.state.showDialog === true) {
            setIsResultDialogOpen(true)
        }
        setLoader(true)
        checkIsGameOver().then(() => setLoader(false))
        return () => {

        };
    }, []);


    return (
        <>
            {
                loader ?
                    <Loader/>
                    :
                    (
                        fetchError ?
                            <ErrorPage
                                errorCode={500}
                                errorMsg={"There's always time for a coffee break. We should be back by the time you finish your coffee."}
                                buttonText={"Homepage"}
                                buttonClickURL={"/"}
                            />
                            :
                            <div className={styles.wrapper}>
                                <div className={styles.image_box}>
                                    <img src={`${process.env.PUBLIC_URL}/images/gameover/gameover.svg`}/>
                                </div>
                                <div className={styles.text_box}>
                                    <h1>Game Over :)</h1>
                                    <Button text={"Leaderboard"}
                                            onClickMethod={() => history.push("/leaderboard")}/>
                                </div>
                                <Result
                                    isResultDialogOpen={isResultDialogOpen}
                                    setIsResultDialogOpen={setIsResultDialogOpen}
                                    result={resultForLastAnswer}
                                />
                            </div>
                    )
            }
        </>

    )
}

export default GameOver