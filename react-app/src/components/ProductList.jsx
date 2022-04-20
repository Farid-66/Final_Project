import React from 'react'

function ProtuctList(props) {
    return (
        <section id='products'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='header-product'>
                            <p>{props.title}</p>
                            <button>Hamısına bax <i class="fa-solid fa-angle-right"></i></button>
                        </div>

                        <Products />
                    </div>
                </div>
            </div>
        </section>
    )
}



export function Products() {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='productlist'>
                <div className='product-card'>
                    <div className='product-fovarite'>
                        <button>
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <div className='prodct-img'>
                        <img src={require('../../src/assets/Images/Rectangle158.jpg')} />
                    </div>
                    <div className='prodct-title'>
                        <h3>Apple  iPhone 12, 64 GB, Purple</h3>
                    </div>
                    <div className='prodct-price'>
                        <span>3544 <i class="fa-solid fa-manat-sign"></i></span>
                    </div>
                </div>

                <div className='product-card'>
                    <div className='product-fovarite'>
                        <button>
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <div className='prodct-img'>
                        <img src={require('../../src/assets/Images/Rectangle158.jpg')} />
                    </div>
                    <div className='prodct-title'>
                        <h3>Apple  iPhone 12, 64 GB, Purple</h3>
                    </div>
                    <div className='prodct-price'>
                        <span>3544 <i class="fa-solid fa-manat-sign"></i></span>
                    </div>
                </div>

                <div className='product-card'>
                    <div className='product-fovarite'>
                        <button>
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <div className='prodct-img'>
                        <img src={require('../../src/assets/Images/Rectangle158.jpg')} />
                    </div>
                    <div className='prodct-title'>
                        <h3>Apple  iPhone 12, 64 GB, Purple</h3>
                    </div>
                    <div className='prodct-price'>
                        <span>3544 <i class="fa-solid fa-manat-sign"></i></span>
                    </div>
                </div>

                <div className='product-card'>
                    <div className='product-fovarite'>
                        <button>
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <div className='prodct-img'>
                        <img src={require('../../src/assets/Images/Rectangle158.jpg')} />
                    </div>
                    <div className='prodct-title'>
                        <h3>Apple  iPhone 12, 64 GB, Purple</h3>
                    </div>
                    <div className='prodct-price'>
                        <span>3544 <i class="fa-solid fa-manat-sign"></i></span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}



export default ProtuctList