import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { togglesSidebar } from '../store/features/user/userSlice';
import NavLinks from './NavLinks';

const BigSidebar = () => {
    const {isSidebarOpen} = useSelector(state => state.userState);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(togglesSidebar())
    }

    return (
        <Wrapper>
             <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container' }>
                <div className='content'>
                    <header>
                        <Logo />
                    </header>
                    <NavLinks/>
                </div>
            </div>
        </Wrapper>
    );
};

export default BigSidebar;