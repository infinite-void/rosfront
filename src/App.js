import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage";
import Instructions from "./pages/Instructions/Instructions";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

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
                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default App;
