import useFetch  from "../utils/useFetch";

const SeasonInfo = ({ id }) => {

  const { error, isLoading, data: seasonInfo } = useFetch(`https://api.tvmaze.com/seasons/${id}`);

  return (seasonInfo && 
    <div className="show-info" key={seasonInfo.id}  style={{ 
      backgroundImage: `url("${seasonInfo.image.original}")` 
    }}>
      <div className="layer">
        <h2>{seasonInfo.name}</h2>
        <div className="genres">
          {/* <span>{seasonInfo.genres.join(' / ')}</span>
          <span>{seasonInfo.rating.average}</span> */}
        </div>
        {/* <p>{seasonInfo.summary.slice(3,-4)}</p> */}
      </div>
    </div>
  );
}

export default SeasonInfo;