import styles from './Footer.module.css'

export default function Footer({ english }) {

    return (
        <footer className={styles.bottom_outer_container}>
            <div className={styles.bottom_inner_container}>
                <div className={styles.footer_logo_button}
                aria-label="Home Button">
                    <p className="align">SEPOS OY</p>
                </div>
                <div className={styles.footer_tags_container}>
                    <div className={styles.footer_befound}>BeFound Web Design</div>
                </div>
            </div>
        </footer>
    )
}