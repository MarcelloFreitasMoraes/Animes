import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

export default function Slider() {
    return (
        <S.Container>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src={banner1}
                        width={1267}
                        height={302}
                        alt={'banner'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={banner2}
                        width={1267}
                        height={302}
                        alt={'banner'}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={banner3}
                        width={1267}
                        height={302}
                        alt={'banner'}
                    />
                </SwiperSlide>
            </Swiper>
        </S.Container>
    )
}
