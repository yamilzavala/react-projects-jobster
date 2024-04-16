import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, togglesSidebar } from "../store/features/user/userSlice";

const Navbar = () => {
    const [showLogoutPannel, setShowLogoutPanel] = useState(false)
    const dispatch = useDispatch();
    const user = useSelector(store => store.userState.user);
    
    const toggle = () => {
        dispatch(togglesSidebar())
    }

    const logout = () => {
        dispatch(logoutUser('Logout Successful!'))
    }

    return (
        <Wrapper>
            <div className='nav-center'>
                <button type='button' className='toggle-btn' onClick={toggle}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className='logo-text'>dashboard</h3>
                </div>
                <div className='btn-container'>
                    <button type='button' className='btn' onClick={() => setShowLogoutPanel(!showLogoutPannel)}  >
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>
                     <div className={showLogoutPannel && user?.name ? 'dropdown show-dropdown' : 'dropdown'}>
                        <button type='button' className='dropdown-btn' onClick={logout}>
                            logout
                        </button>
                    </div>
                     
                </div>
            </div>

        </Wrapper>
    );
};

export default Navbar;