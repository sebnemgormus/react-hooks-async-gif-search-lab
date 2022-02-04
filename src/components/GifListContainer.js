import React, { useEffect, useState } from 'react';
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
 const [gif, setGif] = useState([]);
 const [search, setSearch] = useState("cats");

 useEffect(() => {
     fetch("https://api.giphy.com/v1/gifs/search?q=${search}&api_key=NC8b60PuNHiN509sEs9PDKUADuHdJUSp&rating=g&limit=3")
     .then((g) => g.json())
     .then(({data}) => {
         const gifs = data.map((gif) => ({url: gif.images.original.url}));
         setGif(gifs);
     });
    }, [search]);




  return (
  <div>
    <GifSearch onSubmitSearch={setSearch}/>
    <GifList gifs={gif}/> 
  </div>
  );
}

export default GifListContainer;
