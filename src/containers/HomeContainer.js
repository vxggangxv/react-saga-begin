import React, { useEffect, useState } from 'react';
import Home from '../components/Home'
// import * as api from '../api';
import axios from "axios";
import { moviesApi } from '../api';

const HomeContainer = () => {
  let [data, setData] = useState(null);
  let [nowPlaying, setNowPlaying] = useState(null);
  let [upcoming, setUpcoming] = useState(null);
  let [popular, setPopular] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);

  // baseURL: "https://api.themoviedb.org/3/",
  // params: {
  //   api_key: "da32b717c9f7e41e580fb597c3049eb1",
  //   language: "en-US"
  //   // language: "ko-KR"
  // }
  let page = 10;
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const result = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=da32b717c9f7e41e580fb597c3049eb1&language=ko-KR&page=1');
      // const result = await moviesApi.nowPlaying();
      setData(result);
    }
    fetchNowPlaying();
  }, [])
  console.log(data);

  return (
    <Home></Home>
  );
};

export default HomeContainer;