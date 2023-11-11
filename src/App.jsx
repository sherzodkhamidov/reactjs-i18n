import React from "react";
import Swiper from "./components/Swiper/Swiper";
import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import Statistics from "./components/Statistics/Statistics";
import Mobileapp from "./components/Mobileapp/Mobileapp";
import Links from "./components/Links/LInks";
import Informations from "./components/Informations/Informations";
import Footer from "./components/Footer/Footer";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton"

function App() {
  const lang = localStorage.getItem("lang") || "uz";
  return (
    <div>
      <Header />
      <Swiper />
      <Main />
      <Statistics />
      <Mobileapp />
      <Links />
      <Informations />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
