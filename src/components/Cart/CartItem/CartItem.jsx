import "./CartItem.css";
import { MdClose } from 'react-icons/md'
import prod from '../../../assets/products/earbuds-prod-1.webp'
const CartItem = () => {
    // const style = {
    //     width: 'fit-content',
    //     border: '2px solid rgba(0,0,0,0.2)',
    //     display: 'flex',
    //     marginRight: '10px',
    //     height: '50px'
    // }
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <div className="name-btn">
                    <span id="name">product name</span>
                    <MdClose className="close-btn" />
                </div>

                <div className="quantity_btn">
                    <span>+</span>
                    <span>5</span>
                    <span>-</span>
                </div>
                <div className="text">
                    <span style={{color: 'black'}}>3</span>
                    <span>X</span>
                    <span className="highlight">&#8377;1200</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
