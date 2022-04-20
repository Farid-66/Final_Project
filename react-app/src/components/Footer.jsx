import React from 'react'


const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row footermain'>
                    <div className='col-12 col-lg-3 footer_icons'>
                        <div className='logo d-flex'>
                            <img src={require("../assets/Images/Tello.png")} alt="" />
                            <span className="logo_text mx-3">Tello</span>
                        </div>
                        <div>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-youtube"></i>
                            <i class="fab fa-twitter"></i>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 footer_menu'>
                        <h3>Menu</h3>
                        <ul>
                            <li>Yeni</li>
                            <li>Endirimlər</li>
                            <li>Aksessuarlar</li>
                            <li>Bütün brendlər</li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 footer_help'>
                        <h3>Kömək</h3>
                        <ul>
                            <li>Tez-tez soruşulan suallar</li>
                            <li>Çatdirilma xidməti</li>
                            <li>Geri qaytarilma şərtləri</li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 footer_connect'>
                        <h3>Əlaqə</h3>
                        <ul>
                            <li>
                                <i class="fas fa-map-marker-alt"></i><span>M. K. Ataturk avenue 89, Baku, Azerbaijan</span>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i><span>example@gmail.com</span>
                            </li>
                            <li>
                                <i class="fas fa-phone"></i><span>*2108</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className="footerbottom">
                            <span><span>©</span>PeojectX 2021. Bütün hüquqlar qorunur.</span>
                            <div>
                                <span>Qaydalar və şərtlər</span>
                                <span>Məxfilik siyasəti</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer