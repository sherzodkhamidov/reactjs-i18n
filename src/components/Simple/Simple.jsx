import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Simple.css";

function Simple() {
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
    <div className="simple-all" onClick={click} onMouseEnter={show} onMouseLeave={close}>
      <div className="simple-text">
        {t("simple")}
      </div>
  <div className="qw">
      {open ?
       <div onMouseLeave={close} className="simple-block">
<ul className="ull">
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins1")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins2")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins3")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins4")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins5")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins6")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins7")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins8")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins9")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins10")}</li></a>
 <a target="_blank" href="https://kapitalsugurta.uz"> <li>{t("ins11")}</li></a>
</ul>

       </div>
        : null}
      </div>
    </div>
  );
}

export default Simple;
