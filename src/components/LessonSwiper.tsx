import React from 'react'
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

interface Props {
    swiperRef: React.RefObject<SwiperRef>;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    pathToImage: string;
    lengthOfImages: any[]
}

const LessonSwiper: React.FC<Props> = ({ swiperRef, setActiveIndex, pathToImage, lengthOfImages }) => {
    const currentLanguage = localStorage.getItem('i18nextLng') === 'tk-TM' ? 'en' : localStorage.getItem('i18nextLng')

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            ref={swiperRef}
            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
            // onSwiper={(swiper) => console.log(swiper)}
            className="h-full w-full"
        >
            {lengthOfImages.map((_, idx) => {
                return (
                    <SwiperSlide key={idx}><img className="w-full h-full object-cover border border-primary" src={`${pathToImage}/${currentLanguage}/${idx + 1}.png`} /></SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default LessonSwiper