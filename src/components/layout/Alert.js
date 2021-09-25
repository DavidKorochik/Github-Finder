import React from 'react';
import AlertsContext from '../../context/alerts/alertsContext';

export default function Alert() {
  const alertsContext = React.useContext(AlertsContext);
  return alertsContext.alert !== null ? (
    <div className={`alert alert-${alertsContext.alert.type}`}>
      <i className='fas fa-info circle'> {alertsContext.alert.msg}</i>
      <br />
      <button
        className='btn-danger '
        style={{ width: '20px', cursor: 'pointer' }}
        onClick={alertsContext.clearAlert}
      >
        X
      </button>
    </div>
  ) : (
    ''
  );
}
