
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemCardList from "../../components/ItemCardList/ItemCardList.js";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { getData } from "../../utils/Utils";
import "./Category.css";

function Category() {
    let { id } = useParams();
    const data = getData();
    //There should be only one result per ID
    const category = data.categories.filter(category => category.id === id)[0];
    return (
        <>
            <Navbar />
            <section className="category dflex-col-cent">
                <p className="category__header">{category.name}</p>
                <p className="category__description">{category.description}</p>
                <div className="category__product-list">
                    <ItemCardList category={category}/>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Category;
