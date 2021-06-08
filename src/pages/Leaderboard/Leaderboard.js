import styles from "./Leaderboard.module.css"
import Header from "../../components/Header/Header";

function Leaderboard() {

    const leaderboardHeaders = ["Rank", "Name", "College", "Score"]

    const leaderboard = [
        {
            name: "Paargav Shanker",
            college: "College of Engineering, Guindy",
            score: 20
        },
        {
            name: "Paargav Shanker",
            college: "College of Engineering, Guindy",
            score: 20
        },
        {
            name: "Paargav Shanker",
            college: "College of Engineering, Guindy",
            score: 20
        },
        {
            name: "Paargav Shanker",
            college: "College of Engineering, Guindy",
            score: 20
        },
        {
            name: "Paargav Shanker",
            college: "College of Engineering, Guindy",
            score: 20
        }
    ]
    return (
        <div className={`${styles.wrapper}`}>
            <Header text={"Leaderboard"}/>
            <div className={`${styles.main_box}`}>
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
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard