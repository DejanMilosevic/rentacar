import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

const Ponuda = ({ cars }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [displayCars, setDisplayCars] = useState(cars); // Ovo je niz automobila koji će biti prikazan

    useEffect(() => {
        if (searchTerm === '') {
            setDisplayCars(cars);  
        } else {
            setDisplayCars(cars.filter(car => 
                car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.brand.name.toLowerCase().includes(searchTerm.toLowerCase())
            ));  
        }
    }, [searchTerm, cars]);

    return (
        <div className="ponuda-container">
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search by car model..." 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            {displayCars.map(car => <CarCard key={car.id} car={car} />)}
        </div>
    );
}

export default Ponuda;
