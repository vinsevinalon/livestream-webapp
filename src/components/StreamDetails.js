import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function StreamDetails({ data }) {
    const { name } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            {data
                .filter((users) => users.name === name)
                .map((users, i) => (
                    <div key={i}>
                        <div>
                            <h2>{users.nickname}</h2>
                        </div>
                    </div>
                ))}
        </div>
    );
}
