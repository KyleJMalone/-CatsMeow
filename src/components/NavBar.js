import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const localUser = localStorage.getItem("capstone_user");
  const userObject = JSON.parse(localUser);

  return (
    <ul className="navbar">
      <span className= "navbar_logo">CatsMeow</span>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/CatCare">
          Cat Care
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/ProfilePage">
          Profile Page
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/CatBehavior">
          Cat Behavior
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/Forums">
          Forums
        </Link>
      </li>
      {localStorage.getItem("capstone_user") ? (
        <li className="navbar__item navbar__logout">
          <Link
            className="navbar__link"
            to="/Login"
            onClick={() => {
              localStorage.removeItem("project_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
