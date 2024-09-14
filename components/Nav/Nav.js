"use client";
import styles from "./Nav.module.css";
import Link from "next/link";
import { ProjectArray } from "@/utils/Array";
import { useState } from "react";
import NavDialog from "./NavDialog";

export default function Nav({ lang }) {
  const projectArray = ProjectArray();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const getNav = () => {
    return (
      <div className='flex justify-end'>
        <button
          onClick={() => setIsOpen(true)}
          className='btn btn-ghost text-white'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
        <NavDialog
          lang={lang}
          projectArray={projectArray}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    );
  };

  return (
    <div className={styles.navbar_container} id='navbar'>
      <div
        className={
          " max-w-7xl flex flex-row justify-between items-center w-full"
        }
      >
        <Link className={styles.navbar_header} href='/'>
          <p className={styles.company_name}>SEPOS OY</p>
        </Link>
        <div className={" -mr-5"}>{getNav()}</div>
      </div>
    </div>
  );
}
