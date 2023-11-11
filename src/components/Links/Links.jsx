import React from "react";
import { useTranslation } from "react-i18next";
import "./Links.css";

function Links() {
  const { t } = useTranslation();
  return (
    <div className="link-all">
      <h1 className="link-text">{t("link")}</h1>
      <div className="links">
      <div>
        <p className="linkss">{t("link1")}</p>
        <div>
          <i className="ri-global-line"></i>
          <a className="linkss1" href="https://www.mitc.uz" target="_blank">
            https://www.mitc.uz
          </a>
        </div>
      </div>
      <div>
        <p className="linkss">{t("link2")}</p>
        <div>
          <i className="ri-global-line"></i>
          <a className="linkss1" href="https://www.lex.uz" target="_blank" >https://www.lex.uz</a>
        </div>
      </div>
      <div>
        <p className="linkss">{t("link3")}</p>
        <div>
          <i className="ri-global-line"></i>
          <a className="linkss1" href="https://pm.gov.uz" target="_blank"  >https://pm.gov.uz</a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Links;
