// Login.js
import React, { useState } from 'react';
 

function Login({axiosInstance}) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosInstance.post('/api/login', formData)
            .then(response => {
                console.log(response.data);
                // You might want to handle successful login here
                // Like storing tokens or redirecting
            })
            .catch(error => {
                console.error("Error during login:", error);
                // Handle login error, for example, display an error message
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
