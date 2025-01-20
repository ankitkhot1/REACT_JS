// CrudApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/users';

function CrudApp() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', username: '', email: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get(apiUrl)
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching data:', error));
    };

    const createUser = () => {
        axios.post(apiUrl, newUser)
            .then(fetchUsers)
            .catch(error => console.error('Error creating user:', error));
    };

    const updateUser = (id, updatedUser) => {
        axios.put(`${apiUrl}/${id}`, updatedUser)
            .then(fetchUsers)
            .catch(error => console.error('Error updating user:', error));
    };

    const deleteUser = (id) => {
        axios.delete(`${apiUrl}/${id}`)
            .then(fetchUsers)
            .catch(error => console.error('Error deleting user:', error));
    };

    const patchUser = (id, updatedFields) => {
        axios.patch(`${apiUrl}/${id}`, updatedFields)
            .then(fetchUsers)
            .catch(error => console.error('Error patching user:', error));
    };

    return (
        <div>
            <h1>CRUD App with json-server</h1>
            <input type="text" placeholder="Name" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} />
            <input type="text" placeholder="Username" value={newUser.username} onChange={e => setNewUser({ ...newUser, username: e.target.value })} />
            <input type="email" placeholder="Email" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
            <button onClick={createUser}>Add User</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => updateUser(user.id, { ...user, name: 'Updated Name' })}>Update</button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                                <button onClick={() => patchUser(user.id, { name: 'Patched Name' })}>Patch</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CrudApp;
