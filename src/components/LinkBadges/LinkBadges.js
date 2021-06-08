import styles from "./LinkBadges.module.css"
import {Link} from "react-router-dom";

function LinkBadges({url, text, icon}) {
    return (
        <Link to={url} className={`${styles.badge}`}>{icon}&nbsp;{text}</Link>
    )
}

export default LinkBadges