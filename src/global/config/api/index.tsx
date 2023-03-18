import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://kitsu.io/api/edge/trending',
});

// export const baseURL = `https://kitsu.io/api/edge/trending/anime`

