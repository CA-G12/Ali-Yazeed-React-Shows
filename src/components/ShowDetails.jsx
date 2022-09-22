import ShowInfo from './ShowInfo';
import SeasonList from './SeasonList';
import useFetch from '../utils/useFetch.js';
import { useParams, useNavigate } from "react-router-dom";

const ShowDetails = () => {

  const { id } = useParams()
  const url = `https://api.tvmaze.com/shows/${id}/seasons`

  const { error: error2, isLoading: isLoading2, data: showInfo } = useFetch(`https://api.tvmaze.com/shows/${id}`);
  const { error, isLoading, data: seasons } = useFetch(url);

  let section;
  if (isLoading || isLoading2) {
    section = <div className="lds-facebook"><div></div><div></div><div></div></div>;
  } else {
    section = (
      <>
        <ShowInfo info={showInfo} error={error2 } />
        <SeasonList seasons={seasons} error={error} isLoading={isLoading} id={id} />
      </>)
      ;
  }

  return (
    <div className="show-details">
      {section}
    </div>
  );
}

export default ShowDetails;