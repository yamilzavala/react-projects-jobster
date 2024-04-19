import axios from 'axios';
import { clearStoreThunk } from '../store/features/user/userThunks';

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if(error.responde.status === 401) {
    thunkAPI.dispatch(clearStoreThunk())
    return thunkAPI.rejectWithValue('Unauthorized! Logging out...')
  }
  return thunkAPI.rejectWithValue(error.responde.data.msg)
}

const customFetch = axios.create({
    baseURL: 'https://www.redux-toolkit-jobster-api-server.onrender.com/api/v1',
  });

export default customFetch;