import React from 'react';
import Expert from './Expert/Expert';
import exper1 from './images/1.jpg';
import exper2 from './images/2.jpg'
import exper3 from './images/3.jpg'
import exper4 from './images/4.jpg'
const Experts = () => {
    const experts = [
        {
            id: 1,
            name: "Rejaul Karim",
            img: exper1
        },
        {
            id: 2,
            name: "Rejaul Karim",
            img: exper2
        },
        {
            id: 3,
            name: "Rejaul Karim",
            img: exper3
        },
        {
            id: 4,
            name: "Rejaul Karim",
            img: exper4
        },
        {
            id: 5,
            name: "Rejaul Karim",
            img: exper3
        },
        {
            id: 6,
            name: "Rejaul Karim",
            img: exper3
        },

    ]
    return (
        <div id="experts">
            <h1>OUR EXPERTS</h1>
            <div className="row">
                {
                    experts.map((expert) => <Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;