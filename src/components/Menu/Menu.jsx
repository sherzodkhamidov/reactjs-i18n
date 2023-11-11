import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Menus.css";

function Menu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className={`menu ${open ? "open" : ""}`} onClick={toggleMenu}>
        <i className="ri-menu-line"></i>
      </div>
      {isOpen && (
        <div className="menu-black">
          <div className="menu-modal">
            <div className="modal-block">
              <div className="modal-title">{t("menu-title")}</div>
              <div onClick={toggleMenu}>
                <i className="logo ri-close-circle-fill"></i>
              </div>
            </div>
            <p className="menu-text">{t("menu-text")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
