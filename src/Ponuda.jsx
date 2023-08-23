import React from 'react';
import CarCard from './CarCard';
 

const Ponuda = ({ cars }) => {
    return (
        <div className="ponuda-container">
            {cars.map(car => <CarCard key={car.id} car={car} />)}
        </div>
    );
}

export default Ponuda;
