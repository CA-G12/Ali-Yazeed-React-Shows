import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(-1)
  }

  return (
    <header>   
      <div className="header">
            <a href="/">
              <i className="fa-solid fa-film"></i>
              SHOWS TIME
            </a>
       </div>
      {<div className="navigation"><a href="" onClick={handleNavigate}>Back</a></div>}
    </header>
  );
}

export default Header;