import styles from "./SolveRiddles.module.css"
import {useEffect, useState} from "react"
import {apiAnswer, apiQuestion} from "../../api/auth"
import Question from "../../components/Question/Question"
import Loader from "../../components/Loader/Loader"
import Answer from "../../components/Answer/Answer"
import Result from "../../components/Result/Result"
import ErrorPage from "../ErrorPage/ErrorPage"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {showToastNotification} from "../../components/ToastNotification"
import {useHistory} from "react-router-dom"

import Cookies from "js-cookie"

toast.configure()

function SolveRiddles() {

    const history = useHistory()

    const [fetchError, setFetchError] = useState(false);
    const [question, setQuestion] = useState({});
    const [loader, setLoader] = useState(false);
    const [isResultDialogOpen, setIsResultDialogOpen] = useState(false);
    const [result, setResult] = useState({
        res: false,
        buttonText: "Solve Next Riddle",
        mainText: "Wrong Answer. Try Again.",
        score: 5
    });


    const fetchQuestions = async (triggeredByAnswer = false) => {
        let token = Cookies.get("token")
        const resp = await apiQuestion({
            "token": token
        });

        if (resp.status === 200) {
            if (resp.data.gameOver === true) {
                history.push({
                    pathname: "/game-over",
                    state: {
                        showDialog: triggeredByAnswer
                    }
                })
            } else {
                setQuestion(resp.data)
            }

            setFetchError(false)
        } else {
            setFetchError(true)
        }
    }


    useEffect(() => {
        if (Cookies.get("token") === undefined || Cookies.get("details") === undefined) {
            Cookies.remove('token')
            Cookies.remove('details')
            history.push("/login")
        } else {
            setLoader(true)
            fetchQuestions().then(() => setLoader(false))
        }

        return () => {

        };
    }, []);

    const submitAnswer = async (answer) => {
        setLoader(true)
        let token = Cookies.get("token")
        const resp = await apiAnswer({
            "answer": answer,
            "token": token
        })
        if (resp.status === 200) {
            fetchQuestions(true).then(() => setLoader(false))
            setIsResultDialogOpen(true)
            setResult({
                res: true,
                buttonText: "Solve Next Riddle",
                mainText: resp.data.message,
                score: resp.data.score
            })
        } else if (resp.status === 400) {
            setLoader(false)
            setIsResultDialogOpen(true)
            setResult({
                res: false,
                buttonText: "Try Again",
                mainText: resp.data.message,
                score: resp.data.score
            })
        } else {
            setLoader(false)
            showToastNotification()
        }
    }


    return (

        <div className={`${styles.wrapper}`}>
            {
                loader ?
                    <Loader/>
                    :
                    // If fetch error, show error page
                    (fetchError ?
                            <ErrorPage
                                errorCode={500}
                                errorMsg={"There's always time for a coffee break. We should be back by the time you finish your coffee."}
                                buttonText={"Homepage"}
                                buttonClickURL={"/"}
                            />
                            :
                            <>
                                <div className={`${styles.question_container}`}>
                                    <Question question={question.question}
                                              clues={[question.clue1, question.clue2]}/>
                                </div>
                                <div className={`${styles.answer_container}`}>
                                    <Answer submitAnswer={submitAnswer}/>
                                </div>
                                <Result
                                    isResultDialogOpen={isResultDialogOpen}
                                    setIsResultDialogOpen={setIsResultDialogOpen}
                                    result={result}
                                />
                            </>


                    )
            }
        </div>
    )
}

export default SolveRiddles