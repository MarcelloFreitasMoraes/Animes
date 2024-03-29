import React, { Fragment } from 'react'
import * as S from './styles'
import * as M from '@mui/material'
import Image from 'next/image'
import Logo from '@/global/assets/img/logo.png'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
import SearchInput from '../SearchInput'

export default function Header({
    sidebar,
    setSidebar,
    headerHome,
    headerAnime,
    headerCategory,
}: any) {
    const { push } = useRouter()
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>
            <Fragment>
                {headerHome && (
                    <S.Container>
                        <S.Svg>
                            <FaBars onClick={showSidebar} />
                        </S.Svg>
                        <M.Grid>
                            <S.Img onClick={() => push(`/`)}>
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    width={192}
                                    height={118}
                                />
                            </S.Img>
                            <M.Grid
                                sx={{
                                    position: 'absolute',
                                    top: '5%',
                                    left: '78%',
                                }}
                            >
                                <SearchInput />
                            </M.Grid>
                        </M.Grid>
                        <M.Grid
                            container
                            sx={{
                                color: '#FFF',
                                position: 'absolute',
                                top: '24%',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                left: '4px',
                            }}
                        >
                            <M.Typography
                                variant="h2"
                                sx={{ color: '#FFF', fontWeight: '700' }}
                            >
                                O <S.ColorOrange>Maior</S.ColorOrange> Catálogo
                                de
                            </M.Typography>
                            <M.Typography
                                variant="h2"
                                sx={{ color: '#FFF', fontWeight: '700' }}
                            >
                                <S.ColorGrenn>Anime</S.ColorGrenn> do Mundo
                            </M.Typography>
                        </M.Grid>
                    </S.Container>
                )}
            </Fragment>
            <>
                {headerAnime && (
                    <S.ContainerTwo>
                        <S.SvgTwo>
                            <FaBars onClick={showSidebar} />
                        </S.SvgTwo>
                        <M.Grid>
                            <S.ImgTwo onClick={() => push(`/`)}>
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    width={121}
                                    height={75}
                                />
                            </S.ImgTwo>
                            <M.Grid
                                sx={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '78%',
                                }}
                            >
                                <SearchInput />
                            </M.Grid>
                        </M.Grid>
                    </S.ContainerTwo>
                )}
            </>
            <>
                {headerCategory && (
                    <S.ContainerThree>
                        <S.SvgThree>
                            <FaBars onClick={showSidebar} />
                        </S.SvgThree>
                        <M.Grid>
                            <S.ImgTwo onClick={() => push(`/`)}>
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    width={121}
                                    height={75}
                                />
                            </S.ImgTwo>
                            <M.Grid
                                sx={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '78%',
                                }}
                            >
                                <SearchInput />
                            </M.Grid>
                        </M.Grid>
                    </S.ContainerThree>
                )}
            </>
        </div>
    )
}
