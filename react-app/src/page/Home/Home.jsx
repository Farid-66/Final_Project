import React, { useState, useEffect } from 'react'
import commerce from "../../Ecommerce";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css";


function Home() {
    const [brands, setBrands] = useState([])
    const [mostselled, setMostselled] = useState([])
    const [newPhone, setNewPhone] = useState([])
    const [accessories, setNewAccessories] = useState([])

    const fetchProducts = async () => {
        const { data } = await commerce.products.list({ category_slug: ['phone'] });
        setMostselled(data.slice(0, 4))
    }

    const fetchNewPhone = async () => {
        const { data } = await commerce.products.list({ category_slug: ['newphone'] });
        setNewPhone(data.slice(0, 4))
    }

    const fetchNewAccessories = async () => {
        const { data } = await commerce.products.list({ category_slug: ['accessories'] });
        setNewAccessories(data.slice(0, 4))
    }

    useEffect(() => {
        commerce.products.list({ category_slug: ['brands'] }).then((product) => setBrands(product.data));

        fetchProducts()
        fetchNewPhone()
        fetchNewAccessories()
    }, [])

    return (
        <div>
            <Navbar />
            <Header />
            <ProductList title="Ən çox satılan məhsullar" products={mostselled} />
            <ProductList title="Yeni gələn məhsullar" products={newPhone} />
            <Advertise />
            <ProductList title="Yeni gələn aksessuarlar" products={accessories}/>
            <Count />
            <Advantages />
            <Brands brands={brands} />
            <Footer />
        </div>
    );
}

export const Advantages = ({datas}) => {
    return (
      <section id="advantages" className="container">
        <div>
          <img src={require('../../assets/Images/box.png')} alt="" />
          <span>Çatdirilma</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
        <div> 
          {/* {datas.map((el,index)=>(
           <img key={index} src={el.image.url} alt='logo'/>
          ))} */}
        <img src={require('../../assets/Images/credit.png')} alt="" />
          <span>Kredit</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
        <div>
        <img src={require('../../assets/Images/achievement.png')} alt="" />
          <span>Zəmanət</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
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
                        <img src={require("../../assets/Images/Rectangle168.jpg")} alt="page not found" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={require("../../assets/Images/Rectangle169.jpg")} alt="page not found"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Count = () => {
    return (
      <section id="count" className='container'>
        <div className="count_first">
          <div>
            <h3>Telefon</h3>
            <span>Məhsul sayi: 322</span>
            <a href="##">Məhsullara keçid {">"} </a>
          </div>
        </div>
        <div className="count_second">
          <div>
            <h3>Smart saat</h3>
            <span>Məhsul sayi: 46</span>
            <a href="##">Məhsullara keçid {">"} </a>
          </div>
          <div>
            <h3>Aksesuar</h3>
            <span>Məhsul sayi: 891</span>
            <a href="##">Məhsullara keçid {">"} </a>
           </div>
        </div>
      </section>
    )
  }


export const Brands = ({ brands }) => {
    return (
        <section id="brands">
            <div className="container">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {brands.map((el, index) => (
                        <SwiperSlide>
                            <div key={index} className="swiperslide">
                                <img src={el.image.url} alt="logo" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Home;
