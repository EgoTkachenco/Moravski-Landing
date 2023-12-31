'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/parallax'
import 'swiper/css/effect-coverflow'
import styles from './concerts.module.scss'
import { Link } from '@/common'
import routes from '@/utils/routes'

const ConcertsCarousel = ({ concerts = [] }) => {
  return (
    <Swiper
      loop={true}
      speed={800}
      spaceBetween={50}
      slidesPerView={2}
      centeredSlides={true}
      modules={[EffectCoverflow]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows: true, // Enables slides shadows
      }}
      grabCursor={true}
      parallax={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        1023: {
          slidesPerView: 2,
          spaceBetween: 0,
        },

        1: {
          slidesPerView: 1.5,
          spaceBetween: 0,
        },
      }}
      data-aos="fade-up"
    >
      {concerts.map((slide, i) => (
        <SwiperSlide key={i}>
          <Link href={routes.concerts + '/' + slide.slug}>
            <div className={styles.slide_image}>
              <img src={slide.image} alt={slide.title} />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ConcertsCarousel
