import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res)=>res.json())
        .then((data)=>setServices(data.categories))
    }, [])
    return (
        <div id="services" className="services_container">
            {
                services.map((service)=><Service key={service.idCategory} service={service}/>)
            }
        </div>
    );
};

export default Services;