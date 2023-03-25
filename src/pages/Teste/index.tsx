import React, { useEffect, useRef, useState } from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import { API } from "@/global/config/api";
import router, { useRouter } from "next/router";
import Sidebar from "../Anime/components/SideBar";
import { FaFilm } from "react-icons/fa";
import qs from "qs";
import CardListComponent from "@/global/components/CardListComponent";
import PaginationComponent from "@/global/components/Pagination";
import Header from "../Categories/components/Header";
import SearchInput from "@/global/components/SearchInput";
import InputComponent from "@/global/components/Search";

export default function Categories() {
  const [sidebar, setSidebar] = useState(false);
 
  const ref = useRef(null);
  // const { especifico } = router.query;
  

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


  const [info, setInfo] = useState<any>({});
  const [text, setText] = useState('');
const api = 'https://kitsu.io/api/edge/';

  useEffect(() => {
    Filtrando()
  }, [text]);

  const Filtrando = () => {
    if (text) {
      setInfo({});

      fetch(
        `${api}anime?filter[text]=${text}&page[limit]=20`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }

  }
  

  return (
    <S.Container>
      <S.SideBarTop ref={ref} onClick={closeSidebar}>
        {sidebar && <Sidebar active={setSidebar} 
        // data={data} 
        />}
      </S.SideBarTop>
      <Header sidebar={sidebar} setSidebar={setSidebar} text={text} setText={setText} Filtrando={Filtrando} />
      <M.Container>
      <h1>Animes</h1>
      {/* <InputComponent
      value={text}
      onchange={(search) => setText(search)}
      /> */}
      {/* <SearchInput
        value={text}
        onChange={(search: React.SetStateAction<string>) => setText(search)}
      /> */}
      {text && !info.data && <span>Carregando...</span>}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime: any) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </M.Container>
    </S.Container>
  );
}
