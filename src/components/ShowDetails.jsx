import ShowInfo from './ShowInfo';
import SeasonList from './SeasonList';
import useFetch from '../utils/useFetch.js';

const ShowDetails  = () => {
  // useFetch('')
  return (
    <div className="container">
      <div>Show Details</div>
      <ShowInfo />  
      <SeasonList />  
    </div>
  );
}

export default ShowDetails;