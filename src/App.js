import logo from './logo.svg';
import './App.css';
import CarRentalHome from './CarRentalHome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CarCard from './CarCard';
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/'  
});
function App() {

  const [cars, setCars] = useState([]);

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
    <div className="App">
     <CarRentalHome></CarRentalHome>
    
    </div>
  );
}

export default App;
