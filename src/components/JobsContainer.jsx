import { useEffect } from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../store/features/allJobs/allJobsThunks';

const JobsContainer = () => {
    const {isLoading, jobs, totalJobs} = useSelector(store => store.allJobsState)
    const dispatch = useDispatch();


    useEffect(() => {
        //get all jobs
        dispatch(getAllJobs())
    }, [])

    if(isLoading) return (<Loading center/>)
    if(!jobs.length) return ( <Wrapper><h2>No jobs to display...</h2></Wrapper>)
    
    return (
        <Wrapper>
            <h5>jobs info</h5>
            <h3>Total jobs: {totalJobs}</h3>
            
            <div className='jobs'>
                {jobs.map(job => {
                    return <Job key={job._id} {...job}/>
                })}
            </div>
        </Wrapper>
    );
};

export default JobsContainer;