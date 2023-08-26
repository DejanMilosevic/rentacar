import React from 'react';
import axios from 'axios';

const AdminBoard = ({ cars }) => {
    const deleteCar = async (carId) => {
        const authToken = sessionStorage.getItem('auth_token');

        try {
            await axios.delete(`http://127.0.0.1:8000/api/cars/${carId}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
            // Nakon uspešnog brisanja, možete osvežiti listu automobila ili ukloniti automobil iz trenutnog stanja
            // Na primer: setCars(cars => cars.filter(car => car.id !== carId));
            window.location.reload(); // Ovo je brzo rešenje za osvežavanje stranice. Bolje je koristiti state i osvežiti listu automobila bez ponovnog učitavanja stranice.
        } catch (error) {
            console.error("Error during car deletion:", error);
            // Ovde možete dodati poruku o grešci za korisnika
        }
    }

    return (
        <div className="admin-board">
            <h2>Lista svih automobila</h2>

            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Price per day</th>
                        <th>Availability</th>
                        <th>Obrisi</th> {/* Dodata kolona za brisanje */}
                    </tr>
                </thead>
                <tbody>
                    {cars.map(car => (
                        <tr key={car.id}>
                            <td>{car.brand.name}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>${car.price_per_day}</td>
                            <td>{car.is_available ? "Available" : "Not Available"}</td>
                            <td>
                                <button onClick={() => deleteCar(car.id)}>Obriši</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminBoard;
