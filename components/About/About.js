'use client'
import styles from './About.module.css'
import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default function About({ english }) {
    return (
        <div className={styles.about_section} id="news">
            <div className={styles.about_header}>
                <div className={styles.about_header_inner}>
                   <p>{false ? 'News' : 'Ajankohtaista'}</p>
                </div>
            </div>
            <div className={styles.tweets_container}>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'SeposOy'
                    }}
                    options={{
                        height: '600',
                        width: '600',
                        theme: 'dark'
                    }}
                />
            </div>
        </div>
    )
}