import { useEffect } from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../store/features/allJobs/allJobsThunks';
import PageBtnContainer from './PageBtnContainer';
import ComplexPaginationContainer from './ComplexPaginationContainer';

const JobsContainer = () => {
    const {isLoading, jobs, totalJobs, numOfPages, page, search, searchStatus, searchType, sort} = useSelector(store => store.allJobsState)
    const dispatch = useDispatch();

    console.log(numOfPages)

    useEffect(() => {
        //get all jobs
        dispatch(getAllJobs())
    }, [search, searchStatus, searchType, sort, page])

    if(isLoading) return (<Loading center/>)
    if(!jobs.length) return ( <Wrapper><h2>No jobs to display...</h2></Wrapper>)
    
    return (
        <Wrapper>
             <h5> {totalJobs} job{jobs.length > 1 && 's'} found </h5>
            
            <div className='jobs'>
                {jobs.map(job => {
                    return <Job key={job._id} {...job}/>
                })}
            </div>
            {/* {numOfPages > 1 && <PageBtnContainer/>} */}
            {numOfPages > 1 && <ComplexPaginationContainer/>}
        </Wrapper>
    );
};

export default JobsContainer;