import React, { useEffect, useState } from "react";
import * as M from "@mui/material";
import * as S from "../styles/styles";
import Header from "@/global/components/Header";
import CardListComponent from "@/global/components/CardListComponent";
import Slider from "@/global/components/Slider";
import { Star } from "@/global/assets/Icons/Star";
import { Like } from "@/global/assets/Icons/Like";
import { DataProps, HomeProps } from "@/global/@types/type";



export default function Home(props: HomeProps) {
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

  return (
    <S.Container>
      <S.Back>
        <Header />
        <S.ContantSlider>
        <CardListComponent sort="user_count" icon={<Star/>}/>
        </S.ContantSlider>
        <M.Box sx={{margin: '50px auto', width: '80%'}}>
          <Slider/>
          </M.Box>  
          <S.ContainerSlider>
          <CardListComponent sort="average_rating" icon={<Like/>}/>    
          </S.ContainerSlider> 
      </S.Back>
    </S.Container>
  );
}
