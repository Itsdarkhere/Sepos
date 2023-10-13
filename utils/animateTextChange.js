export const animateTextChange = (className, english, eng, fin) => {
    if (english) {
        return (
                    <p
                    className={className}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}>
                        {eng}
                    </p>
        )

    } else {
        return (
                <p
                className={className}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{ opacity: 0 }}>
                    {fin}
                </p>
        )
    }

}