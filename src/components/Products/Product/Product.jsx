import "./Product.css";




const Product = (props) => {
    return(
        <>
        
        <div className="product-card">
            <div className="thumbnail">
                <img src={props.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{props.title.slice(0,15)}...</span>
                <span className="price">&#8377; {props.price}</span>
            </div>
        </div>
        </>
    );
};

export default Product;
