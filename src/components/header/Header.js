import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../img/lg.png";
import Language from "../language/Language";
import styles from "./Header.module.css";
import paths from "../../consts/paths";
import { saveState } from "../../helpers/localStorage";

export default function Header({ id, verify }) {
  let history = useHistory();
  const logOut = () => {
    saveState("", "auth");
    history.push("/login");
    verify();
  };

  return (
    <header className={styles.header}>
      <div>
        <img alt="logo" src={logo} width="40px" />
      </div>
      <nav className={styles.navigation}>
        <b>
          <NavLink exact to={"/home/" + id} activeClassName={styles.selected}>
            Home
          </NavLink>
        </b>
        <b>
          <NavLink to={"/games/" + id} activeClassName={styles.selected}>
            Games
          </NavLink>
        </b>
        <b>
          <NavLink to={paths.about} activeClassName={styles.selected}>
            Team
          </NavLink>
        </b>
      </nav>
      <div onClick={logOut} className={styles.icons}>
        <Language />
        <IconButton>
          <PersonIcon className={styles.icon} />
          <NavLink to={paths.register}>Log out</NavLink>
        </IconButton>
      </div>
    </header>
  );
}
