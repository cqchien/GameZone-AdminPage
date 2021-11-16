import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    open: false,
    message: '',
    type: '',
    loading: false
  },
  reducers: {
    setMessage(state, { payload }) {
      return { ...state, open: true, ...payload };
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    closeMessage(state) {
      state.open = false;
    }
  }
});

const { reducer, actions } = alertSlice;
export const { setMessage, closeMessage, setLoading } = actions;
export default reducer;
