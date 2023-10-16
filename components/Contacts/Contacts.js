'use client'
import styles from './Contacts.module.css';
import Person from './Person/Person';
import { motion } from 'framer-motion';
import React from 'react';

export default function Contacts({ lang }) {
    
    return (
        <div className={styles.contacts_container}  id="contact">
            <div className={styles.contact_header_container}>
                <motion.div transition={{duration: 1}} className={styles.contact_header}>
                    <p>{lang === 'en' ? 'Contact Us' : 'Yhteystiedot'}</p>
                </motion.div>
            </div>
            <div className={styles.persons_grid}>
                <Person image="Bean.jpeg" name="Jouni Alho" phone={'+358 50 3054104'} email="jouni.alho@sepos.fi" />
                <Person image="Bean.jpeg" name="Juha Pajunen"  phone={'+358 40 7441272'} email="juha.pajunen@axecon.fi" />    
                <Person image="Bean.jpeg" name="Ilkka Kilpimaa"  phone={'+358 40 7435223'} email="ilkka.kilpimaa@sepos.fi" />
                <Person image="Bean.jpeg" name="Timo Everi"  phone={'+358 40 8600231'} email="timo.everi@sepos.fi" />
                <Person image="Bean.jpeg" name="Jorma Alanne" email="jorma.alanne@taaleri.com" />
                <div className={styles.under_550_spacer}></div>
            </div>
        </div>

    );
}