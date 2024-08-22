import React from "react";

function Movies_card({
  moviesobj,
  poster_path,
  name,
  handelAddToWatchlist,
  handelRemoveWatchlist,
  Watchlist1,
}) {
  function contain() {
    for (let i = 0; i < Watchlist1.length; i++) {
      if (Watchlist1[i].id == moviesobj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] m-[15px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:courser-poinrer "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white  border rounded-xl flex text-xl w-full p-2 text-center bg-gray-900/60">
        <div>
          {contain(moviesobj) ? (
            <div>
             <button  onClick={() => handelRemoveWatchlist(moviesobj)}> &#10060;</button>
              </div>
          ) : (
            <button onClick={() => handelAddToWatchlist(moviesobj)}>
              &#128525;
            </button>
          )}
        </div>
        {name}
      </div>
    </div>
  );
}

export default Movies_card;
