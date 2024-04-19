import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';
import { handlePage } from '../store/features/allJobs/allJobsSlice';

const PageBtnContainer = () => {
    const dispatch = useDispatch();
    const {page, numOfPages} = useSelector(store => store.allJobsState)
    const pages = Array.from({length: numOfPages}, (_, index) => {
        return index + 1
    })

    const prevPage = () => {
        let newPage = page - 1;
        if(newPage < 1) {
            newPage = numOfPages;
        };
        dispatch(handlePage({page: newPage})); 
        console.log(page)
    }
    const nextPage = () => {
        let newPage = page + 1;
        if(newPage > numOfPages) {
            newPage = 1;
        } 
        dispatch(handlePage({page: newPage}))
        console.log(page)
    }

    const changePage = (numberPage) => {
        dispatch(handlePage({page: numberPage}))
    }

    return (
        <Wrapper>
            {/* prev */}
            <button className='prev-btn' onClick={prevPage}>
                <HiChevronDoubleLeft/>
                prev
            </button>
            
            {/* current */}
            <div className="btn-container">
                {pages.map(currentPage => {
                    return (
                        <button key={currentPage} type="button" className={page === currentPage ? 'pageBtn active' : 'pageBtn'} onClick={() => changePage(currentPage)}>
                            {currentPage}
                        </button>)
                })}
            </div>
               
            {/* next */}
            <button className='next-btn'  onClick={nextPage}>
                <HiChevronDoubleRight/>
                next
            </button>
        </Wrapper>
    );
};

export default PageBtnContainer;