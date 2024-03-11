'use client'
import styles from './EntryView.module.css'
import { motion, useAnimation } from 'framer-motion'
import { ResizeObserver } from '@juggle/resize-observer';
import { useEffect, useState } from 'react'


export default function EntryView({ lang }) {

    const [screenWidth, setWidth] = useState(1500)

    const ro = new ResizeObserver((entries, observer) => {
        entries.forEach((entry) => {
            const { inlineSize: width } = entry.contentBoxSize[0];
            setWidth(width)
          });
    });

    useEffect(() => {
        ro.observe(document.body);
    }, [])

    const textsFin = {
        line: `Kaupunkikehityskohteita Helsingissä, Turussa, Jyväskylässä ja Hämeenlinnassa.`,
        story: `Sepos Oy on vuonna 2014 perustettu Timo Everin, Ilkka Kilpimaan 
        ja NasdaqOMX listatun Taaleri Oyj:n omistama yritys, jonka toimialana on kiinteistökehitys 
        ja sijoittaminen aktiivisen elämäntavan arvoketjussa toimiviin yrityksiin.`
    }

    const textsEng = {
        line: `Urban development projects in Helsinki, Turku, Jyväskylä and Hämeenlinna`,
        story: `Sepos Oy is a company founded in 2014 and owned by Timo Everi, Ilkka Kilpimaa 
        and NasdaqOMX Helsinki listed Taaleri Sijoitus Oy. The Company's field of activity is real estate development
         and investing in companies operating in the active lifestyle value chain.`,
    }

    const texts = lang === 'en' ? textsEng : textsFin;


    // Resizing does not update the image src with the srcSet, so this solves that problem
    // And thats a problem since the picture completely changes aspect ratio wise under 600px
    // Going from small to big there is no problem but big to small it would not work otherwise
    const getImage = () => {
        if (screenWidth < 799) {
            return (
                <picture 
                id="entry-image"
                alt="wide-project-img"
                className="absolute inset-0 z-0">
                    {/* <source srcSet={mobile} type="image/webp"></source> */}
                    <img className={" w-full h-full object-cover"} src={"https://ik.imagekit.io/s93qwyistj0/pics-highres/mobile_NEZxhQrnTd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653668422915"} 
                    alt="wide-project-img"></img>
                </picture>
            )
        } 
        return (
            <picture 
            id="entry-image"
            alt="wide-project-img"
            className="absolute inset-0 z-0">
                {/* <source srcSet={desktop} type="image/webp"></source> */}
                <img className={" w-full h-full object-cover"} src={"https://ik.imagekit.io/s93qwyistj0/pics-highres/desktop_-um8M8xUPd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653668423308"} 
                alt="wide-project-img"></img>
            </picture>
        )
    }

    
    const controls = useAnimation()
    const controls2 = useAnimation()

    useEffect(() => {
        controls.start({
            opacity: [0, 1],
            transition: { duration: 1}
        })
        controls2.start({
            opacity: [0, 1],
            transition: { duration: 1, delay: 0.5}
        })
    }, [])

    return (
        <div className="w-full px-5 sm:px-20 mt-16 py-40 sm:py-60 md:py-80 relative flex flex-col justify-center items-center text-center">
            {getImage()}
            <div className={styles.entry_view_inner_container}>
                <motion.div className={styles.line} animate={controls}>
                    <h1>{texts.line}</h1>
                </motion.div>  
                <motion.div className={styles.description} animate={controls2}>
                    <h4>{texts.story}</h4>
                </motion.div>  
            </div>
        </div>
    )   
}