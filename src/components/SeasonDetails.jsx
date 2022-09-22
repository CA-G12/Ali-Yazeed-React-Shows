import SeasonInfo from './SeasonInfo';
import EpisodeList from './EpisodeList';
import useFetch from '../utils/useFetch.js';
import { useParams } from "react-router-dom";

const ShowDetails = () => {

  const { id } = useParams()
  const url = `https://api.tvmaze.com/shows/${id}/seasons`


  // _embedded
  return (
    <div className="show-details">
      <SeasonInfo id={ id } />  
      <EpisodeList id={ id } />  
    </div>
  );
}

export default ShowDetails;