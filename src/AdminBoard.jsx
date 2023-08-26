import React from 'react';

const AdminBoard = ({ cars }) => {
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminBoard;
