import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ axiosInstance, setToken }) {
    const navigate = useNavigate();
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
                sessionStorage.setItem("auth_id", response.data.id);
                sessionStorage.setItem("auth_email", response.data.email);
                sessionStorage.setItem("auth_name", response.data.name);
                sessionStorage.setItem("auth_token", response.data.token);
                sessionStorage.setItem("auth_role", response.data.role);
                setToken(response.data.role);

                // Provera uloge korisnika i preusmeravanje na odgovarajuću rutu
                if (response.data.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/ponuda');
                }

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
