import React from "react";
import { useNavigate } from 'react-router-dom'
import "./Category.css";
import { Link } from "react-router-dom";




const Category = ({ categories }) => {


    const navigate = useNavigate();


    return (
        <>

            <div className="shop-by-category">
                <div className="categories">

                    {categories?.map((e) => {
                        console.log(e.product)

                        return (
                            <Link to= {`/categories/${e.title}`} key={e.image}>
                                <div className="category">
                                    <img src={e.image} alt="" />
                                </div></Link>


                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Category;
