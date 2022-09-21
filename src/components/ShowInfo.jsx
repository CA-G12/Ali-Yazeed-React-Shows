const ShowInfo = ({ info }) => {

  return (info && 
    <div className="show-info" key={info.id}>
      <p> INFO: {info.summary.slice(3,-4)}</p>
    </div>
  );
}

export default ShowInfo;