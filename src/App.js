import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage";
import Instructions from "./pages/Instructions/Instructions";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Loader from "./components/Loader/Loader"
import SolveRiddles from "./pages/SolveRiddles/SolveRiddles"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import GameOver from "./pages/GameOver/GameOver"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/homepage"/>
                    </Route>
                    <Route path="/homepage" exact component={Homepage}/>
                    <Route path="/instructions" exact component={Instructions}/>
                    <Route path="/leaderboard" exact component={Leaderboard}/>
                    <Route path="/solve" exact component={SolveRiddles}/>
                    <Route path="/loader" exact component={Loader}/>
                    <Route path="/game-over" exact component={GameOver}/>
                    <Route>
                        <ErrorPage
                            errorCode={404}
                            errorMsg={"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}
                            buttonText={"Homepage"}
                            buttonClickURL={"/"}
                        />
                    </Route>
                </Switch>

            </BrowserRouter>

        </div>
    )
        ;
}

export default App;
