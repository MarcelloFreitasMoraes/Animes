import React, { useEffect, useRef, useState } from 'react'
import * as M from '@mui/material'
import * as S from './styles'
import { useRouter } from 'next/router'
import { FaFilm } from 'react-icons/fa'
import Header from '@/global/components/Header'
import Sidebar from '../Anime/components/SideBar'
import CardListSearchComponent from '@/global/components/CardListSearch'

export default function SearchAnimes() {
    const [sidebar, setSidebar] = useState(false)

    const router = useRouter()
    const ref = useRef(null)
    const { text } = router.query

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
                        {text && (
                            <CardListSearchComponent
                                text={text}
                                limit={20}
                                icon={<FaFilm size={22} />}
                                title={text}
                            />
                        )}
                    </M.Box>
                </S.BoxText>
            </M.Grid>
        </S.Container>
    )
}
