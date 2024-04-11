import Wrapper from '../assets/wrappers/RegisterPage';
import { FormRow, Logo } from '../components';
import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { useSelector, useDispatch} from 'react-redux';
import { loginUser, registerUser } from '../store/features/user/userThunks';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
};

const Register = () => {
    const [values, setValues] = useState(initialState);
    const {isLoading, user} = useSelector(state => state.userState)
    const dispatch = useDispatch();
   
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({
          ...values,
          [name]: value, 
        })
      };

      const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if((!isMember && !name) || !email || !password) {
          toast.error('Please Fill Out All Fields')
          return
        };

        if(isMember) {
          dispatch(loginUser({email, password}))
          return;
        }

        dispatch(registerUser({name, email, password}))
      };

      const toggleMember = () => {
        setValues({...values, isMember: !values.isMember});
      }

    return (
      <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
          <Logo />
          <h3>{values.isMember ? 'Login' : 'Register'}</h3>
  
          {/* name field */}
          {!values.isMember && (<FormRow label='name' value={values.name} type='text' name='name' handler={handleChange}/>)}          

          {/* email field */}
          <FormRow label='email' value={values.email} type='email' name='email' handler={handleChange}/>
          
          {/* password field */}
          <FormRow label='password' value={values.password} type='password' name='password' handler={handleChange}/>
  
          <button type='submit' className='btn btn-block'>
            submit
          </button>

          <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button type='button' className='member-btn' onClick={toggleMember}>
              {values.isMember ? 'Register' : 'Login' }
            </button> 
          </p>
          
        </form>
      </Wrapper>
    );
};

export default Register;