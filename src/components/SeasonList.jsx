import { Link } from "react-router-dom";
const SeasonList = ({ seasons }) => {

  console.log('seasons:', seasons);
  return (
    <ul className="seasons-list">
      {seasons && seasons.map((season, index) => (
        <li key={season.id}><a href={season.url}>Season {index + 1}</a></li>
      ))}
    </ul>
  )

};

export default SeasonList;