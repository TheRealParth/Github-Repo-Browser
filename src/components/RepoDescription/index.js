import React from 'react';
import './RepoDescription.css';

const RepoDescription = ({ repos, id }) => {
    const currentRepo = repos[id];
    return (
        <h1>
            {repos ? JSON.stringify(currentRepo) : ''}
        </h1>
    )
}

export default RepoDescription;