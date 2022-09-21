import { Link } from "react-router-dom";

const ShowList = ({ shows }) => {

  return shows && shows.map((show => {
    const optimizedShow = show.show ? show.show : show;
    return (
      <Link to={`/shows/${optimizedShow.id}`}>
        < div className="show-card" key={optimizedShow.id}>
          <h2>NAME:{optimizedShow.name}</h2>
          <p>RATING:{optimizedShow.rating.average}</p>
          <p>ID:{optimizedShow.id}</p>
          <img src={optimizedShow.image.medium} alt="" />
        </ div>
      </Link>
      )
     
}));
}

export default ShowList;