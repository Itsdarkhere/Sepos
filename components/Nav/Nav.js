'use client'
import styles from './Nav.module.css'
import Link from 'next/link'
import { ProjectArray } from '@/utils/Array'
import { useState } from 'react'

export default function Nav({ lang }) {
    const projectArray = ProjectArray()
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const getNav = () => {
    return (
      <div className="drawer flex justify-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" onChange={toggleDrawer} />
        <label htmlFor="my-drawer" className="btn btn-ghost text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={`inline-block w-6 h-6 stroke-current transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}>
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </label>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu px-6 py-8 w-80 min-h-full bg-neutral-900 text-base-content">
            <li>
              <Link href="/#projects" className="text-gray-200 font-semibold text-lg rounded-none border-b border-yellow-600 hover:bg-yellow-600 hover:text-zinc-800 transition duration-300">
                {lang === 'en' ? 'Real Estate Developments' : 'Kiinteistökehitys'}
              </Link>
            </li>
            <div className="pl-4 mt-2">
              {projectArray.map((project, index) => (
                <li key={index}>
                  <Link href={project.projectPage} className="text-gray-300 rounded-none leading-8 hover:bg-yellow-600 hover:text-zinc-800 transition duration-300">
                    {project.name}
                  </Link>
                </li>
              ))}
            </div>
            <li className="mt-4">
              <Link href="/#companies" className="text-gray-200 font-semibold text-lg rounded-none border-b border-yellow-600 hover:bg-yellow-600 hover:text-zinc-800 transition duration-300">
                {lang === 'en' ? 'Affiliated Companies' : 'Osakkuusyhtiöt'}
              </Link>
            </li>
            <li className="mt-4">
              <Link href="/#contact" className="text-gray-200 font-semibold text-lg rounded-none border-b border-yellow-600 hover:bg-yellow-600 hover:text-zinc-800 transition duration-300">
                {lang === 'en' ? 'Contact' : 'Yhteystiedot'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }

    return (
        <div className={styles.navbar_container} id="navbar">
            <div className={styles.nav_inner}>
                <Link className={styles.navbar_header} href="/">
                    <p className={styles.company_name}>SEPOS OY</p>
                </Link>
                <div className={styles.navbar_right}>
                    {getNav()}
                </div>
            </div>
        </div>
    )
}