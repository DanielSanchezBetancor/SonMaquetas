import { useEffect, useState } from "react";
import "./CarrouselItem.css";
import woodTexture from "../../assets/wood-texture.jpg";

function CarrouselItem({ imgSrc, id }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                return res;
            })
            .then((json) => {
                setTitle(json.title);
                setDescription(json.description);
            }, []);
    });
    return (
        // <div className="carousel-item" width="100%">
        //     <div className="carousel-item__description">
        //         <h1>{title}</h1>
        //         <h2 className="item__description__h2">{description}</h2>
        //         <button className="btn">Ir al producto </button>
        //     </div>
        //     <img
        //         width="40%"
        //         src={imgSrc}
        //         className="carousel-item__img"
        //     />
        // </div>
        <div className="carousel-item">
            <div className="carousel-item__description">
                <h1 className="item__description__h1">{title}</h1>
                <h2 className="item__description__h2">{description}</h2>
            </div>
            {/* <div className="carousel-item__img">
                <img src={imgSrc} className="carousel-item__img__element" />
            </div> */}
            <div className="carousel-item__img">
                <img src={imgSrc} />
            </div>
            <div className="carousel-item__btn">
                <button className="btn">Ir al producto</button>
            </div>
        </div>
    );
}

export default CarrouselItem;
