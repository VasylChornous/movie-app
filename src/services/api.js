import axios from "axios";

export const imagePath = "https://image.tmdb.org/t/p/w500";
export const imagePathOriginal = "https://image.tmdb.org/t/p/original";

const baserUrl = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_API_KEY;

//TRENDING
export const fetchTrending = async (timeWindow = "day") => {
  const { data } = await axios.get(
    `${baserUrl}/trending/all/${timeWindow}?api_key=${apiKey}`
  );
  return data?.results;
};

// MOVIES & SERIES DETAILS
export const fetchDetails = async (type, id) => {
  const res = await axios.get(`${baserUrl}/${type}/${id}?api_key=${apiKey}`);
  return res?.data;
};

// MOVIES & SERIES Credits
export const fetchCredits = async (type, id) => {
  const res = await axios.get(
    `${baserUrl}/${type}/${id}/credits?api_key=${apiKey}`
  );
  return res?.data;
};

// MOVIES & SERIES Videos
export const fetchVideos = async (type, id) => {
  const res = await axios.get(
    `${baserUrl}/${type}/${id}/videos?api_key=${apiKey}`
  );
  return res?.data;
};

// Discover
export const fetchMovies = async (page, sortBy) => {
  const res = await axios.get(
    `${baserUrl}/discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};

// Discover Tv
export const fetchTvSeries = async (page, sortBy) => {
  const res = await axios.get(
    `${baserUrl}/discover/tv?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`
  );
  return res?.data;
};

//Search
export const searchData = async (query, page) => {
  const res = await axios.get(
    `${baserUrl}/search/multi?api_key=${apiKey}&query=${query}&page=${page}`
  );
  return res?.data;
};
