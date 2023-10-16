import styles from './Company.module.css';

export default function Company({ companyObject, english }) {
    return (
        <div className={styles.company_container}>
            <picture loading="lazy" alt="company" className={styles.company_bg_image}>
                <img className={styles.company_bg_image} src={companyObject.image} alt="wide-project-img" />
            </picture>
            <div className={styles.company_text}>
                <div className={styles.company_name_container}>
                    <p>{companyObject.name}</p>
                </div>
                <div className={styles.company_text_inner}>
                    <p className={styles.company_desc}>{false ? companyObject.description : companyObject.fin_description}</p>
                </div>
                <div className={styles.company_button_container}>
                    <a className={styles.company_button} target="_blank" href={companyObject.website}>
                        <p className={styles.company_link}>{companyObject.displayWebsite}</p>
                    </a>
                </div>
            </div>
        </div>
    );
}