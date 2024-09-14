import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import arr from "../../public/arr.svg";
import building from "../../public/building.svg";
import contact from "../../public/contact.svg";
import group from "../../public/group.svg";

const NavDialog = ({ lang, projectArray, isOpen, setIsOpen }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-neutral-900 shadow-xl rounded-2xl">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-neutral-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="">
                <ul className="">
                  <li>
                    <Link
                      href="/#projects"
                      className="flex items-center space-x-2 text-neutral-300 hover:bg-neutral-700 p-2 rounded-md transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image height={18} width={18} src={building} alt="building" />
                      <span>{lang === "en" ? "Real Estate Developments" : "Kiinteistökehitys"}</span>
                    </Link>
                  </li>
                  <div className="pl-6 space-y-1 border-b border-neutral-700 mb-4 pb-2">
                    {projectArray.map((project, index) => (
                      <li key={index}>
                        <Link
                          href={project.projectPage}
                          className="flex items-center space-x-2 text-sm text-neutral-400 hover:bg-neutral-700 p-1 rounded-md transition duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <Image height={12} width={12} src={arr} alt="arrow" />
                          <span>{project.name}</span>
                        </Link>
                      </li>
                    ))}
                  </div>
                  <li className=' mb-2'>
                    <Link
                      href="/#companies"
                      className="flex items-center space-x-2 text-neutral-300 hover:bg-neutral-700 p-2 rounded-md transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image height={18} width={18} src={group} alt="group" />
                      <span>{lang === "en" ? "Affiliated Companies" : "Osakkuusyhtiöt"}</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="flex items-center space-x-2 text-neutral-300 hover:bg-neutral-700 p-2 rounded-md transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image height={18} width={18} src={contact} alt="contact" />
                      <span>{lang === "en" ? "Contact" : "Yhteystiedot"}</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NavDialog;