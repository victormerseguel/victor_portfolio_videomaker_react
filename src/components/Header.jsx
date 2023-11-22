import { NavLink, Navigate } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <h1>Victor Merseguel</h1>
      <h2>Diretor, Colorista, Editor e Videógrafo</h2>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li id="jobsBtn" className={`${style.menu} ${style.currentMenu}`}>
              Trabalhos
            </li>
          </NavLink>
          <NavLink to="about">
            <li id="aboutBtn" className={style.menu}>
              Sobre
            </li>
          </NavLink>
          <NavLink to={"/contacts"}>
            <li id="contactsBtn" className={style.menu}>
              Contactos
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
