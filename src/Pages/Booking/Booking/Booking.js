import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {bookingId} = useParams();
    return (
        <div>
            <h1>This is booking {bookingId}</h1>
        </div>
    );
};

export default Booking;