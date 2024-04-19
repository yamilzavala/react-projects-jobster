import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, resetFilters } from '../store/features/allJobs/allJobsSlice';
import FormRow from './FormRow';
import FormSelect from './FormSelect';

const SearchContainer = () => {
    const {search, searchStatus, searchType, sort, sortOptions, isLoading} = useSelector(store => store.allJobsState);
    const {jobTypeOptions, statusOptions} = useSelector(store => store.jobState);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        //if(isLoading) return;
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({name, value}))        
    }

    const clearFilters = () => {
        dispatch(resetFilters())
    }

    return (
        <Wrapper>
            <form className='form'>
                <h4>search form</h4>

                <div className='form-center'>
                    {/* search */}
                    <FormRow label='search' value={search} type='text' name='search' handler={handleSearch}/>
                    {/* status */}
                    <FormSelect label='Search status' value={searchStatus} name='searchStatus' handler={handleSearch} list={['all', ...statusOptions]}/>
                    {/* type */}
                    <FormSelect label='Search type' value={searchType} name='searchType' handler={handleSearch} list={['all', ...jobTypeOptions]}/>
                    {/* sort */}
                    <FormSelect label='sort by' value={sort} name='sort' handler={handleSearch} list={[...sortOptions]}/>
                    <button type='button' className='btn btn-block btn-danger' disabled={isLoading} onClick={clearFilters}>
                        clear filters
                    </button>
                </div>
            </form>            
        </Wrapper>
    );
};

export default SearchContainer;