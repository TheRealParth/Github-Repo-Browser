import React from 'react';
import { Link } from 'react-router-dom';
import './RepoItem.css';

const RepoItem = ({
    id,
    name,
    description,
    owner: {
        avatar_url,
        gravatar_id,
        login

    }
}) => (

        <li className="repo-item">
            <Link to={`/${id}`}>
                <div className="repo-info">
                    {name}
                    <div className="author-info">
                        {`by: ${login}`}
                    </div>
                </div>
            </Link>
        </li>

    )


export default RepoItem;