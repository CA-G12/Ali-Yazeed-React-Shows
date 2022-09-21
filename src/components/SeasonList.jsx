const ShowList = ({ shows }) => {
  
  console.log(shows);
  return shows.map((show => (
      <div className="show-card">
        <h2>{show.name}</h2>
        {/* <p>{show.content}</p> */}
      </div>
  )));
}

export default ShowList;