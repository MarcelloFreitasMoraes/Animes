import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import CardComponent from "@/global/components/CardComponent";
import axios from "axios";
import { DataProps, HomeProps } from "@/global/@types/type";
import { useRouter } from "next/router";
import * as S from "./styles";
import qs from "qs";
import PaginationComponent from "../Pagination";
import { Loading } from "../Loading";

export default function CardListComponent(props: HomeProps) {
  const { sort, icon, categoryes, title, text, limit } = props;
  const [data, setData] = useState<DataProps>();
  const [offset, setOffset] = useState<number>(0);
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const notImge = 'https://media.kitsu.io/anime/poster_images/11501/original.jpg'


  const createUrl = () => {
    const query = {
      page: {
        limit: limit ?? 5,
        offset,
      },
      filter: {
        text,
      },
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
    return url;
  };

  useEffect(() => {
    setLoading(true);
    const url = createUrl();
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
        setInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  }, [sort, categoryes, text, offset]);

  return (
    <M.Grid sx={{ marginLeft: "10rem" }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <M.Grid
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "15px 0 0 12px",
            }}
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
                        image={item?.attributes?.posterImage?.original ?? notImge}
                      />
                    </div>
                  );
                })}
            </S.Test>
          )}
          {categoryes && (
            <PaginationComponent
              total={info?.meta?.count}
              offset={offset}
              setOffset={setOffset}
            />
          )}
        </>
      )}
    </M.Grid>
  );
}
