import React from 'react'
import { useTranslation } from "react-i18next";
import "./Statistics.css"

function Statistics() {
    const { t } = useTranslation();
  return (
    <div className='stats'>
        <div>
            <h1 className='stat-title'>30+</h1>
            <p className='stat-text'>{t("experience")}</p>
        </div>
        <div>
            <h1 className='stat-title'>AAA-</h1>
            <p className='stat-text'>{t("payment")}</p>
        </div>
        <div>
            <h1 className='stat-title'>200+</h1>
            <p className='stat-text'>{t("worker")}</p>
        </div>
        <div>
            <h1 className='stat-title'>67+</h1>
            <p className='stat-text'>{t("year")}</p>
        </div>
    </div>
  )
}

export default Statistics