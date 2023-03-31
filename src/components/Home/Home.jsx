import "./Home.css";
import Banner from "./Banner/Banner";
import Category from "./Category/Categories";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/Context";
import { fetchDataFromApiPro } from '../../utils/apipro'





const Home = () => {
    const{ categories, setCategories} = useContext(Context);
    const{ products, setProducts} = useContext(Context);
    useEffect(() =>{
        getCategories();
        getProducts();
    }, [])



    const getProducts = () =>{
        fetchDataFromApiPro().then(res =>{
             setProducts(res);
        })
    }


    const getCategories = () =>{
        fetchDataFromApi().then(res =>{
            setCategories(res);
        })
    }

    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products products={products} headingText= 'Popular Products'/>
            </div>
        </div>

    </div>;

};

export default Home;
