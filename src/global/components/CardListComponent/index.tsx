import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import CardComponent from "@/global/components/Card";
import axios from "axios";
import { DataProps, HomeProps } from "@/global/@types/type";
import { useRouter } from "next/router";
import * as S from "./styles";

export default function CardListComponent(props: HomeProps) {
  const { sort, icon, categoryes, limit, title } = props;
  const [data, setData] = useState<DataProps>();
  const { push } = useRouter();

  let url = `https://kitsu.io/api/edge/anime?page[limit]=${
    limit ?? 5
  }&page[offset]=0`;

  if (sort === "user_count") {
    url += "&sort=-user_count";
  }

  if (sort === "average_rating") {
    url += "&sort=-average_rating";
  }

  if (categoryes && categoryes !== "All") {
    url += `&filter[categories]=${categoryes}`;
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [url]);

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
    </M.Grid>
  );
}
