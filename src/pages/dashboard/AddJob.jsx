import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { FormRow } from '../../components';

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
    const dispatch = useDispatch();

    const handleSubmit = () => {
        
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <h3>{isEditing ? 'edit job' : 'add job'}</h3>
            </form>
        </Wrapper>
    );
};

export default AddJob;