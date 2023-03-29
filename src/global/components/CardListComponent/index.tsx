import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import CardComponent from "@/global/components/CardComponent";
import axios from "axios";
import { DataProps, HomeProps } from "@/global/@types/type";
import { useRouter } from "next/router";
import * as S from "./styles";
import qs from "qs";
import PaginationComponent from "../Pagination";

export default function CardListComponent(props: HomeProps) {
  const { sort, icon, categoryes, title, text, limit, arrayAnime } = props;
const [data, setData] = useState<DataProps>();
const [offset, setOffset] = useState<number>(0);
const { push } = useRouter();
console.log(arrayAnime,'arrayAnime');

const createUrl = () => {
  const query = {
    page: {
      limit: limit ?? 5,
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
  let url = `https://kitsu.io/api/edge/anime?${qs.stringify(query)}`;

  if (sort === "user_count") {
    url += "&sort=-user_count";
  }

  if (sort === "average_rating") {
    url += "&sort=-average_rating";
  }

  if (categoryes && categoryes !== "All") {
    url += `&filter[categories]=${categoryes}`;
  }

  if (text) {
    url += `&filter[text]=${text}`;
  }
  return url;
};

useEffect(() => {
  const url = createUrl();
  axios
    .get(url)
    .then((response) => {
      setData(response.data.data);
    })
    .catch((error) => {
      console.log(error.toJSON());
    });
}, [sort, categoryes, text, offset]);

  return (
    <M.Grid sx={{ marginLeft: "70px" }}>
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
      {categoryes && data && (
      <S.Test>
        {data &&
          Object.values(data).map((item, index) => {
            return (
              <div key={index}>
                <CardComponent
                  action={() => push(`/Anime?id=${item.id}`)}
                  image={item?.attributes?.posterImage?.original}
                />
              </div>
            );
          })}
          <>
          <PaginationComponent
            total={data?.meta?.count}
            offset={offset}
            setOffset={setOffset}
            />
          </>
      </S.Test>
      )}
      <>
      {text && arrayAnime && (
      <S.Test>
        {arrayAnime &&
          Object.values(arrayAnime).map((item, index) => {
            return (
              <div key={index}>
                <CardComponent
                  action={() => push(`/Anime?id=${item.id}`)}
                  image={item?.attributes?.posterImage?.original}
                />
              </div>
            );
          })}
          <>
          <PaginationComponent
            total={arrayAnime?.meta?.count}
            offset={offset}
            setOffset={setOffset}
            />
          </>
      </S.Test>
      )}
      </>
    </M.Grid>
  );
}
