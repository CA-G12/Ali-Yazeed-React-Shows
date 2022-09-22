import { Link } from "react-router-dom";

const SeasonList = ({ seasons, error2, isLoading2 }) => {

  return (
    <div className="season-list">
      <ul className="card-list">
        {error2 && <div>{error2}</div>}
        {isLoading2 && <div>Loading....</div>}
        {seasons && seasons.map(season => (
        <li className="card" key={season.id}>
        <a className="card-link" href={`/shows/season/${season.id}`}>
          <img src={season.image.medium} alt="" />
          <div className="layer">
              <div className="info">
                <h2>Season {season.number}</h2>
              </div>
          </div>
        </a>
      </li>
        ))}
      </ul>
    </div>
  )

};

export default SeasonList;