import { useEffect, useState } from "react";
import "./CarouselItem.css";

function CarouselItem({ id, show }) {
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
        <div
            className={"carousel__item dflex-col-cent" + (show ? " show" : "")}
        >
            <div className="carousel__item__description">
                <h1 className="carousel__item__description__header">{title}</h1>
                <h2 className="carousel__item__description__subheader">
                    {description}
                </h2>
            </div>
            <div className="carousel__item__description__button__wrapper">
                <button className="carousel__item__description__button">
                    Ir al producto
                </button>
            </div>
        </div>
    );
}

export default CarouselItem;
