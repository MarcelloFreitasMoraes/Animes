import React, { useEffect, useRef, useState } from 'react'
import * as M from '@mui/material'
import * as S from './styles'
import { API } from '@/global/config/api'
import { useRouter } from 'next/router'
import BannerDefault from '@/global/assets/img/default-banner.jpg'
import { Youtube } from '@/global/assets/Icons/youtube'
import { Heart } from '@/global/assets/Icons/Heart'
import { StarCat } from '@/global/assets/Icons/StarCat'
import FooterComponent from '@/global/components/Footer'
import Sidebar from './components/SideBar'
import Header from '@/global/components/Header'
import { Loading } from '@/global/components/Loading'

export default function Anime() {
    const [sidebar, setSidebar] = useState(false)
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState(false)
    const ref = useRef(null)

    const router = useRouter()
    const { id } = router.query
    const BannerNot =
        'https://www.mub.eps.manchester.ac.uk/thebeam/wp-content/themes/uom-theme/assets/images/default-banner.jpg'
    const notImge =
        'https://media.kitsu.io/anime/poster_images/11501/original.jpg'
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

    useEffect(() => {
        setLoading(true)
        API.get(`/anime/${id}`)
            .then((response) => {
                setData(response.data.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error.toJSON())
            })
    }, [id])

    return (
        <S.Container>
            <S.SideBarTop ref={ref} onClick={closeSidebar}>
                {sidebar && <Sidebar active={setSidebar} data={data} />}
            </S.SideBarTop>
            <Header
                sidebar={sidebar}
                setSidebar={setSidebar}
                info={data}
                headerAnime
            />
            <S.Banner
                src={
                    data?.attributes?.coverImage?.small
                        ? data?.attributes?.coverImage?.small
                        : BannerNot
                }
                alt="Banner"
            />
            <M.Container sx={{ display: 'flex' }}>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <S.Main>
                            <S.Capa
                                src={
                                    data?.attributes?.posterImage?.small ??
                                    notImge
                                }
                                alt="Capa"
                            />
                            <M.Grid
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    margin: '20px 0',
                                }}
                            >
                                <S.ButtonTrailler variant="contained">
                                    <Youtube />
                                    VER TRAILER
                                </S.ButtonTrailler>
                            </M.Grid>
                            <M.Typography
                                sx={{
                                    color: '#16A085',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                }}
                            >
                                Aprovado por{' '}
                                {data?.attributes?.averageRating ?? '0'}% <br />{' '}
                                da Comunidade
                            </M.Typography>
                            <M.Grid
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    margin: '20px 0',
                                }}
                            >
                                <M.Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        color: '#3D3D3D',
                                        marginRight: '49px',
                                    }}
                                >
                                    {' '}
                                    <Heart /> #{' '}
                                    {data?.attributes?.popularityRank ??
                                        '0'}{' '}
                                    Mais Popular
                                </M.Typography>
                                <M.Grid>
                                    <M.Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            color: '#3D3D3D',
                                            marginTop: '10px',
                                        }}
                                    >
                                        <StarCat /> #{' '}
                                        {data?.attributes?.ratingRank ?? '0'}{' '}
                                        Melhor Classificado
                                    </M.Typography>
                                </M.Grid>
                            </M.Grid>
                        </S.Main>
                        <M.Grid
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <M.Typography
                                sx={{
                                    margin: '10px 0',
                                    textTransform: 'capitalize',
                                    fontSize: '26px',
                                    fontWeight: '700',
                                }}
                            >
                                {data?.attributes?.slug ?? 'Desconhecido'}
                            </M.Typography>
                            <M.Typography
                                sx={{ fontSize: '14px', fontWeight: '400' }}
                            >
                                {data?.attributes?.description ?? 'Sem dados'}
                            </M.Typography>
                        </M.Grid>
                    </>
                )}
            </M.Container>
            <M.Grid sx={{ marginTop: '18.5rem' }}>
                <FooterComponent />
            </M.Grid>
        </S.Container>
    )
}
