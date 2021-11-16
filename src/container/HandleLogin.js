import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginForm } from '../components/authentication/login/LoginForm';
import { loginWithEmail } from '../servers/account';
import { setMessage, setLoading } from '../redux/reducers/alertSlice';
import { setToken } from '../servers/authority';

HandleLogin.propTypes = {};

export function HandleLogin() {
  const { loading } = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    dispatch(setLoading(true));
    const apiResponse = await loginWithEmail(values);

    const success = apiResponse?.success;

    const data = apiResponse?.data;
    if (success) {
      const payloadSuccess = {
        type: 'success',
        message: 'Login Successfully'
      };

      setToken(data.token);

      dispatch(setMessage(payloadSuccess));

      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } else {
      dispatch(setMessage(apiResponse));
    }
    dispatch(setLoading(false));
  };

  return (
    <div>
      <LoginForm handleLogin={handleSubmit} loading={loading} />
    </div>
  );
}
