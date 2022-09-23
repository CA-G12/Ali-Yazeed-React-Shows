import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";

const EpisodeList = () => {
    const { id } = useParams()
    const { error, isLoading, data: episodes } = useFetch(`https://api.tvmaze.com/seasons/${id}/episodes`);

    return (
        <div className="season-list">
        <ul className="card-list">
          {error && <div>{error}</div>}
          {isLoading && <div>Loading....</div>}
          {episodes && episodes.map(episode => (
          <li className="card" key={episode.id}>
          <a className="card-link" href={episode.url}>
            <img src={episode.image? episode.image.medium: '../images/blank-show.png'} alt="" />
            <div className="layer">
                <div className="info">
                  <h2>Episode {episode.number}</h2>
                </div>
            </div>
          </a>
        </li>
          ))}
        </ul>
      </div>
    )

};


export default EpisodeList;