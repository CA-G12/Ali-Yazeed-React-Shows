const ShowInfo = ({ info, error }) => {

  return (
    <>
    { error && <div>{error}</div> }
      {info &&
        <div className="show-info" key={info.id} style={{
          backgroundImage: `url("${info.image.original}")`
        }}>
          <div className="layer">
            <h2>{info.name}</h2>
            <div className="genres">
              <span>{info.genres.join(' / ')}</span>
              <span>{info.rating.average}</span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: info.summary }}></p>
          </div>
        </div>
      }
      </>
  );
}

export default ShowInfo;