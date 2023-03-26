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
import CardComponent from "@/global/components/Card";

export default function Teste() {
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState<any>();
  const [offset, setOffset] = useState(0);
  const [info, setInfo] = useState<any>({});
  const [text, setText] = useState("");
  const [categories, setCategories] = useState();
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

  const api = "https://kitsu.io/api/edge/";

   useEffect(() => {
    setInfo({});

    const query = {
      page: {
        limit: LIMIT,
        offset,
      },
      filter: {
        text,
      }
    };

    if (text) {
      query.filter = {
        text,
      };
    }

    fetch(`${api}anime?${qs.stringify(query)}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
        setData(response?.data);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [text, offset]);

  return (
    <S.Container>
      <S.SideBarTop ref={ref} onClick={closeSidebar}>
        {sidebar && <Sidebar active={setSidebar} data={data} />}
      </S.SideBarTop>
      <Header
        sidebar={sidebar}
        setSidebar={setSidebar}
        text={text}
        setText={setText}
      />
      <M.Grid>
        <S.BoxText>
          {data && !text ? (
            <>
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
            </>
          ) : (
            <>
              {text && (
                <>
                  {info.data && (
                    <M.Grid sx={{ marginLeft: "70px" }}>
                      <S.Test>
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
                      </S.Test>
                    </M.Grid>
                  )}
                </>
              )}
            </>
          )}
        </S.BoxText>
        <S.Main>
          {/* {data && info?.data && ( */}
          <PaginationComponent
            limit={LIMIT}
            total={data?.meta?.count}
            offset={offset}
            setOffset={setOffset}
          />
          {/* )} */}
        </S.Main>
      </M.Grid>
    </S.Container>
  );
}
