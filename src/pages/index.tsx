import Head from "next/head";
import { Children,useContext,} from "react";
import { AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          {activeTags.length>0  && (<FilterBox />)}
        </AnimatePresence>        
        <div className=" flex flex-col items-center mt-16 mb-6 md:my-5 space-y-16 lg:space-y-6  ">
          <AnimatePresence>
            {
              Children.toArray(jobs.map(job=>(<JobCard job={job} />)))
            }
          </AnimatePresence>
        </div>
    </main>
    </>
  )
};


export default Home;
