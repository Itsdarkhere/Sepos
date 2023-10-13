import styles from './Company.module.css';
import { animateTextChange } from '@/utils/animateTextChange';

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
                    {animateTextChange(styles.company_desc, english, companyObject.description, companyObject.fin_description)}
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