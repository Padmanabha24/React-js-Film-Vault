import React, { useState } from "react";
import Movies_card from "./Movies_card";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
// import React from "react";

function Movies({ handelAddToWatchlist, handelRemoveWatchlist, Watchlist1 }) {
  const [movies, setmovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  function previouspage() {
    if (pageNo === 1) {
      setpageNo(pageNo);
    } else {
      setpageNo(pageNo - 1);
    }
  }
  function nextpage() {
    setpageNo(pageNo + 1);
  }

  useEffect(() => {
  // const apiKey=process.env.REACT_APP_TMDB_API_KEY;
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${pageNo}`)
  .then((res) => {
        setmovies(res.data.results);
        console.log(res.data);
      });
  }, [pageNo]);


  return (
    
    <div className="p-5">

      <div className="text-center font-bold text-2xl">Trending Movies</div>
      <div className="pt-5 flex flex-row flex-wrap justify-around gap-5">
        {movies.map((moviesobj) => {
          return (
            <Movies_card
              poster_path={moviesobj.poster_path}
              key={moviesobj.id}
              Watchlist1={Watchlist1}
              moviesobj={moviesobj}
              handelRemoveWatchlist={handelRemoveWatchlist}
              handelAddToWatchlist={handelAddToWatchlist}
              name={moviesobj.original_title}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        previouspage={previouspage}
        nextpage={nextpage}
      />
    </div>
  );
}

export default Movies;
