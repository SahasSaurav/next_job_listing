import { Children, useContext } from "react"
import { JobContext } from "../context/JobContext"
import FilterButton from "./FilterButton"

type clearFilter = () => void

interface FilterBoxContext{
  activeTags:string[],
  clearFilter:clearFilter,
}

const FilterBox:React.FC = () => {
  const {activeTags,clearFilter}=useContext<FilterBoxContext>(JobContext)
  return (
    <div className="flex justify-center items-center w-full -mt-14">
      <div className="flex justify-between px-4 py-3 items-center bg-white shadow-lg  max-w-screen-lg w-full rounded-md " >
        <span className="flex flex-wrap gap-x-2 gap-y-3  w-full h-full">
          {Children.toArray(activeTags.map(tag=>(<FilterButton tagName={tag} />)))}
        </span>
        <button className="text-desaturated-cyan font-medium text-lg tracking-wide  transform -translate-x-4 border-b-2 border-white hover:border-desaturated-cyan focus:outline-none leading-4 focus:border-desaturated-cyan" onClick={()=>clearFilter()} >Clear</button> 
      </div>
    </div>
  )
}

export default FilterBox
