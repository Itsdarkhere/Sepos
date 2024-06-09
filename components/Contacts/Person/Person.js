import mail from '../../../public/mail.svg'
import phoneIcon from '../../../public/phone.svg'
import Image from 'next/image';

export default function Person({ cl, firstname, lastname, phone, email }) {
    return (
        <div className={`${cl} flex w-full flex-row gap-4 justify-between bg-neutral-900 rounded-md py-4 md:py-8 px-6`}>
            <div className=' flex w-full flex-col md:flex-row justify-between h-full items-start md:items-center gap-4 '>
                <div className={" text-lg font-bold"}>
                    <p className={" text-white"}>{firstname} <span className=' text-orange-400'>{lastname}</span></p>
                </div>
                <div className={"flex flex-col justify-start gap-1 text-sm text-neutral-400 font-normal"}>
                    { phone && (
                        <div className='flex flex-row gap-2'>
                            <Image className=' select-none' height={14} src={phoneIcon} alt='phone' />
                            <a href={'tel:' +  phone} className={""}>{phone}</a>
                        </div>
                    )}
                    <div className='flex flex-row gap-2'>
                            <Image className=' select-none' height={14} src={mail} alt='email' />
                            <a href={'mailto:' + email} className={""}>{email}</a>
                        </div>
                </div>
            </div>
        </div>
    );
}