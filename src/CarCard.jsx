import React from 'react';
 

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <h2>{car.brand.name} - {car.model}</h2>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Price per day:</strong> ${car.price_per_day}</p>
            <p><strong>Availability:</strong> {car.is_available ? "Available" : "Not Available"}</p>
        </div>
    );
}

export default CarCard;
