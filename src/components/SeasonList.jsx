import { Link } from "react-router-dom";

const SeasonList = ({ seasons, error2, isLoading2 }) => {

  return (
    <ul className="season-list">
      {error2 && <div>{error2}</div>}
      {isLoading2 && <div>Loading....</div>}
      {seasons && seasons.map(season => (
        <li key={season.id}><Link to={`/shows/season/${season.id}`} href={season.url}>Season {season.number}</Link></li>
      ))}
    </ul>
  )

};

export default SeasonList;