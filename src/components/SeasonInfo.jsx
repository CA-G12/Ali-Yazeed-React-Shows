import useFetch  from "../utils/useFetch";

const SeasonInfo = ({ id, showInfo }) => {

  const { data: seasonInfo } = useFetch(`https://api.tvmaze.com/seasons/${id}`);

  console.log('seasonInfo: ', seasonInfo);

  return (seasonInfo && 
    <div className="show-info" key={seasonInfo.id}  style={{ 
      backgroundImage: `url("${seasonInfo.image?seasonInfo.image.original: '../images/blank-show.png'}")` 
    }}>
      <div className="layer">
        <h2>Season {seasonInfo.number}</h2>
        <p>Premiered at: {seasonInfo.premiereDate}</p>
        <p>Episodes: {seasonInfo.episodeOrder}</p>
      </div>
    </div>
  );
}

export default SeasonInfo;