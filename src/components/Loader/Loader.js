import styles from "./Loader.module.css"

function Loader() {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.bouncer}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader