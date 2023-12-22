import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';



function App() {
  const [things, setThings] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/data")
    .then((response) => response.json())
    .then((jsonData) => setThings(jsonData))
    .catch((error) => {
      console.log('This is the error: ', error)
    })
    console.log('This is data: ', things)
  }, [])
  
  
 

  
  
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        <Card data = {things} />
      </section>
      
    </div>
  );
}

export default App;
