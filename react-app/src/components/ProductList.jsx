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

                        <div className='row'>
                            <div className='col-12'>
                                <div className='productlist'>

                                    {props.products.map((e)=>(
                                        <div className='product-card'>
                                        <div className='product-fovarite'>
                                            <button>
                                                <i class="fa-solid fa-heart"></i>
                                            </button>
                                        </div>
                                        <div className='prodct-img'>
                                            <img src={e.image.url} alt="not found"/>
                                        </div>
                                        <div className='prodct-title'>
                                            <h3>{e.name}</h3>
                                        </div>
                                        <div className='prodct-price'>
                                            <span>{e.price.formatted_with_code}</span>
                                        </div>
                                    </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ProtuctList