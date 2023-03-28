import "./Products.css";
import Product from './Product/Product'
import { useContext } from "react";
import {Context} from "../../utils/Context";



const Products = ({ innerPage, headingText}) => {
    const {products} = useContext(Context)
    console.log(products)
    const render = products?.map((product) => <Product key={product.url} {...product}/>)
    return(
        <>
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}

            <div className="products"> 
                {render}
            </div>
        </div>
        </>
    );
};

export default Products;
