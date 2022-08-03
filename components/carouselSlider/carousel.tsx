import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import images from './images';
import style from './carousel.module.scss';
function Carousel() {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div className={style.container}>
            <motion.div ref={carousel} className={style.carouselContainer} whileTap={{ cursor: "grabbing" }}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: - width }} className={style.carouselWrapper}>
                    {images.map((image, index) => {
                        return (
                            <motion.div className={style.imageContainer} key={index}>
                                <Image width="250px" height="250px" layout='responsive' priority={true} draggable={false} src={image} alt="slide image services" className={style.imageStyle} />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Carousel;