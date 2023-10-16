'use client'
import styles from './Nav.module.css'
import NavPopup from './NavPopup/Navpopup'
import { useState } from 'react'
import { NavIcon } from './NavIcon/NavIcon'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Nav() {
    const [popupOpen, setPopupOpen] = useState(false);

    /* //opening pop up both opens it and gives the index of the array that contains the info for the popup */
    const activatePopup = () => {
        if (popupOpen) {
            setPopupOpen(false);
        } else {
            setPopupOpen(true);
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }


    /* //Chooses between burger and string menu based on width */
    const getNav = () => {
        return (    
            <motion.button className={styles.hamburger_holder} aria-label="Open Navigation"
            initial={false} onClick={activatePopup} animate={popupOpen ? "open" : "closed"} >  
                <NavIcon />
                <NavPopup popupOpen={popupOpen} />
            </motion.button>
            )
    
    }
    /* //close nav if open and scroll to top, on header click */
    // const HeaderAction = () => {
    //     if (popupOpen) {
    //         activatePopup()   
    //     }
    //     scrollToTop()
    // }

    return (
        <div className={styles.navbar_container} id="navbar">
            <div className={styles.nav_inner}>
                <Link className={styles.navbar_header} href="/">
                    <p className={styles.company_name}>SEPOS OY</p>
                </Link>
                <div className={styles.navbar_right}>
                    {getNav()}
                </div>
            </div>
        </div>
    )
}