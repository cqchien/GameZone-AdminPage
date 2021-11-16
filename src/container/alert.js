import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertMessage from '../components/alertMessage';
import { closeMessage } from '../redux/reducers/alertSlice';

const Message = () => {
  // Allows you to extract data from the Redux store state, using a selector function.
  const { open, type, message } = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeMessage());
  };
  return <AlertMessage open={open} type={type} message={message} handleClose={handleClose} />;
};

export default Message;
