import "./SingleProduct.css";
import RelatedProducts from './RelatedProducts/RelatedProducts'

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from 'react-icons/fa';
import prod from '../../assets/products/earbuds-prod-1.webp';



const SingleProduct = () => {

    const style = {
        width: 'fit-content',
        border: '2px solid rgba(0,0,0,0.2)',
        display: 'flex',
        marginRight: '10px',
        height: '50px'
    }

    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left1">
                    <img src={prod} alt="" />
                </div>
                <div className="right1">
                    <span className="name">Product name</span>
                    <span className="price">Price</span>
                    <span className="desc">Product Description</span>
                    <div className="cart-buttons">
                        <div style={style} id="quantity_btn">
                            <span>+</span>
                            <span>5</span>
                            <span>-</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20} />
                            ADD To CART
                        </button>
                    </div>

                    <span className="divider" />

                    <div className="info-item">
                        <span className="text-bold">Category:
                            <span>Headphones</span>
                        </span>
                        <span className="text-bold">Share:
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaTwitter size={16}/>
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
