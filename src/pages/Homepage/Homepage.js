import styles from "./Homepage.module.css"
import LinkBadges from "../../components/LinkBadges/LinkBadges";
import Header from "../../components/Header/Header";
import {NAVLINKS} from "../../data/NavLinks";

function Homepage() {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.header_box}`}>
                <Header text={"Riddle of Sphinx"}/>
                <p>An Online Puzzle Game</p>
            </div>
            <div className={`${styles.link_box}`}>
                {
                    NAVLINKS.map((link, key) => {
                        if (link.text === "Homepage") {
                            return;
                        }
                        return <LinkBadges url={link.url} text={link.text} icon={link.icon} key={key}/>
                    })
                }
            </div>
        </div>
    )
}

export default Homepage