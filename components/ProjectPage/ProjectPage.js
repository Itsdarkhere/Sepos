'use client'
import styles from './ProjectPage.module.css'
import BigImage from './BigImage/BigImage'
import Gallery from './Gallery/Gallery'
import Link from "next/link";
import Text from './Text/Text'
import ImagePopup from './ImagePopup/ImagePopup'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Map from './Map/Map'
import React, { useEffect, useState } from 'react'
import OtherProjects from './OtherProjects/OtherProjects';
    
export default function ProjectPage({ projectArray, lang, arrayObject, languagePack }) {

    const [popupOpen, setPopupOpen] = useState(false);
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
            <ImagePopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} arrayObject={arrayObject} index={index} />
            <div className={styles.pp_top_container}>  
                <BigImage arrayObject={arrayObject} />
                <div className={styles.text_name_container}>
                    <p className={styles.text_projectname}>{arrayObject.name}</p>
                </div>
            </div>
            <div className={styles.pp_bottom_container}>
                <Text languagePack={languagePack} arrayObject={arrayObject} />
                <Gallery activatePopup={activatePopup} arrayObject={arrayObject} setIndex={setPictureIndex}/>
            </div>
            <Map arrayObject={arrayObject}/>
            <OtherProjects projectArray={projectArray} lang={lang} />
        </div>
    )
}