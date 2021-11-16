import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from '../../servers/user';

export const getUser = createAsyncThunk('user/me', async () => {
  const apiResponse = await getUserInfo();
  if (apiResponse.data) {
    return apiResponse.data.user;
  }
  return {};
});

const userSlice = createSlice({
  name: 'user',

  initialState: {
    loading: false,
    isLogin: false,
    name: '',
    avatar: '',
    email: ''
  },

  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      const { name, email, avatar } = action.payload;
      if (!email) {
        return { ...state, loading: false, isLogin: false };
      }
      return {
        loading: false,
        isLogin: true,
        name,
        email,
        avatar
      };
    }
  }
});

const { reducer } = userSlice;
export default reducer;
