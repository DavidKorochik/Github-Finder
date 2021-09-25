import React, { useReducer } from 'react';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import alertsReducer from './alertsReducer';
import AlertsContext from './alertsContext';

export default function AlertsState({ children }) {
  const initialState = null;

  const [state, dispatch] = useReducer(alertsReducer, initialState);

  // Set Alert Message
  const setAlertMessage = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  // Clear Alert
  const clearAlert = (e) => {
    e.preventDefault();
    dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AlertsContext.Provider
      value={{ alert: state, setAlertMessage, clearAlert }}
    >
      {children}
    </AlertsContext.Provider>
  );
}
