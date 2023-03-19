import { API } from "@/global/config/api";

export const getAnimesClass = async () => {
  try {
    const data  = await API.get('/anime?page[limit]=5&page[offset]=0&sort=-user_count');

    if (data) {
      return data;
    }

    return new Error('Erro ao listar todos os personagens');
  } catch (error) {
    return new Error('Erro ao listar todos os personagens');
  }
};

export const getAnimesPopular = async () => {
  try {
    const data  = await API.get('/anime?page[limit]=5&page[offset]=0&sort=-average_rating');

    if (data) {
      return data;
    }

    return new Error('Erro ao listar todos os personagens');
  } catch (error) {
    return new Error('Erro ao listar todos os personagens');
  }
};