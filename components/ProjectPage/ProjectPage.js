'use client'
import styles from './ProjectPage.module.css'
import BigImage from './BigImage/BigImage'
import Gallery from './Gallery/Gallery'
import Text from './Text/Text'
import ImagePopup from './ImagePopup/ImagePopup'
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
                <div className={" w-full flex justify-center items-end z-10"}>
                    <div className=' pt-44 md:pt-80 flex justify-center items-start w-full'>
                        <div className=' pb-2 px-6 flex justify-center pt-2 w-full bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent'>
                            <div className='max-w-7xl w-full '>
                                <h1 className={`${styles.font_k} text-neutral-200 text-3xl md:text-5xl`}>{arrayObject.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-center items-center py-4 md:py-8 px-6'>
                <div className={" w-full max-w-7xl flex flex-col lg:flex-row gap-16 justify-between"}>
                    <Text languagePack={languagePack} arrayObject={arrayObject} lang={lang} />
                    <Gallery activatePopup={activatePopup} arrayObject={arrayObject} setIndex={setPictureIndex}/>
                </div>
            </div>
            <Map arrayObject={arrayObject}/>
            <OtherProjects projectArray={projectArray} arrayObject={arrayObject} lang={lang} />
        </div>
    )
}