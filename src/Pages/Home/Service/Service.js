import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = service;
    return (
        <div>
            <div className="service py-5">
                <h1 className="text-success">{strCategory}</h1>
                <img src={strCategoryThumb} alt="" />
            </div>
            <Link to={`/booking/${idCategory}`}>
                <button className="btn-warning">book {strCategory.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;