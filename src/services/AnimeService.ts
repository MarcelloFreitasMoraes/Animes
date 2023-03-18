import { API } from '../config/api';

export const getAllAnimes = async () => {
  try {
    const data  = await API.get('/anime');

    if (data) {
      return data;
    }

    return new Error('Erro ao listar todos os personagens');
  } catch (error) {
    return new Error('Erro ao listar todos os personagens');
  }
};

export const ServiceCharacters = {
  getAllAnimes,
};