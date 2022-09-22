import ShowInfo from './ShowInfo';
import SeasonList from './SeasonList';
import useFetch from '../utils/useFetch.js';
import { useParams, useNavigate } from "react-router-dom";

const ShowDetails = () => {

  const { id } = useParams()
  const url = `https://api.tvmaze.com/shows/${id}/seasons`

  const { error, isLoading, data: seasons } = useFetch(url);
  const { error2, isLoading2, data: showInfo } = useFetch(`https://api.tvmaze.com/shows/${id}`);
  // _embedded
  return (
    <div className="show-details">
      <ShowInfo info={showInfo}/>  
      <SeasonList seasons={seasons} error2={error2} isLoading2={isLoading2}  id={ id } />  
    </div>
  );
}

export default ShowDetails;