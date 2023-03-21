import styled from "styled-components";

export const Container = styled.section`
width:100%;
 margin: 0 auto;

/* #app {
  height: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
   margin-left: 15%;
   text-align: start;
   color: var(--light);
   //background-color: var(--transparent);
   
}

.swiper-slide img {
  display: block;
  width: 80%;
  height: auto;
  object-fit: cover;
}

.swiper-pagination-bullet-active {
     background-color: var(--primary) !important;
     
}
.swiper-pagination-bullets{
  //margin-top: 20px;
} */

#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: var(--light);

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet-active {
     background-color: var(--primary) !important;
     
}

`