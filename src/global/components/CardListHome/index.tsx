import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import CardComponent from "@/global/components/CardComponent";
import axios from "axios";
import { DataProps, HomeProps } from "@/global/@types/type";
import { useRouter } from "next/router";
import * as S from "./styles";
import qs from "qs";

export default function CardListHomeComponent(props: HomeProps) {
  const { sort, icon, title, limit } = props;
const [data, setData] = useState<DataProps>();
const { push } = useRouter();

const createUrl = () => {
  const query = {
    page: {
      limit: limit ?? 5,
    }
  };
 
  let url = `https://kitsu.io/api/edge/anime?${qs.stringify(query)}`;

  if (sort === "user_count") {
    url += "&sort=-user_count";
  }

  if (sort === "average_rating") {
    url += "&sort=-average_rating";
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
}, [sort]);

  return (
    <M.Grid sx={{ marginLeft: "70px", display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <M.Grid
        sx={{ display: "flex", alignItems: "center", margin: "1rem 51rem 0 0", justifyContent: 'center' }}
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
      {data && (
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
        </S.Test>
      )}    
    </M.Grid>
  );
}
