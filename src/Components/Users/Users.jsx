// import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            users
            <ul>
                {users.map(user => (<li key={user.id}>{user.name}</li>))}
            </ul>
        </div>
    );
};

export default Users;