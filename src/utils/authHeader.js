export const authHeader = (thunkAPI) => {
    const headers =  {
        Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`
    }
    return headers;
}