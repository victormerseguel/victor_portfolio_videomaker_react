import { NavLink, Navigate } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <h1>Victor Merseguel</h1>
      <h2>Diretor, Colorista, Editor e Videógrafo</h2>
      <nav>
        <ul>
          <NavLink></NavLink>
          <li id="jobsBtn" className={`${style.menu} ${style.currentMenu}`}>
            Trabalhos
          </li>
          <li id="aboutBtn" className={style.menu}>
            Sobre
          </li>
          <li id="contactsBtn" className={style.menu}>
            Contactos
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
