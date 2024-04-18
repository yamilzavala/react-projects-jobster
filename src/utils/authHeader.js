export const authHeader = (thunkAPI) => {
    return {
        Authorization: `Bearer ${thunkAPI.getState().userState.user.token}`
    }
}