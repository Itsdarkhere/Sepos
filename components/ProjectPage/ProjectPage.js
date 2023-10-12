'use client'
import styles from './ProjectPage.module.css'
import BigImage from './BigImage/BigImage'
import ProjectLink from './ProjectLink/ProjectLink'
import Gallery from './Gallery/Gallery'
import Text from './Text/Text'
import Footer from '../Footer/Footer'
// import Preloader from '../Preloader/Preloader'
import ImagePopup from './ImagePopup/ImagePopup'
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
                <div className={styles.under_nav}></div>
                <ProjectLink left={true} link={arrayObject.previousProject}/>
                <ProjectLink left={false} link={arrayObject.nextProject}/>
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