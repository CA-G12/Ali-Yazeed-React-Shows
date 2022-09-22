import SeasonInfo from './SeasonInfo';
import EpisodeList from './EpisodeList';
import { useParams } from "react-router-dom";

const ShowDetails = () => {

  const { id } = useParams()

  return (
    <div className="show-details">
      <SeasonInfo id={id} />
      <EpisodeList id={id} />
    </div>
  );
}

export default ShowDetails;