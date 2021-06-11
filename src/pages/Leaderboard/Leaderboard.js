import styles from "./Leaderboard.module.css"
import Header from "../../components/Header/Header";
import {useState, useEffect} from "react"
import Loader from "../../components/Loader/Loader"
import {apiLeaderboard} from "../../api/auth"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {showToastNotification} from "../../components/ToastNotification"

toast.configure()

function Leaderboard() {

    const [leaderboard, setLeaderboard] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchLeaderboard = async () => {
        const resp = await apiLeaderboard({
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxNjcwY2NmLWY2NWEtNGVmOS05MDEzLTU3MTcwMTA4NTdiZCIsImlhdCI6MTYyMzMzNTg0M30.OeDZQULc2ksgxbzP15WBEIzgof_uNJwxeA4dnYyN068"
        })

        if (resp.status === 200) {
            setLeaderboard(resp.data.users)
        } else {
            showToastNotification()
        }
    }

    const formatTime = (iso) => {
        return (iso === null) ? "-" : new Date(iso).toLocaleString()
    }

    useEffect(() => {
        setLoader(true)
        fetchLeaderboard().then(() => setLoader(false))
        return () => {

        };
    }, []);

    const leaderboardHeaders = ["Rank", "Name", "College", "Score", "Last Answered"]

    return (
        <div className={`${styles.wrapper}`}>
            {
                loader ? <Loader/> :
                    <>
                        <Header text={"Leaderboard"}/>
                        <div className={`${styles.main_box}`}>
                            {
                                leaderboard.length === 0 ?
                                    <>
                                        <p style={{color: 'white'}}> Nobody has started to play!</p>
                                    </>
                                    :
                                    <table>
                                        <thead>
                                        <tr>
                                            {
                                                leaderboardHeaders.map((header, key) => {
                                                    return (
                                                        <th key={key}>
                                                            {header}
                                                        </th>
                                                    )
                                                })
                                            }
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            leaderboard.map((leader, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{key}</td>
                                                        <td>{leader.name}</td>
                                                        <td>{leader.college}</td>
                                                        <td>{leader.score}</td>
                                                        <td>{formatTime(leader.lastanswer)}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                            }

                        </div>
                    </>
            }

        </div>
    )
}

export default Leaderboard