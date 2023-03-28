import React from "react";
import {useNavigate} from 'react-router-dom'
import "./Category.css";




const Category = ({ categories }) => {

    
    const navigate = useNavigate();

    const filter = () =>{

    }

    return (
        <>
        
            <div className="shop-by-category">
                <div className="categories">

                    {categories?.map((e) => {
                        console.log(e.product)
                        
                        return (
                          
                                <div key={e.image} className="category"
                                onClick={()=> navigate(`/category/1`)}
                                >
                                    <img src={e.image} alt="" />
                                </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Category;
