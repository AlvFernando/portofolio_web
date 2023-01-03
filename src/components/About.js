import styles from "../styles/style.module.css"

export default function About(){
    return (
        <div className={styles.aboutMainContainer}>
            <div className={styles.aboutHeader}>
                <div className={styles.aboutHeaderLeft}>
                    <div className={styles.avatarBorder}></div>
                    <div className={styles.personalDetail}>
                        <div className={styles.personalDetailName}>Alvin Fernando</div>
                        <div className={styles.personalDetailDetail}>
                            <a href="www.linkedin.com/in/alvin-fernando-86a4301b8/" className={styles.linkedin}>
                                www.linkedin.com/in/alvin-fernando-86a4301b8/ |
                            </a>
                            alvinfernando29@yahoo.com | 081314931886
                        </div>
                    </div>
                </div>
                <div className={styles.aboutHeaderRight}>
                    <button className={styles.btnViewPortfolio}>View portfolio</button>
                    <button className={styles.btnFollow}>+ Follow</button>
                </div>
            </div>
            <div className={styles.dividers}></div>
            <div className={styles.aboutAboutme}>
                <div className={styles.aboutAboutmeTitle}>About Me</div>
                <div className={styles.aboutAboutmeContent}>
                    <div className={styles.aboutAboutmeObjective}>
                        As a Bina Nusantara University graduate and current part of AdIns, 
                        I live and breathe software. I have experience working across the full-stack of software develompent. 
                        I have built 10+ projects on small teams and am looking for a role as a full-stack or mobile developer 
                        where I can grow and continue to learn from other experienced team members.
                    </div>
                    <div className={styles.aboutAboutmeLinks}>
                        <div>location</div>
                        <div>website</div>
                        <div>portfolio</div>
                        <div>email</div>
                    </div>
                </div>
            </div>
            <div className={styles.dividers}></div>
            <div className={styles.aboutExperience}>
                <div className={styles.aboutAboutmeTitle}>Expirience</div>
            </div>
        </div>
    ); 
}