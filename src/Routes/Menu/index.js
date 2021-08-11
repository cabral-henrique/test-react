import React, { Component } from "react";
import { Link } from "react-router-dom";

import reactImg from "../../Assets/Images/react.png";

import style from "./style.module.scss";

const links = [
  { route: "/", label: "Criar usuário" },
  { route: "/list-users", label: "Listagem de usuários" },
];

export class Menu extends Component {
  state = {
    toggleMenu: false,
  };

  setToggleMenu() {
    const { toggleMenu } = this.state;
    if (toggleMenu)
      this.setState((prevState) => ({
        ...prevState,
        toggleMenu: false,
      }));
    else
      this.setState((prevState) => ({
        ...prevState,
        toggleMenu: true,
      }));
  }

  renderLink = () => {
    return links.map((link) => (
      <Link key={link.route} to={link.route}>
        {link.label}
      </Link>
    ));
  };

  render() {
    const { toggleMenu } = this.state;
    return (
      <div className={style.bgMenu}>
        <div className={style.containerMenu}>
          <nav className={style.navMain}>
            <div className={`${style.logoMain} ${style.noneMobile}`}>
              <Link to="/">
                <img src={reactImg} alt="Logo" />
              </Link>
            </div>
            <button
              onClick={() => this.setToggleMenu(!toggleMenu)}
              className={`${style.menuToggle} ${
                toggleMenu ? style.active : ""
              }`}
            >
              <span className={style.bar}>.</span>
              <span className={style.bar}>.</span>
              <span className={style.bar}>.</span>
            </button>
            <ul className={toggleMenu ? style.active : ""}>
              {this.renderLink()}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Menu;
