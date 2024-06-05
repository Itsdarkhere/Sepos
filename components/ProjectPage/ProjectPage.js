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
                <div className={" absolute bottom-0 py-4 px-6 flex justify-center items-end left-0 top bg-neutral-800 h-full bg-opacity-60 right-0 z-10"}>
                    <div className=' w-full max-w-7xl'>
                        <h1 className={`${styles.font_k} text-3xl md:text-5xl`}>{arrayObject.name}</h1>
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-center items-center py-16 px-6'>
                <div className={" w-full max-w-7xl flex flex-col lg:flex-row gap-16 justify-between"}>
                    <Text languagePack={languagePack} arrayObject={arrayObject} />
                    <Gallery activatePopup={activatePopup} arrayObject={arrayObject} setIndex={setPictureIndex}/>
                </div>
            </div>
            <Map arrayObject={arrayObject}/>
            <OtherProjects projectArray={projectArray} lang={lang} />
        </div>
    )
}