import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as M from "@mui/material";
import * as S from "./styles";
import { FaList, FaTimes } from "react-icons/fa";
import { SideProps } from "./types";
import { getCategorias } from "@/services/AnimeService";
import { useRouter } from "next/router";

const Sidebar = ({ active }: SideProps) => {
  const [data, setData] = useState<any>();
  const { push } = useRouter()
  const closeSidebar = () => {
    active(false);
  };

  useEffect(() => {
    getCategorias().then((response: any) => {
        setData(response?.data?.data);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, []);

  return (
    <S.Container>
      <FaTimes onClick={closeSidebar} />
      <S.DisplayFlex>
        <S.Content>
          <S.Categorias>
            <FaList />
            <M.Typography
              variant="h2"
              sx={{ color: "#FFF", fontWeight: "700", fontSize: "20px" }}
            >
              CATEGORIAS
            </M.Typography>
          </S.Categorias>
          <Link href={"/"}>
            {data &&
              Object.values(data).map((item: any, index) => {
                return (
                  
                  <S.SidebarItem 
                  key={index}
                  onClick={() => push(`/Categories?category=${item?.attributes?.slug}`)}
                  >
                    {item?.attributes?.slug}
                  </S.SidebarItem>
                  
                );
              })}
          </Link>
        </S.Content>
      </S.DisplayFlex>
    </S.Container>
  );
};

export default Sidebar;
