import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Incurance.css";

function Incurance() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  const click = () => {
    setOpen(!open)
  }

  return (
    <div className="incurance-all"onClick={click} onMouseEnter={show} onMouseLeave={close}>
      <div className="incurance-text">
        {t("insurance")}
      </div>
  
      {open ? <div onMouseLeave={close} className="incurance-block">
        <ul className="ull">
        <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-1")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-1")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-3")}</li></a>
        </ul>
      </div> : null}

    </div>
  );
}

export default Incurance;