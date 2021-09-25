import React from 'react';
import PropTypes from 'prop-types';

export default function ReposItem({ repo }) {
  return (
    <div className='card'>
      <h3>
        <a target='_blank' href={repo.html_url}>
          {repo.name}
        </a>
      </h3>
    </div>
  );
}

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
