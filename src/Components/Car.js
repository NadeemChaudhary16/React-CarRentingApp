import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import {toast} from 'react-toastify'

const Car = (props) => {
    let car=props.car
    let likedCars=props.likedCars
    let setLikedCars=props.setLikedCars
    function clickhandler(){
     if(likedCars.includes(car.id)){
      setLikedCars((pre) => pre.filter((cid) => (cid !==car.id)))
      toast.warning("like removed")
     }
     else{
      if(likedCars.length==0){
        setLikedCars([car.id])
      }
      else{
        setLikedCars((pre) =>[...pre,car.id])
      }
      toast.success("like added")
     }
    }
  return (
    <div className="border rounded-xl p-2 m-4 border-blue-400 ">
      <div className="relative">
        <img src={car.image} className="rounded-xl" alt="" />
        <button onClick={clickhandler} className="absolute right-2">
          {
              likedCars.includes(car.id) ? (<FcLike size={30}></FcLike>) :(<FcLikePlaceholder size={30}></FcLikePlaceholder>) 
            
          }
        </button>
      </div>
      <div className="mt-2">
        <h2 className="font-bold text-xl">{car.name}</h2>
        <h3 className="text-green-600 font-bold">{car.price} Rs/month</h3>
        <p className="border-2 border-dotted border-blue-500 rounded-xl w-14 text-center font-sans">{car.year}</p>
        <p>{car.description}</p>
       
      </div>
      <button className="bg-green-500 border border-green-900 rounded-xl p-1 mt-2">Rent Now</button>
    </div>
  )
}

export default Car
