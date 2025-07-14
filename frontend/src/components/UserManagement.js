import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/users';

export default function UserManagement() {
    // State untuk login admin
    const [admin, setAdmin] = useState({ username: '', password: '' });
    const [token, setToken] = useState(localStorage.getItem('adminToken') || '');

    // State untuk user management
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        _id: null,
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [isEdit, setIsEdit] = useState(false);

    // Login admin
    const handleAdminLogin = async e => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        });
        if (res.ok) {
            const data = await res.json();
            setToken(data.token);
            localStorage.setItem('adminToken', data.token);
        } else {
            alert('Login admin gagal');
        }
    };

    // Fetch users dengan token
    const fetchUsers = async (jwt = token) => {
        const res = await fetch(API_URL, {
            headers: { Authorization: `Bearer ${jwt}` }
        });
        if (res.ok) {
            const data = await res.json();
            setUsers(data);
        } else {
            setUsers([]);
        }
    };

    useEffect(() => {
        if (token) fetchUsers(token);
    }, [token]);

    // Form user management
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!form.username || !form.password) {
            alert('Username dan password wajib diisi!');
            return;
        }
        if (!isEdit && form.password !== form.confirmPassword) {
            alert('Konfirmasi password tidak cocok!');
            return;
        }
        const method = isEdit ? 'PATCH' : 'POST';
        const url = isEdit ? `${API_URL}/${form._id}` : API_URL + '/register';
        const body = { username: form.username, password: form.password };
        if (isEdit) delete body._id;

        const res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        if (res.ok) {
            fetchUsers();
            resetForm();
        } else {
            const err = await res.json();
            alert('Error: ' + err.message);
        }
    };

    const resetForm = () => {
        setForm({
            _id: null,
            username: '',
            password: '',
            confirmPassword: ''
        });
        setIsEdit(false);
    };

    const handleEdit = user => {
        setForm({ _id: user._id, username: user.username, password: '', confirmPassword: '' });
        setIsEdit(true);
    };

    const handleDelete = async id => {
        if (!window.confirm('Yakin ingin hapus user ini?')) return;
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) fetchUsers();
    };

    // Logout admin
    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('adminToken');
        setUsers([]);
    };

    // Jika belum login admin, tampilkan form login
    if (!token) {
        return (
            <form onSubmit={handleAdminLogin} className="max-w-xs mx-auto mt-10 p-4 bg-white rounded shadow">
                <h2 className="text-xl font-bold mb-4">Login Admin</h2>
                <input
                    name="username"
                    value={admin.username}
                    onChange={e => setAdmin({ ...admin, username: e.target.value })}
                    placeholder="Admin Username"
                    required
                    className="border p-2 rounded mb-2 w-full"
                />
                <input
                    type="password"
                    name="password"
                    value={admin.password}
                    onChange={e => setAdmin({ ...admin, password: e.target.value })}
                    placeholder="Admin Password"
                    required
                    className="border p-2 rounded mb-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                    Login Admin
                </button>
            </form>
        );
    }

    // Jika sudah login admin, tampilkan manajemen user
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Manajemen User Login</h2>
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-white p-4 rounded shadow max-w-md">
                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    className="border p-2 rounded"
                />
                {!isEdit && (
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Konfirmasi Password"
                        required
                        className="border p-2 rounded"
                    />
                )}
                <div className="flex gap-2">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        {isEdit ? 'Update' : 'Tambah'} User
                    </button>
                    <button type="button" onClick={resetForm} className="bg-gray-300 px-4 py-2 rounded">
                        Reset
                    </button>
                </div>
            </form>

            <table className="w-full mt-6 table-auto border-collapse border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-2 py-1">Username</th>
                        <th className="border px-2 py-1">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="border-t">
                            <td className="border px-2 py-1">{user.username}</td>
                            <td className="border px-2 py-1 space-x-2">
                                <button onClick={() => handleEdit(user)} className="text-blue-600">Edit</button>
                                <button onClick={() => handleDelete(user._id)} className="text-red-600">Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
