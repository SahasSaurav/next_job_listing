import React from 'react'

const FilterBox:React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-between m-2 items-center bg-white shadow-lg h-20 max-w-screen-lg w-full rounded-md" style={{transform:'translateY(-65%)'}}>
        <span></span>
        <button className="text-desaturated-cyan font-medium  transform -translate-x-4 border-b-2 border-white hover:border-desaturated-cyan focus:outline-none leading-4 focus:border-desaturated-cyan " >Clear</button> 
      </div>
    </div>
  )
}

export default FilterBox
