import SeasonInfo from './SeasonInfo';
import EpisodeList from './EpisodeList';
import { useParams } from "react-router-dom";

const ShowDetails = (props) => {

  const { id } = useParams()

  props.setPage('Episodes');

  return (
    <div className="show-details">
      <SeasonInfo id={id} />
      <EpisodeList id={id} />
    </div>
  );
}

export default ShowDetails;