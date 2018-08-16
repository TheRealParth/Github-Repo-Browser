import React from 'react';
import './RepoDescription.css';

const RepoDescription = ({ repos, id }) => {
    const {
        name,
        description,
        html_url,
        owner: {
            avatar_url,
            gravatar_id,
            login

        }
    } = repos[id] ? repos[id] : { owner: {} };
    if (repos[id]) {
        return (
            <div className="container">
                <a href={html_url}>
                    <div className="project-info">
                        <div className="project-name">

                            <h2>
                                {name}
                            </h2>
                        </div>
                        <div className="project-description">
                            {description}
                        </div>
                    </div>
                </a>
                <div className="user-info">
                    <div className="user-image-container">
                        <img src={avatar_url ? avatar_url : gravatar_id}
                            alt={`${login}'s avatar`}
                            className="avatar" />
                    </div>
                    <a href={`https://www.github.com/${login}`}>
                        <h4 className="user-name">{`User: ${login}`}</h4>
                    </a>

                </div>
            </div>
        )
    } else {
        return (
            <h1>...Loading</h1>
        )
    }

}

export default RepoDescription;