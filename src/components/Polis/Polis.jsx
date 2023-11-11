import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Polis.css";

function Polis() {
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
    <div className="polis-all" onClick={click} onMouseEnter={show} onMouseLeave={close}>
      <div className="polis-text">
        {t("polis")}
      </div>
  <div className="qw">
      {open ? <div onMouseLeave={close} className="polis-block">
        <ul className="ull">
          <li>{t("polis-check")}</li>

        </ul>
      </div> : null}
      </div>
    </div>
  );
}

export default Polis;