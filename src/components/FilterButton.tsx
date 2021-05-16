import { useContext } from "react"
import { JobContext } from "../context/JobContext"

interface FilterButtonProps{
  tagName:string,
}

type removeFilterTag=(tagName)=>void

interface FilterbuttonContextType{
  removeFilterTag:removeFilterTag
}

const FilterButton:React.FC<FilterButtonProps> = ({tagName}) => {
  
  const{removeFilterTag}=useContext<FilterbuttonContextType>(JobContext)

  return (
    <div className="flex  justify-center items-center h-auto">
      <div className="shadow-md flex rounded-md">
      <span className="flex justify-center items-center px-2 py-1 font-sans tracking-wide font-semibold  text-desaturated-cyan text-base bg-cyan-filter rounded-l-md ">{tagName}</span>
      <button className="flex justify-center items-center bg-desaturated-cyan text-cyan-filter  rounded-r-md transition-colors duration-300 hover:bg-grayish-cyan-dark cursor-pointer" style={{
        height:"36px",
        width:"36px",
      }} onClick={()=>removeFilterTag(tagName)}>
       <svg className="w-4 h-4  transform scale-105 pointer-events-none" xmlns="http://www.w3.org/2000/svg" ><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
      </button>
      </div>
    </div>
  )
}

export default FilterButton
