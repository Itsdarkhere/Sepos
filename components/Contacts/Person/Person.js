import { motion } from 'framer-motion';
import mail from '../../../public/mail.svg'
import phoneIcon from '../../../public/phone.svg'
import Image from 'next/image';

export default function Person({ cl, firstname, lastname, phone, email, dude }) {
    return (
        <motion.div className={`${cl} flex w-full flex-row gap-4 justify-between bg-neutral-900 rounded-md py-6 px-6`}>
            <div className=' flex flex-col h-full items-start justify-start gap-4 '>
                <div className={" text-lg font-bold"}>
                    <p className={" text-white"}>{firstname} <span className=' text-orange-400'>{lastname}</span></p>
                </div>
                <div className={"flex flex-col justify-start gap-1 text-xs text-neutral-400 font-normal"}>
                    { phone && (
                        <div className='flex flex-row gap-2'>
                            <Image height={14} src={phoneIcon} alt='phone' />
                            <a href={'tel:' +  phone} className={""}>{phone}</a>
                        </div>
                    )}
                    <div className='flex flex-row gap-2'>
                            <Image height={14} src={mail} alt='email' />
                            <a href={'mailto:' + email} className={""}>{email}</a>
                        </div>
                </div>
            </div>
            <Image height={100} src={dude} alt='' />
        </motion.div>
    );
}