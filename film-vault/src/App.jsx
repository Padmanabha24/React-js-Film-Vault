import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
// import genreids from "../utilities/genera"


import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  let [Watchlist1, setWatchlist] = useState([]);

  let handelAddToWatchlist = (moviesobj) => {
    let newWatchlist = [...Watchlist1, moviesobj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handelRemoveWatchlist=(moviesobj)=>{
    let filteredWatchList=Watchlist1.filter((movies)=>{
      return movies.id!=moviesobj.id
    })
    setWatchlist(filteredWatchList);
  }

 useEffect(()=>{
  let moviesListLocalStorage=localStorage.getItem('moviesApp')
  if(!moviesListLocalStorage){
    return 
  }
  setWatchlist(JSON.parse(moviesListLocalStorage))
 },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies handelAddToWatchlist={handelAddToWatchlist} Watchlist1={Watchlist1} handelRemoveWatchlist={handelRemoveWatchlist} />
              </>
            }
          />
          <Route path="Watchlist" element={<Watchlist Watchlist1={Watchlist1} setWatchlist={setWatchlist} handelRemoveWatchlist={handelRemoveWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/popular?api_key=a40dddc07d86515b05496d8e0a815424&language=en-US&page=1%27
