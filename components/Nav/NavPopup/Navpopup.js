import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectArray } from '@/utils/Array';
import styles from './NavPopup.module.css';
import { Fragment } from 'react';

export default function NavPopup({ popupOpen }) {
    const projectArray = ProjectArray()

    return (    
        <Transition appear show={popupOpen} as={Fragment}>
            <Dialog as="div" open={popupOpen} onClose={() => console.log('close modal')} className={styles.nav_modal_overlay}>
                <Dialog.Overlay />
                <motion.div
                className={styles.popup_container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                >
                    <Link href="/#projects" className={styles.popup_link}>
                        {false ? 'Real Estate Developments' : 'Kiinteistökehitys'}
                    </Link>
                    <div className={styles.individual_project_link_container}>
                        {projectArray.map((project, index) => (
                            <Link key={index} href={project.projectPage} className={styles.popup_project_link}>
                                {project.name}
                            </Link>
                        ))}
                    </div>
                    <Link href="/#companies" className={styles.popup_link}>
                        {false ? 'Affiliated Companies' : 'Osakkuusyhtiöt'}
                    </Link>
                    {/* <Link href="/#news" className={styles.popup_link}>
                        {false ? 'News' : 'Ajankohtaista'}
                    </Link> */}
                    <Link href="/#contact" className={styles.popup_link}>
                        {false ? 'Contact' : 'Yhteystiedot'}
                    </Link>
                </motion.div>
            </Dialog>
        </Transition>
    )
}