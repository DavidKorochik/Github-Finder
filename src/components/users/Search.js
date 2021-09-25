import React from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertsContext from '../../context/alerts/alertsContext';

export default function Search() {
  const [text, setText] = React.useState('');
  const githubContext = React.useContext(GithubContext);
  const alertsContext = React.useContext(AlertsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertsContext.setAlertMessage('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          placeholder='Search For Users ...'
          value={text}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
        {githubContext.users.length > 0 ? (
          <button
            className='btn btn-light btn-block'
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        ) : (
          ''
        )}
      </form>
    </div>
  );
}
