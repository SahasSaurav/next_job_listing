import { createContext,useState,useEffect} from "react"
import { useQuery } from "react-query";

import Loader from '../components/Loader'
import { JobType } from "../types/jobsTypes";

export const JobContext= createContext(null)

interface JobProviderProps{
  children:JSX.Element
}

const fetchJobs = async ():Promise<JobType[]> => {
  const endpoint = `/api/jobs`;
  const res = await fetch(endpoint);
  return res.json();
};

const JobProvider:React.FC<JobProviderProps>=({children})=>{

  const {data:jobs,isLoading,isError,error}=useQuery<JobType[]>('jobs',fetchJobs,)
  const [activeTags,setActiveTags]=useState([])
  const [filteredJob,setFilteredJob]=useState<JobType[]>([])

  const addFilterTag=(tagName:string):void=>{

    setActiveTags(prevActive=>{
      //remove replication
      if(!prevActive.includes(tagName)){
        return [...prevActive,tagName]
      }else{
        return [...prevActive]
      }
    })
  }

  const removeFilterTag=(tagName:string):void=>{
    const currentActive=activeTags.filter(tag=>tag!==tagName)
    setActiveTags([...currentActive])
  }

  const clearFilter=():void=>{
    setActiveTags([])
    setFilteredJob([...jobs])
  }

  const filterByTags=():void=>{
    if(activeTags.length){
     const filtered=jobs.filter((job)=>{
       return activeTags.every((tag)=>{
         return (
           job.role===tag||
           job.level===tag|| 
           job.languages.includes(tag)||
           job.tools.includes(tag)
           )
       })
     })
     setFilteredJob([...filtered])
    }else{
      setFilteredJob([...jobs])
    }
  }

  useEffect(()=>{
    if(!isLoading){
      setFilteredJob([...jobs])
    }
  },[isLoading])

  useEffect(()=>{
    if(!isLoading){
      filterByTags()
    }
  },[isLoading,activeTags])

  if(isLoading && !filteredJob.length){
    return (
      <div className="w-full h-screen flex  justify-center items-center">
        <Loader />
      </div>
    )
  }

  return(
    <JobContext.Provider value={{jobs:filteredJob,activeTags:activeTags,addFilterTag,removeFilterTag,clearFilter}}>
      {children}
    </JobContext.Provider>
  )
}

export default JobProvider;