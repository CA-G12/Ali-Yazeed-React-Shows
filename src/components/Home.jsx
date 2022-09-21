import ShowList from './ShowList';
import useFetch from '../utils/useFetch.js';
import Search from './Search';
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState('')
  const [moreNum, setMoreNum] = useState(19)

  const url = !query
    ? `https://api.tvmaze.com/shows`
    : `https://api.tvmaze.com/search/shows?q=${query}`

  const { error, isLoading, data: shows } = useFetch(url);

  return (
    <div className="home">
      <Search query={query} setQuery={setQuery} />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {shows && <ShowList shows={shows} moreNum={moreNum} />}
      <button onClick={() => setMoreNum(moreNum + 20)}>Show More</button>
    </div>
  );
};

export default Home;