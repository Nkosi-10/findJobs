import JobListings from "../components/JobListings"


const JobsPage = () => {
  // const recentJobs = jobs.slice(0,3)
  return (
    <section className="bg-cyan-950 px-4 py-6 ">
      <JobListings />
    </section>
  )
};

export default JobsPage;