'use client'
import styles from './ProjectPage.module.css'
import BigImage from './BigImage/BigImage'
import Gallery from './Gallery/Gallery'
import Link from 'next/link'
import Text from './Text/Text'
// import Preloader from '../Preloader/Preloader'
import ImagePopup from './ImagePopup/ImagePopup'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Map from './Map/Map'
import React, { useEffect, useState } from 'react'
    
export default function ProjectPage({ arrayObject, projectIndex, english }) {

    const [popupOpen, setPopupOpen] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [index, setIndex] = useState(0);

    //Scrolls to start on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    //opening pop up both opens it and gives the index of the array that contains the info for the popup
    const activatePopup = () => {
        if (popupOpen) {
        setPopupOpen(false);
        } else {
        setPopupOpen(true);
        }
    }

    const setPictureIndex = (propIndex) => {
        setIndex(propIndex);
    }


    return (
        <div className={styles.project_page_container}>
            {/* <Preloader loaded={imgLoaded}/> */}
            <ImagePopup popupOpen={popupOpen} activatePopup={activatePopup} arrayObject={arrayObject} index={index} />
            <div className={styles.pp_top_container}>  
                <BigImage arrayObject={arrayObject} setImgLoaded={setImgLoaded}/>
                <div className={styles.under_nav}>
                    <div className={styles.under_nav_inner}>
                        <Link className={styles.project_link} href={arrayObject.previousProject[0]}>
                            <div className={styles.icon_container} style={{ marginRight: 20}}>
                                <MdKeyboardArrowLeft className={styles.next_icon} />
                            </div>
                            <span className={styles.next_name}>{arrayObject.previousProject[1]}</span>
                        </Link>
                        <Link className={styles.project_link} href={arrayObject.nextProject[0]}>
                            <p className={styles.next_name}>{arrayObject.nextProject[1]}</p>
                            <div className={styles.icon_container} style={{ marginLeft: 20}}>
                                <MdKeyboardArrowRight className={styles.next_icon} />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.text_name_container}>
                    <p>{arrayObject.name}</p>
                </div>
            </div>
            <div className={styles.pp_bottom_container}>
                <Text arrayObject={arrayObject} english={english}/>
                <Gallery activatePopup={activatePopup} arrayObject={arrayObject} setIndex={setPictureIndex}/>
            </div>
            <Map arrayObject={arrayObject}/>
        </div>
    )
}