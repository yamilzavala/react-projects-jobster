import { useSelector, useDispatch } from 'react-redux';
import { handlePage } from '../store/features/allJobs/allJobsSlice';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const ComplexPaginationContainer = () => {
    const {page, numOfPages} = useSelector(store => store.allJobsState)
    const dispatch = useDispatch();
  
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

    const handlePageChange = (pageNumber) => {
        dispatch(handlePage({page: pageNumber}))
    }

    const addPageButton = ({pageNumber}) => {
        return (
            <button key={pageNumber} 
                    onClick={() => handlePageChange(pageNumber)} 
                    className={page === pageNumber ? 'pageBtn active' : 'pageBtn'}>
                    {pageNumber}
            </button> 
        )
    }

    const renderPageButtons = () => {
        const pageButtons = [];
        //first button
        pageButtons.push(addPageButton({pageNumber: 1}))

        //first dots
        if (page > 2) {
            pageButtons.push(
                <button key='dots-1' className='pageBtn'>
                    ...
                </button> 
            )            
        }

        //active / current page
        if (page !== 1 && page !== numOfPages) {
            pageButtons.push(addPageButton({pageNumber: page}))            
        }

        //last dots
        if (page < numOfPages - 1) {
            pageButtons.push(
                <button key='dots-1' className='pageBtn'>
                    ...
                </button> 
            )            
        }
            
        //last button
        pageButtons.push(addPageButton({pageNumber: numOfPages}))

        return pageButtons;
    }

    if(numOfPages < 2) return null;

    return (
        <Wrapper>       
             <div className="center-pages">         
            {/* prev */}
            <button className='prev-btn' onClick={prevPage}>
                <HiChevronDoubleLeft/>
                prev
            </button>

            {/* PAGES */}
            <div className="center-btn">
                {
                        renderPageButtons()
                }
            </div>

            {/* next */}
            <button className='next-btn'  onClick={nextPage}>
                <HiChevronDoubleRight/>
                next
            </button>
            </div>
        </Wrapper>
    );
};

export default ComplexPaginationContainer;