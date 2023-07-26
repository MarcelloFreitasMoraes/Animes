import React, { useEffect, useRef, useState } from 'react'
import * as M from '@mui/material'
import * as S from './styles'
import { useRouter } from 'next/router'
import Sidebar from '../Anime/components/SideBar'
import { FaFilm } from 'react-icons/fa'
import CardListComponent from '@/global/components/CardListComponent'
import Header from '@/global/components/Header'

export default function Categories() {
    const [sidebar, setSidebar] = useState(false)
    const ref = useRef(null)
    const router = useRouter()
    const { category } = router.query

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
            <S.SideBarTop ref={ref} onClick={closeSidebar}>
                {sidebar && <Sidebar active={setSidebar} />}
            </S.SideBarTop>
            <Header sidebar={sidebar} setSidebar={setSidebar} headerCategory />
            <M.Grid>
                <S.BoxText>
                    <M.Box>
                        <CardListComponent
                            categoryes={category}
                            limit={20}
                            icon={<FaFilm size={22} />}
                            title={category}
                        />
                    </M.Box>
                </S.BoxText>
            </M.Grid>
        </S.Container>
    )
}
