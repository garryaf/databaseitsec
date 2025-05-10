import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialForm = {
    username: '',
    nama: '',
    email: '',
    mika: '',
    level: '',
    unitKerja: '',
    itopRequest: '',
    hostname: ''
};

const VpnUserManager = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/vpn-users');
            setUsers(response.data);
        } catch (error) {
            setAlert({ show: true, type: 'error', message: 'Gagal mengambil data user.' });
        }
        setLoading(false);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('/api/vpn-users', formData);
            setFormData(initialForm);
            setAlert({ show: true, type: 'success', message: 'User berhasil ditambahkan!' });
            fetchUsers();
        } catch (error) {
            setAlert({ show: true, type: 'error', message: 'Gagal menambah user. Username/email mungkin sudah terdaftar.' });
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus user ini?')) return;
        setLoading(true);
        try {
            await axios.delete(`/api/vpn-users/${id}`);
            setAlert({ show: true, type: 'success', message: 'User berhasil dihapus!' });
            fetchUsers();
        } catch (error) {
            setAlert({ show: true, type: 'error', message: 'Gagal menghapus user.' });
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 rounded-t-2xl mx-4 mt-4">
                <div className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                    <span className="inline-block w-5 h-5 bg-blue-600 rounded mr-2"></span>
                    Data Management
                </div>
                <div className="text-lg font-bold text-black">Data Input Form</div>
            </header>

            {/* Form Card */}
            <main className="flex-1 flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl mt-8"
                >
                    <div className="text-lg font-bold mb-6">Input Data</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 font-semibold">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Nama</label>
                            <input
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Mika</label>
                            <input
                                type="text"
                                name="mika"
                                value={formData.mika}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter mika"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Level</label>
                            <input
                                type="text"
                                name="level"
                                value={formData.level}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter level"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Unit Kerja</label>
                            <input
                                type="text"
                                name="unitKerja"
                                value={formData.unitKerja}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter unit of work"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">ITOP Request</label>
                            <input
                                type="text"
                                name="itopRequest"
                                value={formData.itopRequest}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter ITOP request"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Hostname</label>
                            <input
                                type="text"
                                name="hostname"
                                value={formData.hostname}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter hostname"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-8 w-full bg-black hover:bg-blue-700 text-white py-2 rounded font-semibold transition-all"
                    >
                        Submit
                    </button>
                </form>
            </main>

            {/* Footer */}
            <footer className="bg-[#f7f7f7] py-6 px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mt-8">
                <div>
                    <div>
                        Contact Us: <a href="mailto:dimas.winarto@mitrakeluarga.com" className="underline">dimas.winarto@mitrakeluarga.com</a>
                    </div>
                    <div>Phone: +123 456 7890</div>
                </div>
                <div className="mt-4 md:mt-0">
                    <div className="font-semibold mb-1">Quick Links:</div>
                    <div>
                        <a href="#" className="hover:underline mr-3">Home</a>
                        <a href="#" className="hover:underline mr-3">About Us</a>
                        <a href="#" className="hover:underline">Services</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default VpnUserManager; 