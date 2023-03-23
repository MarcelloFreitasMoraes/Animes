import React from 'react'
import Link from 'next/link'
import * as M from "@mui/material";
import * as S from './styles'
import { FaList, FaTimes  } from "react-icons/fa"

const Sidebar = ({ active }:any) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <S.Container>
            <FaTimes  onClick={closeSidebar} />          
            <S.DisplayFlex>           
                <S.Content>
                <S.Categorias>
            <FaList/>
            <M.Typography variant="h2" sx={{ color: "#FFF", fontWeight: "700", fontSize:'20px' }}>
                CATEGORIAS
                </M.Typography>
            </S.Categorias>
                    <Link href={'/'}>
                        <S.SidebarItem >
                            <S.Icon src=''  />
                            teste
                        </S.SidebarItem>
                    </Link>                   
                </S.Content>                
            </S.DisplayFlex>
        </S.Container>
    )
}

export default Sidebar