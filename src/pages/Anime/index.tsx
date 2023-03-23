import React, { useEffect, useRef, useState } from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import { API } from "@/global/config/api";
import { useRouter } from "next/router";
import Header from "./components/Header";
import BannerDefault from "@/global/assets/img/default-banner.jpg";
import { Youtube } from "@/global/assets/Icons/youtube";
import { Heart } from "@/global/assets/Icons/Heart";
import { StarCat } from "@/global/assets/Icons/StarCat";
import FooterComponent from "@/global/components/Footer";
import Sidebar from "./components/SideBar";

export default function Anime() {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState<any>();
  const ref = useRef(null);

  const router = useRouter();
  const { id } = router.query;

  const closeSidebar = (event: any) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSidebar, true);
    return () => {
      document.removeEventListener("click", closeSidebar, true);
    };
  }, []);

  useEffect(() => {
    API.get(`/anime/${id}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [id]);

  return (
    <S.Container>
      <S.SideBarTop ref={ref} onClick={closeSidebar}>
        {sidebar && <Sidebar active={setSidebar} data={data} />}
      </S.SideBarTop>
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <S.Banner
        src={
          data?.attributes?.coverImage.small
            ? data?.attributes?.coverImage.small
            : BannerDefault
        }
        alt="Banner"
      />
      <M.Container sx={{display: 'flex'}}>
      <S.Main>
        <S.Capa src={data?.attributes?.posterImage?.small} alt="Capa" />
        <M.Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <S.ButtonTrailler variant="contained">
            <Youtube />
            VER TRAILER
          </S.ButtonTrailler>
        </M.Grid>
        <M.Typography
          sx={{ color: "#16A085", fontSize: "14px", fontWeight: "500" }}
        >
          Aprovado por {data?.attributes?.averageRating}% <br /> da Comunidade
        </M.Typography>
        <M.Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "20px 0",
          }}
        >
          <M.Typography
            sx={{ fontSize: "14px", fontWeight: "500", color: "#3D3D3D", marginRight: '49px' }}
          >
            {" "}
            <Heart /> # {data?.attributes?.popularityRank} Mais Popular
          </M.Typography>
          <M.Grid>
            <M.Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "#3D3D3D", marginTop: '10px' }}
            >
              <StarCat /> # {data?.attributes?.ratingRank} Melhor Classificado
            </M.Typography>
          </M.Grid>
        </M.Grid>
      </S.Main>
        <M.Grid sx={{display: "flex", flexDirection: 'column'}}>
            <M.Typography sx={{margin: '10px 0', textTransform: 'capitalize', fontSize: "14px", fontWeight: "400"}}>
            {data?.attributes?.slug}
            </M.Typography>
            <M.Typography sx={{fontSize: "14px", fontWeight: "400"}}>
            {data?.attributes?.description}
            </M.Typography>
        </M.Grid>
        </M.Container>
      {/* <FooterComponent/> */}
    </S.Container>
  );
}
