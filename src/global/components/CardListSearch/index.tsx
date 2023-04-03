import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import CardComponent from "@/global/components/CardComponent";
import { DataProps, HomeProps } from "@/global/@types/type";
import { useRouter } from "next/router";
import * as S from "./styles";
import PaginationComponent from "../Pagination";
import { API } from "@/global/config/api";
import { Loading } from "../Loading";

export default function CardListSearchComponent(props: HomeProps) {
  const { sort, icon, title, limit, text } = props;
  const [data, setData] = useState<DataProps>();
  const [offset, setOffset] = useState(0);
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const notImge = 'https://media.kitsu.io/anime/poster_images/11501/original.jpg'

  useEffect(() => {
    setLoading(true);
    API.get(`/anime?filter[text]=${text}&page[limit]=${limit}&page[offset]=${offset}`)
      .then((response) => {
        setData(response.data.data);
        setInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  }, [sort, text, offset]);

  return (
    <M.Grid sx={{ marginLeft: "10rem" }}>
       {loading ? (
        <Loading />
      ) : (
        <>
      <M.Grid
        sx={{ display: "flex", alignItems: "center", margin: "15px 0 0 12px" }}
      >
        {icon}
        <M.Typography
          sx={{
            color: "#F46D1B",
            fontSize: "22px",
            fontWeight: "700",
            paddingLeft: "10px",
          }}
        >
          {title}
        </M.Typography>      
      </M.Grid>
      {data && text && (
        <S.Test>
          {data &&
            Object.values(data).map((item, index) => {
              return (
                <div key={index}>
                  <CardComponent
                    action={() => push(`/Anime?id=${item.id}`)}
                    image={item?.attributes?.posterImage?.original ?? notImge}
                  />
                </div>
              );
            })}
        </S.Test>
      )}
      <PaginationComponent
        total={info?.meta?.count}
        offset={offset}
        setOffset={setOffset}
      />
      </>
      )}
    </M.Grid>
  );
}
