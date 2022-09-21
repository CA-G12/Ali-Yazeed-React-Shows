const ShowList  = ({shows}) => {
  shows = [];
  return shows.map((show => (
      <div className="show-card">
        {/* <h2>{show.title}</h2>
        <p>{show.content}</p> */}
      </div>
  )));
}

export default ShowList;