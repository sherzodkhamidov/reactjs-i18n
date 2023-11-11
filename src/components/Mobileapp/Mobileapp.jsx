import React from "react";
import "./Mobileapp.css";
import { useTranslation } from "react-i18next";
import google from "../../assets/google.png";
import appstore from "../../assets/appstore.png";
import download from "../../assets/download.jpg";

function Mobileapp() {
  const { t } = useTranslation();
  return (
    <div className="stat-all">
      <div className="div1">
        <div className="app-texts">
        <h1>{t("app")}</h1>
        <p>{t("app-text")}</p>
        </div>
        <div className="apps">
          <a href="https://play.google.com/store/apps/details?id=uz.kapitalsugurta.kapital_klient&hl=en_US&pli=1" target="_blank" >
          <div className="play">
            <img className="logo-photo" src={google} alt="rasm" />
            <p>Google play</p>
          </div>
          </a>
          <a href="https://apps.apple.com/ru/app/kapital-sugurta/id6450005582" target="_blank" >
          <div className="play">
            <img className="logo-photo" src={appstore} alt="rasm" />
            <p>App Store</p>
          </div>
          </a>
        </div>
      </div>
      <div>
        <img className="download" src={download} alt="rasm" />
      </div>
    </div>
  );
}

export default Mobileapp;
