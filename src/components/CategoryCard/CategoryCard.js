

import './CategoryCard.css';

function CategoryCard({ categoryImg, categoryName }) {
    return (
        <div className="card">
            <img src={categoryImg} className="card__img"/>
            <div className='card__title'>
                <span>{categoryName}</span>
            </div>
        </div>
    );
}

export default CategoryCard;