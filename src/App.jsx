
import {Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


//Add a NEW Job
const  App =() => {
  const addJob = async(newJob) => {
    const  res = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return 
  };
  
// DELETE JOB

const deleteJob = async(id) => {
  const  res = await fetch(`/api/jobs/${id}`,{
    method: 'DELETE'
  });
  return;
};

//UPDATE JOB
const updateJob = async(job) => {
  const  res = await fetch(`/api/jobs/${job.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job),
  });
  return 
}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route  index element={<HomePage/>} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/jobs' element={<JobsPage />}/>

        <Route path='/edit-job/:id'
         element={<EditJobPage  updateJobSubmit={updateJob}/>}
        loader={jobLoader} 
        />
        <Route path='/jobs/:id'
         element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader} 
        />
        <Route path='*' element={<NotFoundPage />}/>

      </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  )
}

export default App





/* <>
      <Navbar />
      <Hero />
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
     
    </> */






/* // const App = () => {

//   const name = "John";
//   const names = ['Nathu', 'Mbali', 'Nomhle'];
//   const loggedIn =true;
// ///if we are adding style we pass in double curly braces 
//   return (
//     <>
//     <div classNameName= 'text-5xl'>App</div>
//     <p style={{color:'blue', fontSize: '20px'}}>Hello {name}</p>
//     <ul>
//       {names.map((name, index)=>(
//         /// eslint-disable-next-line react/jsx-key
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//     {loggedIn? <h1>Hello Member</h1> : " "}
//     </>
//   )
// };

// export default App */
