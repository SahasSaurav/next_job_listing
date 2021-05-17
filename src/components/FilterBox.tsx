import { Children, useContext } from "react"
import { JobContext } from "../context/JobContext"
import FilterButton from "./FilterButton"
import {motion,AnimatePresence} from 'framer-motion'

type clearFilter = () => void

interface FilterBoxContext{
  activeTags:string[],
  clearFilter:clearFilter,
}

const fliterBoxVariant={
  hidden:{
    scale:0,
    opacity:0
  },
  show:{
    scale:1,
    opacity:1,
    transition:{
      duration: 0.25,
      ease:'easeInOut',
    }
  },
  exit:{
    y:'-100vh',
    opacity:0,
    transition:{
      delay:0.16,
      duration:0.275,
      type:'string',
      stifness:110,
    }
  }
}

const spanVariant={
  animate:{
    transitionDelay:1,
  }
}

const FilterBox:React.FC = () => {

  const {activeTags,clearFilter}=useContext<FilterBoxContext>(JobContext)

  return (
    <motion.div className="flex justify-center items-center w-full -mt-14" variants={fliterBoxVariant} initial="hidden" animate="show" exit="exit">
      <div className="flex justify-between px-4 py-3 items-center bg-white shadow-lg  max-w-screen-lg w-full rounded-md " >
        <motion.span  className="flex flex-wrap gap-x-2 gap-y-3  w-full h-full mr-4">
          <AnimatePresence>
            {Children.toArray(activeTags.map(tag=>(<FilterButton key={tag} tagName={tag} />)))}
          </AnimatePresence>
        </motion.span>
        <button className="text-desaturated-cyan font-medium text-lg tracking-wide  transform -translate-x-4 border-b-2 border-white hover:border-desaturated-cyan focus:outline-none leading-4 focus:border-desaturated-cyan" onClick={()=>clearFilter()} >Clear</button> 
      </div>
    </motion.div>
  )
}

export default FilterBox
