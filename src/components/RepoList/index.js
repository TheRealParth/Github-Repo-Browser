import React from 'react';
import RepoItem from '../RepoItem';

import './RepoList.css';


const RepoList = ({ repos }) => (
    <ul>
        {
            repos.map((repo) => <RepoItem key={`${repo.node_id}`}{...repo} />)
        }
    </ul>
)

export default RepoList