import React from "react";
import "./Servis.css";
import { useTranslation } from "react-i18next";
import Simple from "../Simple/Simple";
import Legal from "../Legal/Legal";
import Incurance from "../Insurance/Incurance";
import Polis from "../Polis/Polis"

function Servis() {
  const { t } = useTranslation();
  return (
    <div className="servis">
      <div className="service">
        <ul className="ul">
          <div>
            <li className="li">
              <Simple />
            </li>
            <li className="li">
              <Legal />
            </li>
            <li className="li">
              <Incurance />
            </li>
            <li className="li">< Polis /></li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Servis;
