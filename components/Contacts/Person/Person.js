import styles from './Person.module.css'
import { motion } from 'framer-motion';

export default function Person({ name, phone, email }) {
    return (
        <motion.div className={"flex w-full flex-col gap-4 bg-neutral-900 rounded-md py-6 px-4"}>
            <div className={" text-base font-bold"}>
                <p className={""}>{name}</p>
            </div>
            <div className={"flex flex-col justify-start gap-1 text-xs text-neutral-400 font-normal"}>
                { phone && <a href={'tel:' +  phone} className={""}>{phone}</a>}
                <a href={'mailto:' + email} className={""}>{email}</a>
            </div>
        </motion.div>
    );
}