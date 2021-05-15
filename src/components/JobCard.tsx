import Button from './Button';
import Badge from './Badge'
import { jobType } from '../types/jobsTypes';


const JobCard:React.FC<{job:jobType}> = ({job}) => {
  const{company,contract,featured,languages,level,location,logo,position,postedAt,role,tools}=job
  console.log({job})
  const filterTag=[role,level,...languages,...tools]
  return (
    <div className=" flex flex-col lg:flex-row lg:justify-start lg:items-center bg-white px-6 py-4  rounded-lg shadow w-full max-w-screen-lg leading-5 ">
      {/* images */}
        <img
          src={`/assets/images/${logo}`}
          alt=""
          className="flex justify-center items-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 object-conatin  md:mb-0 mr-4 -mt-16 lg:mt-0"
        />
      {/* details */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center flex-wrap w-full " >
        <div className="flex-col space-y-2 border-b-2 py-3 border-gray-300  lg:py-0 lg:border-b-0">
          <span className="flex items-baseline space-x-3">
            <h3 className="text-de-dark-cyan font-bold">{company}</h3>
            {job.new===true ? <Badge name="New!" /> : null}
            {featured===true ? <Badge name="featured" /> : ""}
          </span>
          <h2 className="text-gray-900 font-bold text-xl">{position}</h2>
          <span className="flex space-x-3 items-baseline font-sans font-medium  text-dark-gray-cyan ">
            <p className="">{postedAt}</p>
            <p className="font-bold text-xl">.</p>
            <p className="">{contract}</p>
            <p className="font-bold text-xl">.</p>
            <p className="">{location}</p>
          </span>
        </div>
        {/* filter button */}
        <div className="flex justify-start items-center flex-wrap">
         {filterTag.map((tag,index)=><Button name={tag} key={index} />)}
        </div>
      </div>
    </div>
    // <div className="">Hello</div>
  );
};


export default JobCard;
