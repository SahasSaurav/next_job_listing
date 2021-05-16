import Head from "next/head";
import { Children,useContext,} from "react";

import Header from '../components/Header'
import JobCard from '../components/JobCard'
import FilterBox from "../components/FilterBox";
import { JobContext } from "../context/JobContext";
import { FilterTags, JobType } from "../types/jobsTypes";



const Home:React.FC = () => {

  const {jobs,activeTags}=useContext<{jobs:JobType[],activeTags:FilterTags[]}>(JobContext)

  

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <main className="container mx-auto p-4   max-w-screen-xl">
        {activeTags.length>0  && (<FilterBox />)}
        <div className=" flex flex-col items-center mt-16 mb-6 md:my-5 space-y-16 lg:space-y-6  ">
        {
          Children.toArray(jobs.map(job=>(<JobCard job={job} />)))
        }
        </div>
    </main>
    </>
  )
};


export default Home;
