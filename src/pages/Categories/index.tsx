import React, { useEffect, useRef, useState } from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import { useRouter } from "next/router";
import Sidebar from "../Anime/components/SideBar";
import { FaFilm } from "react-icons/fa";
import CardListComponent from "@/global/components/CardListComponent";
import PaginationComponent from "@/global/components/Pagination";
import CardComponent from "@/global/components/CardComponent";
import Header from "@/global/components/Header";
import { API } from "@/global/config/api";
import qs from "qs";

export default function Categories() {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState<any>();
  const [offset, setOffset] = useState(0);
  const [info, setInfo] = useState<any>({});
  const [text, setText] = useState();
  const [arrayAnime, setArrayAnime] = useState();
  const LIMIT = 20;
  const ref = useRef(null);
  const { push } = useRouter();
  const router = useRouter();
  const { category } = router.query;

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
    if (typeof window !== "undefined") {
      const item: any = localStorage.getItem("title");
      if (item) {
        setText(localStorage.getItem("title"));
      }

      const arrayAnime: any = JSON.parse(localStorage.getItem("resource"));
      setArrayAnime(arrayAnime);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = {
          page: {
            limit: LIMIT,
            offset,          
          },
          filter: {           
            text           
        }
        };
         if (text) {
          query.filter = {
             text,
           };
         }
        const response = await API.get(`/anime?${qs.stringify(query)}`)
        setData(response.data);
        setInfo(response.data);        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [offset, text]);

  console.log("data>>>>>>>>>>>>>>>>>>>>>>>", text);
  console.log("data>>>>>>>>>>>>>>>>>>>>>>>", arrayAnime);

  return (
    <S.Container>
      <S.SideBarTop ref={ref} onClick={closeSidebar}>
        {sidebar && <Sidebar active={setSidebar} data={data} />}
      </S.SideBarTop>
      <Header sidebar={sidebar} setSidebar={setSidebar} headerCategory />
      <M.Grid>
        <S.BoxText>
          {category ? (
            <>
              {category && data && (
                <M.Box>
                  <CardListComponent
                    categoryes={category ?? text}
                    limit={20}
                    icon={<FaFilm size={22} />}
                    title={category ?? text}
                    arrayAnime={arrayAnime}

                  />
                </M.Box>
              )}
            </>
            ) : ( 
            <>
            {arrayAnime && text && (
                <M.Grid sx={{ marginLeft: "70px" }}>
                 <M.Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      margin: "15px 0 0 12px",
                    }}
                  >
                    <FaFilm size={22} />
                    <M.Typography
                      sx={{
                        color: "#F46D1B",
                        fontSize: "22px",
                        fontWeight: "700",
                        paddingLeft: "10px",
                      }}
                    >
                      {text}
                    </M.Typography>
                  </M.Grid> 
                 {arrayAnime?.data && (
                    <>
                       <S.Test>
                        {arrayAnime?.data?.map(
                          (
                            item: {
                              id: any;
                              attributes: { posterImage: { original: string } };
                            },
                            index: React.Key | null | undefined
                          ) => {
                            return (
                              <div key={index}>
                                <CardComponent
                                  action={() => push(`/Anime?id=${item.id}`)}
                                  image={
                                    item?.attributes?.posterImage?.original
                                  }
                                />
                              </div>
                            );
                          }
                        )}
                      </S.Test> 
                      <S.Main>
                        <PaginationComponent
                          total={info?.meta?.count}
                          offset={offset}
                          setOffset={setOffset}
                        />
                      </S.Main> 
                    </>
                  )} 
                </M.Grid>
               )} 
            </>
         )} 
        </S.BoxText>
      </M.Grid>
    </S.Container>
  );
}
