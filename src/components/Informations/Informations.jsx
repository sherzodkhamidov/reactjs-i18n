import React from 'react'
import "./Informations.css"
import { useTranslation } from "react-i18next";

function Informations() {
    const { t } = useTranslation();
  return (
    <div className='info-all'>
        <div className='div'>
            <p className='ins-title'>{t("about-title")}</p>
            <p>{t("about-text")}</p>
        </div>
        <div className='div'>
            <p className='ins-title'>{t("insurance-title")}</p>
            <p>{t("insurance-text")}</p>
        </div>
        <div className='div'>
            <p className='ins-title'>{t("insurance2-title")}</p>
            <p>{t("insurance2-text")}</p>
        </div>
    </div>
  )
}

export default Informations