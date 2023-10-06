import { filterData } from "./data";
import data from './data.json'
import './App.css';
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Cars from "./Components/Cars";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
 const[cars,setCars]=useState(data.data)
 const[category,setCategory]=useState(filterData[0].title)
 
  return (
    <div className="bg-blue-200 min-h-[100vh]">
    <div>
    <Navbar/>
    </div>
     <div>
     <Filter filterData={filterData} category={category} setCategory={setCategory} />
     </div>

     <div>
     <Cars data={cars} category={category} />
     </div>

     <Footer/>
    </div>
    
  );
  }

export default App;
