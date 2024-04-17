import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FormRow, FormSelect } from '../../components';
import { addJob, editJob } from "../../store/features/job/jobThunks";
import { handleChange, clearValues } from "../../store/features/job/jobSlice";
import { useEffect } from "react";


const AddJob = () => {
    const {
        isLoading,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
        isEditing,
        editJobId,  
    } = useSelector(state => state.jobState)

    const {user} = useSelector(state => state.userState)    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!position || !company || !jobLocation) {
            toast.error('Please fill out all fields!')
            return
        }
        //edit
        if(isEditing) {
            dispatch(editJob({jobId: editJobId, job: {position, company, jobLocation, jobType, status}}))
            return;
        } 
        //add
        dispatch(addJob({position, company, jobLocation, jobType, status}))        
    }

    const handleJobInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({name, value}))
    }

    useEffect(() => {
        if (!isEditing) {
            dispatch(handleChange({name: 'jobLocation', value: user?.location}))
        }
    }, [])

    return (
        <Wrapper>
            <form onSubmit={handleSubmit} className="form">
                <h3>{isEditing ? 'edit job' : 'add job'}</h3>

                <div className='form-center'>
                    <FormRow name='position' type='text' handler={handleJobInput} value={position} />
                    <FormRow name='company' type='text' handler={handleJobInput} value={company} />
                    <FormRow name='jobLocation' type='text' handler={handleJobInput} value={jobLocation} label='job location' />
                    <FormSelect name='jobType' handler={handleJobInput} value={jobType} label='job Type' list={jobTypeOptions}/>
                    <FormSelect name='status' handler={handleJobInput} value={status} label='status' list={statusOptions}/>

                    <div className='btn-container'>
                        <button type='button' className='btn btn-block clear-btn' onClick={() => dispatch(clearValues())}>
                            clear
                        </button>
                        <button type='submit' className='btn btn-block submit-btn' onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? 'submitting...' : 'submit'}
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};

export default AddJob;