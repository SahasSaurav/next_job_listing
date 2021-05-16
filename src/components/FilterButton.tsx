import { useContext } from "react"
import { JobContext } from "../context/JobContext"
import {motion} from 'framer-motion';
interface FilterButtonProps{
  tagName:string,
}

type removeFilterTag=(tagName)=>void

interface FilterbuttonContextType{
  removeFilterTag:removeFilterTag
}

const filterButtonVariant={
  hidden:{
    scaleX:0,
    opacity:0,
  },
  show:{
    scaleX:1,
    opacity:1,
    transition:{  
      scalex:{
        duration:0.15,
        type:"string",
        stifness:150,
        damping:15,
      },   
      opacity:{
        duration:0.1
      }
    }
  },
  exit:{
    scale:0,
    transition:{
      duration:0.15
    }
  }
}


const FilterButton:React.FC<FilterButtonProps> = ({tagName}) => {
  
  const{removeFilterTag}=useContext<FilterbuttonContextType>(JobContext)

  return (
    <motion.div className="flex  justify-center items-center h-auto origin-left" variants={filterButtonVariant} initial="hidden" animate="show" exit="exit" >
      <div className="shadow-md flex rounded-md focus-within:ring-2 focus-within:ring-blue-400">
      <span className="flex justify-center items-center px-2 py-1 font-sans tracking-wide font-semibold  text-desaturated-cyan text-base bg-cyan-filter rounded-l-md ">{tagName}</span>
      <button className="flex justify-center items-center bg-desaturated-cyan text-cyan-filter  rounded-r-md transition-colors duration-300 hover:bg-grayish-cyan-dark cursor-pointer focus:outline-none" style={{
        height:"36px",
        width:"36px",
      }} onClick={()=>removeFilterTag(tagName)}>
       <svg className="w-4 h-4  transform scale-105 pointer-events-none" xmlns="http://www.w3.org/2000/svg" ><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
      </button>
      </div>
    </motion.div>
  )
}

export default FilterButton
