import styles from "./Navbar.module.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdClose} from "react-icons/md"
import {Link} from "react-router-dom";
import React, {useRef} from "react";
import {NAVLINKS} from "../../data/NavLinks";
import {AuthContext} from "../../App"
import {useContext} from "react"

function Navbar() {
    const Auth = useContext(AuthContext);

    const navSideRef = useRef()

    const clickedHamburger = () => {
        navSideRef.current.style.width = "300px";
    }

    const clickedNavClose = () => {
        navSideRef.current.style.width = "0px";
    }

    const clickedNavLink = () => {
        navSideRef.current.style.width = "0px";
    }


    return (
        <>
            <div className={`${styles.nav_side_hamburger}`}>
                <GiHamburgerMenu className={`${styles.hamburger}`} onClick={clickedHamburger}/>
            </div>
            <div className={`${styles.nav_side}`} ref={navSideRef}>
                <MdClose onClick={clickedNavClose} className={`${styles.nav_close}`}/>

                {
                    NAVLINKS.map((link, key) => {

                        if (link.text === "AUTH") {
                            link = (Auth) ? link.logout : link.login;
                        }

                        return (
                            <Link
                                key={key}
                                to={link.url}
                                onClick={clickedNavLink}
                                className={`${styles.nav_link}`}
                            >
                                {link.icon}&nbsp;{link.text}
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Navbar