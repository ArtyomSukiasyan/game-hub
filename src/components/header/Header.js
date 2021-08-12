import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import logo from "../../img/lg.png";
import Language from "../language/Language";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img alt="logo" src={logo} width="40px" />
      </div>
      <nav className={styles.navigation}>
        <b>
          <NavLink exact to="/" activeClassName={styles.selected}>
            Home
          </NavLink>
        </b>
        <b>
          <NavLink to="/games" activeClassName={styles.selected}>
            Games
          </NavLink>
        </b>
        <b>
          <NavLink to="/about" activeClassName={styles.selected}>
            About
          </NavLink>
        </b>
      </nav>
      <div className={styles.icons}>
        <Language />
        <IconButton>
          <PersonIcon className={styles.icon} />
          <NavLink to="/register">Log In</NavLink>
        </IconButton>
      </div>
    </header>
  );
}
