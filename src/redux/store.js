import userReducer from './reducers/userSlide';
import alertReducer from './reducers/alertSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer
  }
});

export { store };
