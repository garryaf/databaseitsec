import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/mika';
const LOGIN_URL = 'http://localhost:3000/api/users/login';

export default function MasterMika() {
    const [mikas, setMikas] = useState([]);
    const [name, setName] = useState('');
    const [admin, setAdmin] = useState({ username: '', password: '' });
    const [token, setToken] = useState(localStorage.getItem('adminToken') || '');

    // Login admin
    const handleAdminLogin = async e => {
        e.preventDefault();
        const res = await fetch(LOGIN_URL, {
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

    // Fetch Mika
    const fetchMikas = async () => {
        const res = await fetch(API_URL);
        if (res.ok) {
            const data = await res.json();
            setMikas(data);
        }
    };

    useEffect(() => {
        fetchMikas();
    }, [token]);

    // Tambah Mika
    const handleAdd = async e => {
        e.preventDefault();
        if (!name) return;
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ name })
        });
        if (res.ok) {
            setName('');
            fetchMikas();
        } else {
            const err = await res.json();
            alert('Error: ' + err.message);
            console.log('Error detail:', err);
        }
    };

    // Hapus Mika
    const handleDelete = async id => {
        if (!window.confirm('Yakin ingin hapus Mika ini?')) return;
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) fetchMikas();
    };

    // Logout admin
    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('adminToken');
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

    return (
        <div className="p-6 max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Master Mika</h2>
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
            </div>
            <form onSubmit={handleAdd} className="flex gap-2 mb-4">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nama Mika"
                    required
                    className="border p-2 rounded flex-1"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Tambah</button>
            </form>
            <table className="w-full table-auto border-collapse border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-2 py-1">Nama Mika</th>
                        <th className="border px-2 py-1">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {mikas.map(mika => (
                        <tr key={mika._id} className="border-t">
                            <td className="border px-2 py-1">{mika.name}</td>
                            <td className="border px-2 py-1">
                                <button onClick={() => handleDelete(mika._id)} className="text-red-600">Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 