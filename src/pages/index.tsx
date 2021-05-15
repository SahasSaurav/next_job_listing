import Head from "next/head";
import { Children,useState } from "react";
import {useRouter} from 'next/router';
import { useQuery } from "react-query";
import { GetStaticProps } from "next";
import { jobType } from "../types/jobsTypes";
import Loader from '../components/Loader'
import Header from '../components/Header'
import JobCard from '../components/JobCard'
import FilterBox from "../components/FilterBox";

const fetchJobs = async () => {
  const endpoint = `/api/jobs`;
  const res = await fetch(endpoint);
  return res.json();
};

const Home:React.FC = () => {
  const {data:jobs,isLoading,isError,error}=useQuery('jobs',fetchJobs,)
  
  const [active,setactive]=useState('')

  if(isLoading){
    return (
      <div className="w-full h-screen flex  justify-center items-center">
        <Loader />
      </div>
    )
  }


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <main className="container mx-auto p-4  max-w-screen-xl">
        <FilterBox />
        <div className=" flex flex-col items-center my-5 space-y-16 lg:space-y-6  ">
        {
          Children.toArray(jobs.map(job=>(<JobCard job={job} />)))
        }
        </div>
    </main>
    </>
  )
};


export default Home;
