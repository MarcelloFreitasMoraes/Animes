import React, { useEffect, useRef, useState } from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import { useRouter } from "next/router";
import Sidebar from "../Anime/components/SideBar";
import { FaFilm } from "react-icons/fa";
import qs from "qs";
import CardListComponent from "@/global/components/CardListComponent";
import PaginationComponent from "@/global/components/Pagination";
import CardComponent from "@/global/components/CardComponent";
import Header from "../Categories/components/Header";

export default function AmineSpecific() {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState<any>();
  const [offset, setOffset] = useState(0);
  const [info, setInfo] = useState<any>({});

  const LIMIT = 20;
  const ref = useRef(null);
  const { push } = useRouter();
  const router = useRouter();


  const anime = JSON.parse(localStorage.getItem("animeId"));
  const text  =  localStorage.getItem("title").toUpperCase();
  const sArray  =  JSON.parse(localStorage.getItem("resource"));    

  
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
//let baseUrl = `https://kitsu.io/api/edge/anime?filter[text]=${text.toLowerCase()}&page[limit]=${limit}&page[offset]=${offset}`
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
          text: text           
      }
      };
      if (text) {
        query.filter = {
          text,
        };
      }
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
}, [offset, api]);

console.log("data>>>>>>>>>>>>>>>>>>>>>>>",data);

  return (
    <S.Container>
      <S.SideBarTop ref={ref} onClick={closeSidebar}>
        {sidebar && <Sidebar active={setSidebar} data={data} />}
      </S.SideBarTop>
      <Header
        sidebar={sidebar}
        setSidebar={setSidebar}
       
      />
      <M.Grid>
        <S.BoxText>        
              {/* {text && ( */}
                <M.Box>
                  <CardListComponent
                    categoryes={text}
                    limit={20}
                    icon={<FaFilm size={22} />}
                    title={text}
                  />
                </M.Box>
              {/* )}                              */}
        </S.BoxText>       
      </M.Grid>
    </S.Container>
  );
}
