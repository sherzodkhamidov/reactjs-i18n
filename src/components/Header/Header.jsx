import React from "react";
import Servis from "../Servis/Servis";
import "./Header.css";
import { useTranslation } from "react-i18next";
import Menu from "../Menu/Menu";

function Header() {
  const { t } = useTranslation();

  const changeLanguageRu = () => {
    localStorage.setItem("lang", "ru");
  };
  const changeLanguageUz = () => {
    localStorage.setItem("lang", "uz");
  };
  return (
    <div className="navbar-all">
      <div className="navbar">
        <div className="logo center">
          <i className=" yellow ri-logout-box-r-fill"></i>
          <p>SUG'URTA KOMPANIYASI</p>
        </div>
        <div className="navbar-items">
          <div className="phone center">
            <i className="yellow ri-phone-fill"></i>
            +998 77 048 77 48
          </div>
          <div className="chances center">
            <i className=" yellow ri-eye-fill"></i>
            {t("chance")}
          </div>
          <div className="europrotocol">
            <i className="ri-file-download-fill"></i>
            EuroProtocol
          </div>
          <div className="language">
            <a href="/" onClick={() => changeLanguageUz()}>
              Uz
            </a>{" "}
            <span>|</span>{" "}
            <a href="/" onClick={() => changeLanguageRu()}>
              Ru
            </a>
          </div>
          <div>
           < Menu />
          </div>
        </div>
      </div>
      <Servis />
    </div>
  );
}

export default Header;
