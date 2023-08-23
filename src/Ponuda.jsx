import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

const Ponuda = ({ cars }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterAvailable, setFilterAvailable] = useState(false); // Novo stanje za filtriranje po dostupnosti
    const [displayCars, setDisplayCars] = useState(cars); 

    useEffect(() => {
        let filteredCars = cars;

        if (searchTerm !== '') {
            filteredCars = filteredCars.filter(car => 
                car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.brand.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (filterAvailable) {
            filteredCars = filteredCars.filter(car => car.is_available === 1);
        }

        setDisplayCars(filteredCars);

    }, [searchTerm, cars, filterAvailable]); // Dodajemo filterAvailable kao zavisnost

    return (
        <div className="ponuda-container">
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search by car model..." 
                    value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button onClick={() => setFilterAvailable(!filterAvailable)}>
                    {filterAvailable ? 'Show All Cars' : 'Show Available Cars'}
                </button>
            </div>
            {displayCars.map(car => <CarCard key={car.id} car={car} />)}
        </div>
    );
}

export default Ponuda;
