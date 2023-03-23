import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
//import * as S from "./styles";
import CardComponent from "@/global/components/Card";
import axios from "axios";
import { DataProps, HomeProps } from "@/global/@types/type";

export default function CardListComponent(props: HomeProps) {
  const { sort, icon } = props;
  const [data, setData] = useState<DataProps>();

  let url = `https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0`;

  if (sort === "user_count") {
    url += "&sort=-user_count";
  }

  if (sort === "average_rating") {
    url += "&sort=-average_rating";
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
        console.log(response, "ress");
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [url]);

  console.log(data, "data");
  return (
    <M.Grid sx={{ marginLeft: "70px" }}>
      <M.Grid>
        {icon}
      </M.Grid>
      <M.Grid sx={{ display: "flex", marginTop: "20px " }}>
        {data &&
          Object.values(data).map((item, index) => {
            return (
              <div key={index}>
                <CardComponent
                  action={() => {}}
                  image={item?.attributes?.posterImage?.original}
                />
              </div>
            );
          })}
      </M.Grid>
    </M.Grid>
  );
}
