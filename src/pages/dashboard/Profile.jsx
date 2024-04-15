import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useState } from 'react';
import { FormRow } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from "../../store/features/user/userThunks";

const Profile = () => {
    const {user, isLoading} = useSelector(state => state.userState);
    const [userData, setUserData] = useState({
        name: user.name || '',
        lastName: user.lastName || '',
        location: user.location || '',
        email: user.email || '',
    })
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, lastName, location} = userData;
        if(!name || !email || !lastName || !location) {
            toast.error('Fill out all fields')
            return;
        }
        dispatch(updateUser({name, email, lastName, location}))
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData, [name]: value})
    }

    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <h3>profile</h3>
                <div className='form-center'>
                    <FormRow label='name' value={userData.name} type='text' name='name' handler={handleChange}/>
                    <FormRow label='email' value={userData.email} type='email' name='email' handler={handleChange}/>
                    <FormRow label='last name' value={userData.lastName} type='text' name='lastName' handler={handleChange}/>
                    <FormRow label='location' value={userData.location} type='text' name='location' handler={handleChange}/>

                    <button className='btn btn-block' type='submit' disabled={isLoading}>
                        {isLoading ? 'Please Wait...' : 'save changes'}
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

export default Profile;