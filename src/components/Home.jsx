import ShowList from './ShowList';
import useFetch from '../utils/useFetch.js';
import Search from './Search';
import { useState } from "react";
import '../home.css';

const Home = (props) => {
  const [query, setQuery] = useState('')
  const [moreNum, setMoreNum] = useState(20)

  props.setPage('Home');
  
  const url = !query
    ? `https://api.tvmaze.com/shows`
    : `https://api.tvmaze.com/search/shows?q=${query}`

  const { error, isLoading, data: shows } = useFetch(url);

  let section;
  if (isLoading) {
    section = <div class="lds-facebook"><div></div><div></div><div></div></div>;
  } else {
    section = (
         <div>
        {shows && <ShowList shows={shows} moreNum={moreNum} />}
         <button className="show-more" onClick={() => setMoreNum(moreNum + 20)}>Show More</button>
         </div>)
    ;
  }

  return (
    <div className="home">
      <Search query={query} setQuery={setQuery} />
      {error && <div>{error}</div>}
      {section}
    </div>
  );
};

export default Home;