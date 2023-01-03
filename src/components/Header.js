import styles from "../styles/style.module.css"

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.headerTitle}>
                Alvin<span className={styles.dot}>.</span>
            </div>
            <div className={styles.menu}>
                <div className={styles.menuItem}>
                   <a href="/" className={styles.menuContent}>Home</a>
                </div>
                <div className={styles.menuItem}>
                    <a href="/projects" className={styles.menuContent}>Projects</a> 
                </div>
                <div className={styles.menuItem}>
                    <a href="/about" className={styles.menuContent}>About</a>
                </div>
            </div>
            <button className={styles.btnContact}>Contact</button>
        </div>
    );
}