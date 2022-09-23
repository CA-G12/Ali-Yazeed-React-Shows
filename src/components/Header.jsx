/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";

const Header = (props) => {
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
      {<div className="navigation"><a href="#" onClick={handleNavigate}>Back </a> / { props.page }</div>}
    </header>
  );
}

export default Header;