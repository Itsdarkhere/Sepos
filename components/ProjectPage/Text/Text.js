import styles from './Text.module.css';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Text({ arrayObject, english }) {
  const getStatus = () => {
    if (arrayObject.status !== '') {
      return (
        <div className={styles.status_container}>
          <p className={styles.text_header}>{false ? 'Project status' : 'Projektin tilanne'}</p>
          <p className={styles.text_status}>{false ? arrayObject.status : arrayObject.fin_status}</p>
        </div>
      );
    }
  };

  const getWebsiteLink = () => {
    if (arrayObject.website !== '') {
      return (
        <div className={styles.website_link_container}>
          <a className={styles.website_link} target="_blank" href={arrayObject.website}>
            {arrayObject.websiteLinkName}
          </a>
        </div>
      );
    }
  };

  const getLocation = () => {
    if (english && arrayObject.location !== '') {
      return <p className={`${styles.text_description} ${styles.location}`}>{arrayObject.location}</p>;
    }
  };

  return (
    <div className={styles.text_outer_container}>
      <div className={styles.text_inner_container}>
        <div className={styles.text_desc_container}>
          {getLocation()}
          <p className={styles.text_description}>{false ? arrayObject.description : arrayObject.fin_description}</p>
        </div>
        <div className={styles.text_button_facts_container}>
          {getStatus()}
          <div className={styles.text_facts}>
            <AnimatePresence mode='wait'>
              {english
                ? arrayObject.facts.map((fact, index) => {
                    return (
                      <motion.li
                        key={'red' + index}
                        className={styles.text_fact}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {fact}
                      </motion.li>
                    );
                  })
                : arrayObject.fin_facts.map((fact, index) => {
                    return (
                      <motion.li
                        key={'blue' + index}
                        className={styles.text_fact}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {fact}
                      </motion.li>
                    );
                  })}
            </AnimatePresence>
          </div>
          <p className={styles.text_header}>{false ? 'Facts' : 'Faktoja'}</p>
        </div>
        {getWebsiteLink()}
      </div>
    </div>
  );
}