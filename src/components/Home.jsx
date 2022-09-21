import ShowList from './ShowList';
import useFetch from '../utils/useFetch.js';

const Home  = () => {
  // useFetch('')
  return (
    <div className="container">
      <ShowList />  
    </div>
  );
}

export default Home;