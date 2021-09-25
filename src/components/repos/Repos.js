import React, { Fragment } from 'react';
import GithubContext from '../../context/github/githubContext';
import ReposItem from './ReposItem';

export default function Repos() {
  const githubContext = React.useContext(GithubContext);
  return (
    <Fragment>
      {githubContext.repos.map((repo) => (
        <ReposItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  );
}
