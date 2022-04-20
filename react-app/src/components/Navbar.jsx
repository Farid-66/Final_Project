import React from 'react'


function navbar() {
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex'>
                            <button className='menu-btn'><i class="fa-solid fa-bars"></i></button>
                            <div className='logo'>
                                <img src={require('../../src/assets/Images/Tello.png')} />
                                <span>Tello</span>
                            </div>
                        </div>
                        <div>
                            <Search />
                        </div>
                        <div>
                            <User />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <div className='navbar'>
                            <ul className='nav-items'>
                                <li className='nav-item'>Yeni</li>
                                <li className='nav-item'>Apple</li>
                                <li className='nav-item'>Samsung</li>
                                <li className='nav-item'>Xiaomi</li>
                                <li className='nav-item'>Redmi</li>
                                <li className='nav-item'>Bütün Brendlər</li>
                                <li className='nav-item'>Aksessuarlar</li>
                                <li className='nav-item'>Endirimlər</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


function Search() {
    return (
        <div className='search'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type={'text'} placeholder="Axtarış..." />
        </div>
    )
}


function User() {
    return (
        <div className='users'>
            <ul>
                <li className='user'><i class="fa-solid fa-user"></i></li>
                <li className='favorite'><i class="fa-solid fa-heart"></i></li>
                <li className='cart'><i class="fa-solid fa-cart-shopping"> <span>11</span> </i></li>
            </ul>
        </div>
    )
}




export default navbar