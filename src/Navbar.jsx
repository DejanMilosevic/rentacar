import React from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import axios from 'axios';  // Uvezi axios

function Navbar({token,setToken}) {
    const navigate = useNavigate();  // Hook za preusmeravanje korisnika

    const handleLogout = async () => {
        try {
            const authToken = sessionStorage.getItem('auth_token');   

            const response = await axios.post('http://127.0.0.1:8000/api/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });

            if (response.status === 200) {
                sessionStorage.removeItem('auth_token');  
                setToken(null)
                navigate('/');  
            } else {
                console.error('Error during logout:', response.data);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>

                {/* Ako token nije postavljen (null), prikaži Login i Register */}
                {!token && <li><Link to="/login">Login</Link></li>}
                {!token && <li><Link to="/register">Register</Link></li>}

                {/* Ako token postoji (nije null), prikaži Ponuda */}
                {token && <li><Link to="/ponuda">Ponuda</Link></li>}
                {token && <li onClick={handleLogout}><a href="#">Logout</a></li>} 
            </ul>
        </nav>
    );
}

export default Navbar;
