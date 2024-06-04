import styles from "./Person.module.css";
import Image from "next/image";
import klemmari from "../../../public/klemm.svg";
import contact from "../../../public/cont.svg";
import mail from "../../../public/email.svg";
import { motion } from "framer-motion";

export default function Person({ name, phone, email }) {
  return (
    <motion.div className=' rounded-md border border-neutral-700 px-4 py-6 shadow-lg'>
      <div className='flex flex-row justify-between mb-4 text-2xl'>
        <p className=' text-white'>{name}</p>
        <Image src={klemmari} alt='logo' />
      </div>
      <div className=' flex flex-col gap-2 text-xs text-neutral-400'>
        {phone && (
          <div className='flex flex-row gap-2'>
            <Image src={contact} alt='contact' />
            <a href={"tel:" + phone} className=''>
              {phone}
            </a>
          </div>
        )}
        <div className='flex flex-row gap-2'>
          <Image src={mail} alt='mail' />
          <a href={"mailto:" + email} className=''>
            {email}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
