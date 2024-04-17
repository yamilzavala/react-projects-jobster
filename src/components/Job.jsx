import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import moment from 'moment';
import { deleteJob } from '../store/features/job/jobThunks';
import { setEditJob } from '../store/features/job/jobSlice';

const Job = ({company,createdAt,jobLocation,jobType,position,status,_id}) => {
    const dispatch = useDispatch();
    const date = moment(createdAt).format('MMM Do, YYYY')
    const job = {
        company,
        createdAt,
        jobLocation,
        jobType,
        position,
        status,
        editJobId: _id
    }

    return (
        <Wrapper>
            {/* header */}
            <header>
                <div className="main-icon">{company.charAt(0)}</div>
                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className="content">
                {/* body */}
                <div className='content-center'>
                    <JobInfo icon={<FaLocationArrow/>} text={jobLocation}/>
                    <JobInfo icon={<FaCalendarAlt/>} text={date}/>
                    <JobInfo icon={<FaBriefcase/>} text={jobType}/>
                    <div className={`status ${status}`}>{status}</div>
                </div>
                {/* footer */}
                <footer>
                    <div className="actions">
                        <Link className='btn edit-btn' to='/add-job' onClick={() => dispatch(setEditJob(job))}>edit</Link>
                        <button type="button" className='btn delete-btn' onClick={() => dispatch(deleteJob(_id))}>delete</button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    );
};

export default Job;