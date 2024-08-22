import React, { useEffect, useState } from 'react';
import genreids from '../utilities/genera';

function Watchlist({ Watchlist1, handelRemoveWatchlist, setWatchlist }) {
  const [search, setSearch] = useState('');
  const [getGeners, setgetGeners] = useState(['all filters']);
  const [currgenre,setcurrgenre]=useState('all filters')

  let handelSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortDecreasing = () => {
    let decrease = Watchlist1.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...decrease]);
  };

  let sortIncreasing = () => {
    let increase = Watchlist1.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...increase]);
  };

  let handelFilter=(genre)=>{
    setcurrgenre(genre)
  }

  useEffect(() => {
    let temp = Watchlist1.map((moviesobj) => {
      return genreids[moviesobj.genre_ids[0]];
    });

    // Remove duplicates
    temp = [...new Set(temp)];

    setgetGeners(['all filters', ...temp]);
    console.log(temp);
  }, [Watchlist1]);

  return (
    <>
      <div className='flex justify-center '>
        {getGeners.map((genre) => {
          return <div key={genre} onClick={()=>handelFilter(genre)} className={currgenre==genre?"bg-blue-400 px-4 py-2 border rounded text-white item-center mx-1":"bg-gray-300 px-4 py-2 border rounded text-black item-center mx-1"}>
            {genre}
          </div>
})}

      </div>

      <div className='flex justify-center my-4 bg-color-black/600'>
        <input onChange={handelSearch} type="text" className='border-black px-2 bg-gray-200' placeholder='search for movies' />
      </div>

      <div className='overflow-hidden bg-grey-200 border m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name <button onClick={sortDecreasing}>↓</button></th>
              <th>Rating <button onClick={sortIncreasing}>↑</button></th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Watchlist1.filter((moviesobj)=>{
              if(currgenre=="all filters"){
                return true
              }
              else{
                return genreids[moviesobj.genre_ids[0]]==currgenre;
              }
            }).filter((moviesobj) => {
              return moviesobj.original_title.toLowerCase().includes(search.toLowerCase());
            }).map((moviesobj) => (
              <tr key={moviesobj.id} className='border-b-2'>
                <td className='flex items-center w-[200px]'>
                  <img className="h-[6rem] w-[10rem] mx-4 my-2 object-cover" src={`https://image.tmdb.org/t/p/original/${moviesobj.backdrop_path}`} alt={moviesobj.original_title} />
                  <span className="mx-[210px] my-[25px]">{moviesobj.original_title}</span>
                </td>
                <td>{moviesobj.vote_average}</td>
                <td>{moviesobj.popularity}</td>
                <td>{genreids[moviesobj.genre_ids[0]]}</td> 
                <td className='text-red-500'><button onClick={() => handelRemoveWatchlist(moviesobj)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
