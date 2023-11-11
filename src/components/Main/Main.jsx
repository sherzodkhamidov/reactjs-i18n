import React from 'react'
import { useTranslation } from "react-i18next";
import "./Main.css"
import manager from "../../assets/manager.jpg" 

function Main() {
    const { t } = useTranslation();
  return (
    <div className='main-all'>
    <div className='main-text'>
        <div>
        <h1>{t("main-h1")}</h1>
        <p className='main-p1'>{t("main-p1")}</p>
        </div>
        <p>{t("main")}</p>
    </div>
 
    <div className='back'>
        <img className='manager' src={manager} alt="rasm" />
    </div>
    </div>
  )
}

export default Main