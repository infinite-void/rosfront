import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import {useState, useEffect, createContext, useContext} from "react"

import Homepage from "./pages/Homepage/Homepage";
import Instructions from "./pages/Instructions/Instructions";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import SolveRiddles from "./pages/SolveRiddles/SolveRiddles"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import GameOver from "./pages/GameOver/GameOver"
import Login from "./components/LoginSignup/Login"
import Logout from "./utils/Logout"
import SignUp from './components/LoginSignup/SignUp';
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader"
import AccountVerification from "./pages/AccountVerification/AccountVerification"

import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {showToastNotification} from "./components/ToastNotification"
import Cookies from "js-cookie"

export const AuthContext = createContext()
export const SetAuthContext = createContext()

toast.configure()

function App() {

    const [auth, setAuth] = useState();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (Cookies.get("token") !== undefined && Cookies.get("details") !== undefined) {
            setAuth(true)
        } else {
            setAuth(false)
        }
        setLoader(false)
        return () => {

        };
    }, []);


    return (
        <>
            {
                loader ? <Loader/>
                    :
                    <div className="App">
                        <AuthContext.Provider value={auth}>
                            <SetAuthContext.Provider value={setAuth}>
                                <Router>
                                    <Navbar/>
                                    <Routes/>
                                </Router>
                            </SetAuthContext.Provider>
                        </AuthContext.Provider>
                    </div>
            }
        </>

    )
}

const Routes = () => {

    const Auth = useContext(AuthContext);

    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/homepage"/>
            </Route>
            <Route path="/homepage" exact component={Homepage}/>
            <Route path="/instructions" exact component={Instructions}/>
            <ProtectedRoute path="/leaderboard" auth={Auth} exact component={Leaderboard}/>
            <ProtectedRoute path="/solve" auth={Auth} exact component={SolveRiddles}/>
            <Route path="/loader" exact component={Loader}/>
            <Route path="/game-over" exact component={GameOver}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/logout" exact component={Logout}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/account-verified" exact component={AccountVerification}/>
            <Route>
                <ErrorPage
                    errorCode={404}
                    errorMsg={"The page you are looking for might have been removed had its name changed or is temporarily unavailable."}
                    buttonText={"Homepage"}
                    buttonClickURL={"/"}
                />
            </Route>
        </Switch>
    )
}


const ProtectedRoute = ({auth, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (auth === true) {
                    return <Component/>
                } else {
                    {
                        showToastNotification("Login Required")
                    }
                    return (
                        <>
                            <Redirect to="/login"></Redirect>
                        </>
                    )
                }
            }}
        />
    )
}

export default App;
