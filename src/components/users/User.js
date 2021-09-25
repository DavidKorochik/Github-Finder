import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

export default function User() {
  const githubContext = React.useContext(GithubContext);

  return githubContext.loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {githubContext.users.map((user) => (
        <UserItem
          key={user.id}
          login={user.login}
          avatar_url={user.avatar_url}
          html_url={user.html_url}
        />
      ))}
    </div>
  );
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};
