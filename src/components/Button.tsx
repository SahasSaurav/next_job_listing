import { useContext } from "react";
import { JobContext } from "../context/JobContext";

interface ButtonProps {
  tagName: String
}

type addFilterTag=(tagName:String)=>void

interface ButtoncontextType{
  addFilterTag:addFilterTag
}

const Button: React.FC<ButtonProps> = ({tagName}) => {
  const {addFilterTag}=useContext<ButtoncontextType>(JobContext)

  return (
    <button onClick={()=>addFilterTag(tagName)} className="p-2 mt-3 mr-3  tracking-wide text-desaturated-cyan font-sans font-semibold bg-cyan-background rounded-md shadow transition-colors duration-300 hover:bg-desaturated-cyan hover:text-cyan-background focus:outline-none focus:ring-4 focus:ring-blue-300">
      {tagName}
    </button>
  )
}

export default Button;



