import React, { useContext, useEffect, useReducer } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import { fetchDataFromApi } from './components/utils/api';
import { initialState, reducer } from './store/homeSlice';
import { Genres, MovieDataContext } from './components/context/MovieDataProvider';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { genres , getBannerurl, getGenres } = useContext(MovieDataContext);

  console.log("genres : ", genres);

  useEffect(()=>{
    fetchApiConfig();
    genresCall();
  },[])

  const fetchApiConfig = () =>{
    fetchDataFromApi("/configuration").then((res)=>{

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }

      getBannerurl(url);

      dispatch({ type: "GET_API_CONFIGURATION", payload:{url} })
    })
  }

  const genresCall = async () => {
    let promises:any[] = [];
    let endPoints: string[] = ["tv", "movie"];
    let allGeners: Genres[] = [];

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item: Genres)=> allGeners.push(item));
    })

    const filteredGenres: Genres[] = allGeners.filter(
      (genre, index, self) =>
        index === self.findIndex((g) => g.id === genre.id)
    );

    getGenres(filteredGenres)

  }


  return (
    <div className="App">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query" element={<SearchResult />} />
            <Route path='/explore/:mediaType' element={<Explore />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
