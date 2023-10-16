import styles from './Person.module.css'
import { motion } from 'framer-motion';

export default function Person({ name, phone, email }) {
    return (
        <motion.div className={styles.person_container}>
            <div className={styles.d}>
                <p className={styles.person_name}>{name}</p>
            </div>
            <div className={styles.p}>
                { phone ?
                <a href={'tel:' +  phone} className={styles.number_contact}>{phone}</a> : null }
                <a href={'mailto:' + email} className={styles.email_contact}>{email}</a>
            </div>
        </motion.div>
    );
}