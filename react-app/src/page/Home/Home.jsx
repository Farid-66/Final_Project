import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <ProductList title="Ən çox satılan məhsullar"/>
            <ProductList title="Yeni gələn məhsullar"/>
            <Advertise />
            <ProductList title="Yeni gələn aksessuarlar"/>
            <Count />
            <Advantages />
            <Brands />
            <Footer />
        </div>
    );
}

export const Advantages = () => {
    return (
        <section id="advantages">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div>
                            <img src={require("../../assets/Images/box.png")} alt="" />
                            <span>Çatdirilma</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div>
                            <img src={require("../../assets/Images/credit.png")} alt="" />
                            <span>Kredit</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div>
                            <img src={require("../../assets/Images/achievement.png")} alt="" />
                            <span>Zəmanət</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
};

export const Advertise = () => {
    return (
        <section id="advertise">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img src={require("../../assets/Images/Rectangle168.jpg")} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={require("../../assets/Images/Rectangle169.jpg")} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Count = () => {
    return (
        <section id="count">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img src={require("../../assets/Images/Screenshot3.png")} />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <img src={require("../../assets/Images/Screenshot1.png")} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <img src={require("../../assets/Images/Screenshot2.png")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={6}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="swiperslide">
                                    <img src={require("../../assets/Images/toshiba.png")} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperslide">
                                    <img src={require("../../assets/Images/philips.png")} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperslide">
                                    <img src={require("../../assets/Images/hp.png")} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperslide">
                                    <img src={require("../../assets/Images/electrolux.png")} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperslide">
                                    <img src={require("../../assets/Images/gorenje.png")} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperslide">
                                    <img src={require("../../assets/Images/bosch.png")} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiperslide">
                                    <img src={require("../../assets/Images/toshiba.png")} alt="" />
                                </div>
                            </SwiperSlide>

                            <div className="dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
