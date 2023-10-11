import { AnimatePresence, motion } from 'framer-motion'

export const animateTextChange = (className, english, eng, fin) => {
    if (english) {
        return (
                <AnimatePresence mode='wait'>
                    <motion.p
                    className={className}
                    key="red"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}
                    >{eng}</motion.p>
                </AnimatePresence>
        )

    } else {
        return (
            <AnimatePresence mode='wait'>
                <motion.p
                    className={className}
                    key="blue"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}>{fin}</motion.p>
            </AnimatePresence>
        )
    }

}