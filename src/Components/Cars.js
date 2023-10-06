import React, { useState } from 'react'
import Car from "./Car"
const Cars = (props) => {
let data=props.data
let category=props.category
const[likedCars,setLikedCars]=useState([])
  function getCars(){
    let carsArray=[]
    if(category==="All"){
    Object.values(data).forEach((Cars) =>{
        Cars.forEach((Car) =>{
            carsArray.push(Car)
           
        })
    })
    return carsArray;
  }
    else{
      return data[category]
      
    }
  }
 
  return (
    <div className="flex flex-wrap justify-center">
      {
        getCars().map((car) =>{
            return(
                <Car key={car.id} car={car} likedCars={likedCars} setLikedCars={setLikedCars} />
            )
        })
      }
    </div>

  )
   
  
}

export default Cars
