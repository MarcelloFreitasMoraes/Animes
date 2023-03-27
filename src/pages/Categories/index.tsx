import React, { useEffect, useRef, useState } from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import { useRouter } from "next/router";
import Sidebar from "../Anime/components/SideBar";
import { FaFilm } from "react-icons/fa";
import qs from "qs";
import CardListComponent from "@/global/components/CardListComponent";
import PaginationComponent from "@/global/components/Pagination";
import Header from "./components/Header";
import CardComponent from "@/global/components/CardComponent";

export default function Categories() {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState<any>();
  const [offset, setOffset] = useState(0);
  const [info, setInfo] = useState<any>({});
  const [text, setText] = useState("");
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

let api = "https://kitsu.io/api/edge/";

useEffect(() => {
  const fetchData = async () => {
    try {
      setInfo({});
      setData({})
      const query = {
        page: {
          limit: LIMIT,
          offset,          
        },
        filter: {           
          text           
      }
      };
      // if (text) {
      //   query.filter = {
      //     text,
      //   };
      // }
      const response = await fetch(`${api}anime?${qs.stringify(query)}`);
      const  data  = await response.json();
      setInfo(data);
      setData(data);
    } 
    catch (error) {
      console.log(error.toJSON());
    }
  };

  fetchData();
}, [text, offset]);

console.log("data>>>>>>>>>>>>>>>>>>>>>>>",data);

  return (
    <S.Container>
      <S.SideBarTop ref={ref} onClick={closeSidebar}>
        {sidebar && <Sidebar active={setSidebar} data={data} />}
      </S.SideBarTop>
      <Header
        sidebar={sidebar}
        setSidebar={setSidebar}
        // text={text}
        // setText={setText}
      />
      <M.Grid>
        <S.BoxText>
          {/* {data  ? ( */}
            {/* <> */}
              {category && (
                <M.Box>
                  <CardListComponent
                    categoryes={category}
                    limit={20}
                    icon={<FaFilm size={22} />}
                    title={category}
                    // text={text}                    
                  />
                </M.Box>
              )}
            {/* </>
            ) : (
            <> */}
              {/* {text && ( */}
                {/* <>
                  {info.data && (
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
                          {info?.data[0]?.attributes?.abbreviatedTitles[0]}
                        </M.Typography>
                      </M.Grid> */}
                      {/* <S.Test>
                        {info?.data?.map(
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
                      </S.Test> */}
                    {/* </M.Grid> */}
                  {/* )} */}
                {/* </> */}
               {/* )} */}
            {/* </> */}
          {/* )} */}
        </S.BoxText>
        {/* {text &&  */}
        {/* <S.Main>
          {info?.data && (
          <PaginationComponent
            total={info?.data?.meta?.count}
            offset={offset}
            setOffset={setOffset}
          />
           )} 
        </S.Main> */}
        {/* } */}
      </M.Grid>
    </S.Container>
  );
}
