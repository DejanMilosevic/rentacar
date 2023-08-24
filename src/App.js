import logo from './logo.svg';
import './App.css';
import CarRentalHome from './CarRentalHome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CarCard from './CarCard';
import Ponuda from './Ponuda';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/'  
});
function App() { 
  const [cars, setCars] = useState([]);
  const [token, setToken] = useState(null); 
  useEffect(() => { 
      axiosInstance.get('/api/cars')
          .then(response => {
              setCars(response.data.cars);  
              console.log(response.data.cars)
          })
          .catch(error => {
              console.error("There was an error fetching the cars:", error);
          });
  }, []); 



  return (
    <Router>
    <div className="App">
      <Navbar token={token} setToken={setToken}/> 
      <Routes> 
        <Route path="/" element={<CarRentalHome />} exact /> 
        <Route path="/ponuda" element={<Ponuda cars={cars} />} />
        <Route path="/register" element={<Register axiosInstance={axiosInstance} />} />
        <Route path="/login" element={<Login axiosInstance={axiosInstance} setToken={setToken} />} />

        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
