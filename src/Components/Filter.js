import React from 'react'

const Filter = (props) => {
let category=props.category
let setCategory=props.setCategory
  function filterHandler(title){
    setCategory(title)
  }

  return (
    <div className="flex gap-5 justify-center mt-4">
      {
        props.filterData.map((brand) =>{
            return(
               <div key={brand.id} className={`border-2 border-black  rounded-md 
               ${
                  category === brand.title ? " bg-blue-500 border-white text-white" :" bg-transparent"
               }
              `}
                onClick={() =>filterHandler(brand.title)} 
               >
                 <button className="p-1 text-lg" >{brand.title}</button>
               </div>
            )
        })
      }
    </div>
  )
}

export default Filter
