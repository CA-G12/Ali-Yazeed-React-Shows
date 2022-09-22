const ShowList = ({ shows, moreNum }) => {

  return (
    <div className="card-list">
      <div className="container">
        {shows && shows.slice(0, moreNum).map((show => {
        const optimizedShow = show.show ? show.show : show;
        return (
          <div className="card" key={optimizedShow.id}>
              <a className="card-link" href={`/shows/${optimizedShow.id}`}>
                <img src={optimizedShow.image.medium} alt="" />
                <div className="layer">
                    <div className="info">
                      <h2>{optimizedShow.name}</h2>
                      <p>{optimizedShow.rating.average}</p>
                      <p>{optimizedShow.genres.join(' / ')}</p>
                    </div>
                </div>
              </a>
        </div>)  
        }))}
      </div>
    </div>
  )
}

export default ShowList;