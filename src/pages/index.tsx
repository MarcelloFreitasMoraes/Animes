import React, { useEffect, useRef, useState } from 'react'
import * as M from '@mui/material'
import * as S from '../styles/styles'
import Header from '@/global/components/Header'
import Slider from '@/global/components/Slider'
import { Star } from '@/global/assets/Icons/Star'
import { Like } from '@/global/assets/Icons/Like'
import FooterComponent from '@/global/components/Footer'
import Sidebar from '@/global/components/SideBar'
import CardListHomeComponent from '@/global/components/CardListHome'

export default function Home() {
    const [sidebar, setSidebar] = useState(false)
    const ref = useRef(null)

    const closeSidebar = (event: any) => {
        //@ts-ignore
        if (ref.current && !ref.current.contains(event.target)) {
            setSidebar(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', closeSidebar, true)
        return () => {
            document.removeEventListener('click', closeSidebar, true)
        }
    }, [])

    return (
        <S.Container>
            <S.Back />
            <S.SideBarTop ref={ref} onClick={closeSidebar}>
                {sidebar && <Sidebar active={setSidebar} />}
            </S.SideBarTop>
            <Header sidebar={sidebar} setSidebar={setSidebar} headerHome />
            <M.Grid sx={{ marginLeft: '2rem' }}>
                <S.ContantSlider>
                    <CardListHomeComponent sort="user_count" icon={<Star />} />
                </S.ContantSlider>
                <M.Box sx={{ margin: '50px auto', width: '80%' }}>
                    <Slider />
                </M.Box>
                <S.ContainerSlider>
                    <CardListHomeComponent
                        sort="average_rating"
                        icon={<Like />}
                    />
                </S.ContainerSlider>
            </M.Grid>
            <S.ContainerFooter>
                <FooterComponent />
            </S.ContainerFooter>
        </S.Container>
    )
}
