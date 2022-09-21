import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";

const EpisodeList = () => {
    const { id } = useParams()
    const { error, isLoading, data: episodes } = useFetch(`https://api.tvmaze.com/seasons/${id}/episodes`);

    return (
        <ul className="episode-list">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading....</div>}
            {episodes && episodes.map(episode => (
                <li key={episode.id}>
                    <a href={episode.url}> Episode {episode.number} </a>
                    <p>{episode.summary.slice(3,-4)}</p>
                </li>
            ))}
        </ul>
    )

};

export default EpisodeList;