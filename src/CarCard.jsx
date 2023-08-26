import React, { useState } from 'react';
import axios from 'axios';

const CarCard = ({ car }) => {
    const [isAvailable, setIsAvailable] = useState(car.is_available);

    const handleReservation = async () => {
        // Čitanje podataka iz session storage
        const user_id = sessionStorage.getItem('auth_id');
        const authToken = sessionStorage.getItem('auth_token');

        // Generisanje datuma od i do (na primjer, rezervacija od danas do sutra)
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        // Formatiranje datuma u 'YYYY-MM-DD' formatu
        const rent_start_date = today.toISOString().split('T')[0];
        const rent_end_date = tomorrow.toISOString().split('T')[0];

        // Izračunavanje ukupne cene (trenutno je uvek 1 dan)
        const daysRented = (new Date(rent_end_date) - new Date(rent_start_date)) / (1000 * 60 * 60 * 24);
        const total_price = daysRented * car.price_per_day;

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/rentals', {
                user_id: user_id,
                car_id: car.id,
                rent_start_date: rent_start_date,
                rent_end_date: rent_end_date,
                total_price: total_price
            }, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (response.status === 200 || response.status === 201) {
                // Ako je uspešno sačuvano, ažuriraj status automobila
                setIsAvailable(false);
            }
        } catch (error) {
            console.error('Error during reservation:', error);
        }
    };

    return (
        <div className="car-card">
            <h2>{car.brand.name} - {car.model}</h2>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Price per day:</strong> ${car.price_per_day}</p>
            <p><strong>Availability:</strong> {isAvailable ? "Available" : "Not Available"}</p>
            {isAvailable && <button onClick={handleReservation}>Rezerviši</button>}
        </div>
    );
}

export default CarCard;
