import React from 'react';
 

const CarRentalHome = () => {
    return (
        <div className="car-rental-home">
            <header className="rental-header">
                <h1>Welcome to Car Rentals</h1>
                <p>Your journey starts here!</p>
            </header>
            <section className="rental-features">
                <div className="feature">
                    <h2>Wide Selection</h2>
                    <p>Choose from a range of cars to suit your needs.</p>
                </div>
                <div className="feature">
                    <h2>Best Prices</h2>
                    <p>Affordable rates for daily, weekly, or monthly rentals.</p>
                </div>
                <div className="feature">
                    <h2>Excellent Service</h2>
                    <p>24/7 customer support for a seamless experience.</p>
                </div>
            </section>
        </div>
    );
}

export default CarRentalHome;
