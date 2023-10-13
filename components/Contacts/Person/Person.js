import styles from './Person.module.css'
import { motion } from 'framer-motion';
import { animateTextChange } from '@/utils/animateTextChange';

export default function Person({ image, name, finTitle, title, phone, email, english }) {
    return (
        <motion.div className={styles.person_container}>
            <div className={styles.d}>
                <p className={styles.person_name}>{name}</p>
                { 
                    finTitle ? 
                    <div className={styles.person_title_container}>
                        { animateTextChange(styles.person_title, english, title, finTitle)}
                    </div>
                    : null
                }
            </div>
            <div className='p'>
                { phone ?
                <a href={'tel:' +  phone} className={styles.number_contact}>{phone}</a> : null }
                <a href={'mailto:' + email} className={styles.email_contact}>{email}</a>
            </div>
        </motion.div>
    );
}