import { API } from "@/global/config/api";

export async function handleClick(animeId: any) {
  try {
    const response = await API.get(`/anime/${animeId}`);
    const animeArray = response.data;
    localStorage.setItem("animeId", JSON.stringify(animeArray));
    window.location.href = "/AmineSpecific";
  } catch (error) {
    console.log(error);
  }
}
