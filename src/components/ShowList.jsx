const ShowList  = ({shows}) => {

  console.log('INsid LIST COMP:', shows);
  return shows.map((show => {
    const optimizedShow = show.show ? show.show : show;
    return (
      < div className="show-card" >
        <h2>NAME:{optimizedShow.name}</h2>
        <p>RATING:{optimizedShow.rating.average}</p>
        <p>ID:{optimizedShow.id}</p>
        <img src={optimizedShow.image.medium} alt="" />


      </ div>
      )
     
}));
}

export default ShowList;