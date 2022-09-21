import ShowInfo from './ShowInfo';
import SeasonList from './SeasonList';
import useFetch from '../utils/useFetch.js';
import { useParams, useNavigate } from "react-router-dom";

const ShowDetails = () => {

  const { id } = useParams()
  const url = `https://api.tvmaze.com/shows/${id}/seasons`

  const { error, isLoading, data: showSeasons } = useFetch(url);
  const { error2, isLoading2, data: showInfo } = useFetch(`https://api.tvmaze.com/shows/${id}`);

  return (
    <div className="container">
      <div>Show Details</div>
      <ShowInfo info={showInfo}/>  
      <SeasonList seasons={ showSeasons } />  
    </div>
  );
}

export default ShowDetails;