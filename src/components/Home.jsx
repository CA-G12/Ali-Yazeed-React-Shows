import ShowList from './ShowList';
import useFetch from '../utils/useFetch.js';
import Search from './Search';
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState('')

  let url = `https://api.tvmaze.com/shows`
  if (query) {
    url = `https://api.tvmaze.com/search/shows?q=${query}`
  }

  const { error, isLoading, data: shows } = useFetch(url);

  return (
    <div className="home">
      <Search query={query} setQuery={setQuery} />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {shows && <ShowList shows={shows} />}
    </div>
  );
};

export default Home;