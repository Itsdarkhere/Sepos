import styles from './ProjectLink.module.css';
import Link from 'next/link';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import React from 'react';

export default function ProjectLink({ left, link }) {
  const linkClassName = left ? `${styles.project_link} ${styles.row_reverse}` : `${styles.project_link} ${styles.flex_end}`
  const iconContainerStyle = left
    ? { justifyContent: 'flex-start' }
    : { justifyContent: 'flex-end' };
  const linkStyle = left
    ? { left: '5%', top: '0%' }
    : { right: '5%', top: '0%' };

  return (
    <Link className={linkClassName} href={link[0]} style={linkStyle}>
      <p className={styles.next_name}>{link[1]}</p> {/* Use Next.js CSS Modules here */}
      <div className={styles.icon_container} style={iconContainerStyle}> {/* Use Next.js CSS Modules here */}
        {left ? <MdKeyboardArrowLeft className={styles.next_icon} /> : <MdKeyboardArrowRight className={styles.next_icon} />} {/* Use Next.js CSS Modules here */}
      </div>
    </Link>
  );
}