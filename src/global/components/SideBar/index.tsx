import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import { FaBars } from "react-icons/fa"

const Sidebar = ({ active }:any) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <S.Container>
            <FaBars onClick={closeSidebar} />
            <S.DisplayFlex>
                <S.Content>
                    <Link href={'/'}>
                        <S.SidebarItem >
                            <S.Icon src=''  />
                            teste
                        </S.SidebarItem>
                    </Link>
                    <S.SidebarItem>
                        <S.Icon src=''/>
                        teste
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.Icon src='' />
                        teste
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.Icon src='' />
                        teste
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.Icon src='' />
                        teste
                    </S.SidebarItem>
                    <S.SidebarItem>
                        <S.Icon src='' />
                        teste
                    </S.SidebarItem>
                </S.Content>
                {/* <S.DivRouter>
                    <Link href={"https://github.com/MarcelloFreitasMoraes"} target="_blank" >
                        <S.RouterGitHub src='/images/github.png' alt="developer's github" />
                    </Link>
                </S.DivRouter> */}
            </S.DisplayFlex>
        </S.Container>
    )
}

export default Sidebar