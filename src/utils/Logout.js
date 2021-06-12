import Loader from "../components/Loader/Loader"
import {useEffect, useContext} from "react"
import {showSuccessToastNotification, showToastNotification} from "../components/ToastNotification"
import Cookies from "js-cookie"
import {Redirect, useHistory} from "react-router-dom"
import {AuthContext, SetAuthContext} from "../App"

function Logout() {
    const history = useHistory()
    const Auth = useContext(AuthContext);
    const SetAuth = useContext(SetAuthContext);

    useEffect(() => {
        if (Auth) {
            if (Cookies.get("token") && Cookies.get("details")) {
                Cookies.remove("token")
                Cookies.remove("details")
            }
            SetAuth(false)
            showSuccessToastNotification("Logged Out Successfully")
        } else {
            showToastNotification("Login Required")
        }
        history.push("/")

        return () => {

        };
    }, []);


    return (
        <Loader/>
    )
}

export default Logout