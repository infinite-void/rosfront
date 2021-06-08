import {FaList, FaPlay, FaTrophy} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi";
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
        "url": "/logout",
        "text": "Logout",
        "icon": <BiLogOut/>
    }
]