import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(-1)
  }

  return (
    <header>
        
      <div><a href="/">SHOWS TIME</a></div>
      <div><a href="" onClick={handleNavigate}>Back</a></div>
    </header>
  );
}

export default Header;