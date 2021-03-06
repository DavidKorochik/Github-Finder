import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function UserItem({ avatar_url, html_url, login }) {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};
