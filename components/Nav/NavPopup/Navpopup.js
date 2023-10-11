import styles from './NavPopup.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectArray } from '@/utils/Array'
import Modal from 'react-modal'
// import ScrollLock from 'react-scrolllock'
import { animateTextChange } from '@/utils/animateTextChange'

export default function NavPopup({ popupOpen }) {
    const projectArray = ProjectArray()

    // I have no idea why this needs to be set
    Modal.setAppElement('body')

    return (    
        // <ScrollLock isActive={popupOpen}>
             <motion.div className={styles.nav_modal_overlay} style={popupOpen ? {display: 'flex'} : {display: 'none'}}>
                <Modal
                    isOpen={popupOpen}
                    overlayClassName={styles.nav_modal_overlay}
                    className={styles.nav_modal}
                    closeTimeoutMS={0}>
                    <motion.div className={styles.animated_overlay} id="modal-overlay" initial={{opacity: 0}} animate={{opacity: 1}}>
                            <div className={styles.projects_navigation}>
                                <Link href="/#projects" className={styles.popup_link}>
                                    { animateTextChange('', false, 'Real Estate Developments', 'Kiinteistökehitys')}
                                </Link>
                                <div className={styles.individual_project_link_container}>
                                    {projectArray.map((project, index) => {
                                        return (
                                            <Link key={index} href={project.projectPage} className={styles.popup_project_link}>{project.name}</Link>
                                        )
                                    })}
                                </div>
                                <Link href="/#companies" className={styles.popup_link}>
                                    { animateTextChange('', false, 'Affiliated Companies', 'Osakkuusyhtiöt')}
                                </Link>
                                <Link href="/#news" className={styles.popup_link}>
                                    { animateTextChange('', false, 'News', 'Ajankohtaista')}
                                </Link>
                                <Link href="/#contact" className={styles.popup_link}>
                                    { animateTextChange('', false, 'Contact', 'Yhteystiedot')}
                                </Link>
                            </div>
                            <img className={styles.nav_image} rel="preload" src={'https://ik.imagekit.io/s93qwyistj0/pics-highres/garden-6_4LJVnPYIn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653664961315'} 
                                alt="wide-project-img"></img>
                    </motion.div>
                </Modal>  
             </motion.div>  
        // </ScrollLock>
    )
}