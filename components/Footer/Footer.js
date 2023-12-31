'use client'
import styles from './Footer.module.css'
import React, { useState } from 'react'

export default function Footer({ english }) {

    const [policy, togglePolicy] = useState(true)
    const policyToggle = () => {
        togglePolicy(!policy)
    }

    return (
        <footer className={styles.bottom_outer_container}>
            <div className={styles.bottom_inner_container}>
                <button className={styles.footer_logo_button} onClick={() => window.scrollTo(0, 0)}
                aria-label="Home Button">
                    <p className="align">SEPOS OY</p>
                </button>
                <div className={styles.footer_tags_container}>
                    <div className={styles.footer_befound}>BeFound Web Design</div>
                </div>
                {!policy &&
                    <button className={styles.policy_popup} onClick={() => policyToggle()}>
                        <p>{false ? 'We do not keep, store or use any of our visitors data.' :
                        'Emme säilytä, kerää tai käytä mitään käyttäjiemme dataa.'}</p>
                    </button>
                }
            </div>
            <div className="white-space"></div>
        </footer>
    )
}