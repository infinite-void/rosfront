import {FaList, FaPlay, FaTrophy} from "react-icons/fa";
import {BiLogOut, BiLogIn} from "react-icons/bi";
import {HiHome} from "react-icons/hi";

export const NAVLINKS = [
    {
        "url": "/",
        "text": "Homepage",
        "icon": <HiHome/>
    },
    {
        "url": "/instructions",
        "text": "Instructions",
        "icon": <FaList/>
    },
    {
        "url": "/leaderboard",
        "text": "Leaderboard",
        "icon": <FaTrophy/>
    },
    {
        "url": "/solve",
        "text": "Solve Riddles",
        "icon": <FaPlay/>
    },
    {
        "text": "AUTH",
        "login": {
            "url": "/login",
            "text": "Login",
            "icon": <BiLogIn/>
        },
        "logout": {
            "url": "/logout",
            "text": "Logout",
            "icon": <BiLogOut/>
        }
    }
]