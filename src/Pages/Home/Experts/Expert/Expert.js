import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <h2>{name}</h2>
            <img style={{width: "250px",}} src={img} alt="" />
        </div>
    );
};

export default Expert;
