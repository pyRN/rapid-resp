import { useNavigate } from "react-router-dom";
import "./Footer.css";

const NavBar = () => {
  const fnNavigate = useNavigate();
  return (
    <footer>
      <button className="back-btn" onClick={() => fnNavigate("/")}>
        Back
      </button>
    </footer>
  );
};

export default NavBar;
