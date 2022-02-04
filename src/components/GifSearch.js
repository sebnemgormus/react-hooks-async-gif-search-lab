import React, { useState } from 'react';

function GifSearch({onSubmitSearch}) {

    const [query, setQuery] = useState("");

    function handleSearch(event){
        event.preventDefault();
        onSubmitSearch(query);
        console.log(query)
    }

    function handleChange(event){
        setQuery(event.target.value)
    }

  return (<div>
      <form onSubmit={handleSearch}>
          <label htmlFor="search"> Enter a search Term: </label>
          <input id ="search" type="text" value={query} onChange={handleChange}/>
          <button type="submit"> Find Gifs</button>
      </form>
  </div>);
}

export default GifSearch;
