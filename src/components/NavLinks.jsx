import links from "../utils/links";
import { NavLink } from 'react-router-dom';

const NavLinks = ({toggle}) => {
    return (
        <div className='nav-links'>
                        {links.map(link => {
                            const {id, text, icon, path} = link;
                            return(
                                <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} key={id} to={path} onClick={toggle}>
                                   <span className='icon'>{icon}</span>
                                   {text}
                                </NavLink>
                                );
                        })}
                    </div>
    );
};

export default NavLinks;