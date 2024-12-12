/* eslint-disable react/prop-types */
import {FaMapMarker } from 'react-icons/fa'
import { useState } from "react"
import { Link } from "react-router-dom"

const JobListing = ({job}) => {

    // with useState that we are emplementing we want to create a state that will allow use to write the job description into small details then havea  a button that will say show more or less
    const [showFullDescription, setShowFullDescription ] = useState(false);
 
    let description = job.description;

    if(!showFullDescription){
        /// eslint-disable-next-line no-unused-vars
        description = description.substring(0, 90) +  '...';
    }
 
    return (
    <div className="bg-gray-400 rounded-xl shadow-md relative">
        <div className="p-4">
            <div className="mb-6">
                <div className="text-gray-200 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>
          
                <div className="mb-5">{description}</div>
                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription ? 'Less' : 'More' }</button>
          
                    <h3 className="text-indigo-100 mb-2">{job.salary}/Year</h3>
              
                <div className="border border-gray-600 mb-5"></div>
              
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-teal-700 mb-3">
                        <FaMapMarker className='inline text-lg mb-1 mr-1'/>{job.location}</div>
                            <Link
                                to={`/jobs/${job.id}`}
                                className="h-[38px] bg-indigo-900 hover:bg-indigo-800 text-white px-5 py-2 rounded-lg text-center text-sm"
                            >
                              Read More
                     </Link>
            </div>
        </div>
    </div>
  )
}

export default JobListing


