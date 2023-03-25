import React, { useEffect, useRef, useState } from "react";
import * as M from "@mui/material";
import * as S from "./styles";
import { API } from "@/global/config/api";
import { useRouter } from "next/router";
import Sidebar from "../Anime/components/SideBar";
import { FaFilm } from "react-icons/fa";
import qs from "qs";
import CardListComponent from "@/global/components/CardListComponent";
import PaginationComponent from "@/global/components/Pagination";
import Header from "./components/Header";

export default function Teste() {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState<any>();
  const [offset, setOffset] = useState(0);
  const [categories, setCategories] = useState();
  const LIMIT = 20;
  const ref = useRef(null);

  const router = useRouter();
  const { category, specie } = router.query;

  const query = {
    page: {
      limit: LIMIT,
      offset,
    },
  };

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
    API.get(`/anime?${category}&${qs.stringify(query)}`)
      .then((response) => {
        setData(response?.data);
        console.log(response, "ress categoria");
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [offset]);

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
        {sidebar && <Sidebar active={setSidebar} data={data} />}
      </S.SideBarTop>
      <Header sidebar={sidebar} setSidebar={setSidebar} text={text} setText={setText} Filtrando={Filtrando} />
      <M.Grid>
        <S.BoxText>
          {category && (
            <M.Box>
              <CardListComponent
                categoryes={category}
                limit={20}
                icon={<FaFilm size={22} />}
                title={category}
              />
            </M.Box>
          )}
          <>
          {specie && (
            <M.Box>
              <CardListComponent
                categoryes={specie}
                limit={20}
                icon={<FaFilm size={22} />}
                title={specie}
              />
            </M.Box>
          )}
          </>
        </S.BoxText>
        <S.Main>
        {data && (
                <PaginationComponent
                    limit={LIMIT}
                    total={data?.meta?.count}
                    offset={offset}
                    setOffset={setOffset}
                />
            )}
        </S.Main>
      </M.Grid>
    </S.Container>
  );
}
