import "./Category.css";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from '../../utils/api'
import { useState } from "react";
import { useEffect } from "react";


const Category = () => {
    const { title } = useParams();


    const [categories, setCategories] = useState([])


    useEffect(() => {
        const getCategories = () => {
            fetchDataFromApi().then(res => {
                setCategories(res);
            })
        }
        getCategories();
    }, [])

    const filtercategories = categories.filter(category => category.title === title);
    const renderedCategories = filtercategories?.[0]?.product?.map((prod) => {
        return (
            <>
            <div className="product-card">
                
                <div className="thumbnail">
                    <img src={prod.url} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{prod.title.slice(0, 15)}...</span>
                    <span className="price">&#8377; {prod.price}</span>
                </div>
            </div>
            </>
        )
    })


    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
             {title}
            </div>
            <div className="card-flex">
            {renderedCategories}
            </div>
            
        </div>
    </div>;
};

export default Category;
