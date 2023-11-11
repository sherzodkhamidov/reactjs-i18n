import React from 'react'
import { useTranslation } from "react-i18next";
import "./Footer.css"

function Footer() {
    const { t } = useTranslation();
  return (
    <footer>
        <p>{t("footer1")}</p>
        <p>{t("footer2")}</p>
        <p>{t("footer3")}</p>
    </footer>
  )
}

export default Footer