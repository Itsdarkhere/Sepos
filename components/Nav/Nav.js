"use client";
import Image from "next/image";
import arr from '../../public/arr.svg'
import building from '../../public/building.svg'
import contact from '../../public/contact.svg'
import group from '../../public/group.svg'
import styles from "./Nav.module.css";
import Link from "next/link";
import { ProjectArray } from "@/utils/Array";
import { useState } from "react";

export default function Nav({ lang }) {
  const projectArray = ProjectArray();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const getNav = () => {
    return (
      <div className='drawer flex justify-end'>
        <input
          id='my-drawer'
          type='checkbox'
          className='drawer-toggle'
          onChange={toggleDrawer}
        />
        <label htmlFor='my-drawer' className='btn btn-ghost text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className={`inline-block w-6 h-6 stroke-current transition-transform duration-300 ${
              isOpen ? "transform rotate-90" : ""
            }`}
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            )}
          </svg>
        </label>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu px-4 rounded-r-xl py-12 w-80 min-h-full bg-neutral-900 text-base-content'>
            <li>
              <Link
                href='/#projects'
                className='text-neutral-300 hover:bg-neutral-700 focus-within:bg-neutral-700 focus-within:text-neutral-400  py-3 font-normal text-base rounded-md transition duration-300'
              >
                <Image height={18} src={building} alt="building" />
                {lang === "en"
                  ? "Real Estate Developments"
                  : "Kiinteistökehitys"}
              </Link>
            </li>
            <div className=' pl-3 flex flex-col gap-1 border-b border-neutral-400 mb-2 pb-2'>
              {projectArray.map((project, index) => (
                <li key={index}>
                  <Link
                    href={project.projectPage}
                    className='text-neutral-400 py-1 text-sm rounded-md hover:bg-neutral-700 focus-within:bg-neutral-700 focus-within:text-neutral-400 leading-8 transition duration-300'
                  >
                    <Image height={12} src={arr} alt="building" />
                    {project.name}
                  </Link>
                </li>
              ))}
            </div>
            <li className=''>
              <Link
                href='/#companies'
                className='text-neutral-300 py-3 hover:bg-neutral-700 focus-within:bg-neutral-700 focus-within:text-neutral-400  font-normal text-base rounded-md transition duration-300'
              >
                <Image height={18} src={group} alt="building" />
                {lang === "en" ? "Affiliated Companies" : "Osakkuusyhtiöt"}
              </Link>
            </li>
            <li className=''>
              <Link
                href='/#contact'
                className='text-neutral-300 py-3 hover:bg-neutral-700 focus-within:bg-neutral-700 focus-within:text-neutral-400  font-normal text-base rounded-md transition duration-300'
              >
                <Image height={18} src={contact} alt="building" />
                {lang === "en" ? "Contact" : "Yhteystiedot"}
              </Link>
            </li>
            <div className=" absolute left-0 bottom-0 py-4 px-8 right-0 rounded-br-xl flex justify-start items-center">
              <h3 className={styles.sidenav_logo}>SEPOS OY</h3>
            </div>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.navbar_container} id='navbar'>
      <div className={" max-w-7xl flex flex-row justify-between items-center w-full"}>
        <Link className={styles.navbar_header} href='/'>
          <p className={styles.company_name}>SEPOS OY</p>
        </Link>
        <div className={styles.navbar_right}>{getNav()}</div>
      </div>
    </div>
  );
}
