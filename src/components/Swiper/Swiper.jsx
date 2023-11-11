import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Swiper.css";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay])

function Swiperr() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper">
            <img className="img1" src={img1} alt="rasm" />
            <div className="text-overlay">
            <h1 className="title" >{t("tekst1")}</h1>
            <p className="title2" >{t("text1")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper">
            <img className="img1" src={img2} alt="rasm" />
            <div className="text-overlay">
            <h1 className="title" >{t("tekst2")}</h1>
            <p className="title2" >{t("text2")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper">
            <img className="img1" src={img3} alt="rasm" />
            <div className="text-overlay">
            <h1 className="title" >{t("tekst3")}</h1>
            <p className="title2" >{t("text3")}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper">
            <img className="img1" src={img4} alt="rasm" />
            <div className="text-overlay">
            <h1 className="title" >{t("tekst4")}</h1>
            <p className="title2" >{t("text4")}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swiperr;
