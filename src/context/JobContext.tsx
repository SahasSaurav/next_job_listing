import { createContext,useState,useEffect} from "react"
import { useQuery } from "react-query";

import Loader from '../components/Loader'
import { FilterTags, JobType } from "../types/jobsTypes";

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
  const [activeTags,setActiveTags]=useState(null)
  const [filteredJob,setFilteredJob]=useState<JobType[]>([])

  const addFilterTag=(tagName)=>{
      setActiveTags(prevActive=>[...prevActive,tagName])
  }

  const removeFilterTag=(tagName)=>{
    const currentActive=activeTags.filter(tag=>tag!==tagName)
    setActiveTags([...currentActive])
  }

  const clearFilter=()=>{
    setActiveTags([])
    setFilteredJob([...jobs])
  }

  const filterByTags=()=>{
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
  
  console.log({filteredJob})

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