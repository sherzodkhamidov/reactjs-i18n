import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Legal.css"

function Legal() {
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
    <div className="legal-all" onClick={click} onMouseEnter={show} onMouseLeave={close}>
      <div className="legal-text">
        {t("legal")}
      </div>
      {open ? 
      <div onMouseLeave={close} className="legal-block">
        <ul className="ull">
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-1")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-2")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-3")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-4")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-5")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins-2-6")}</li></a>
</ul>
      </div> 
      : null}
    </div>

  );
}

export default Legal;
