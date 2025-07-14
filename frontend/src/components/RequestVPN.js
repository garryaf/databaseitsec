import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/vpn-users';
const MIKA_URL = 'http://localhost:3000/api/mika';
const UNIT_KERJA_URL = 'http://localhost:3000/api/unit-kerja';
const LEVEL_URL = 'http://localhost:3000/api/level';

export default function RequestVPN() {
    const [form, setForm] = useState({
        username: '',
        nama: '',
        email: '',
        mika: '',
        level: '',
        unitKerja: '',
        itopRequest: '',
        hostname: ''
    });
    const [mikas, setMikas] = useState([]);
    const [unitKerjas, setUnitKerjas] = useState([]);
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        fetchMikas();
        fetchUnitKerjas();
        fetchLevels();
    }, []);

    const fetchMikas = async () => {
        const res = await fetch(MIKA_URL);
        if (res.ok) {
            const data = await res.json();
            setMikas(data);
        }
    };
    const fetchUnitKerjas = async () => {
        const res = await fetch(UNIT_KERJA_URL);
        if (res.ok) {
            const data = await res.json();
            setUnitKerjas(data);
        }
    };
    const fetchLevels = async () => {
        const res = await fetch(LEVEL_URL);
        if (res.ok) {
            const data = await res.json();
            setLevels(data);
        }
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        // Validasi bisa ditambah sesuai kebutuhan
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });
        if (res.ok) {
            alert('Request VPN berhasil!');
            setForm({
                username: '',
                nama: '',
                email: '',
                mika: '',
                level: '',
                unitKerja: '',
                itopRequest: '',
                hostname: ''
            });
        } else {
            const err = await res.json();
            alert('Error: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Request VPN</h2>
            <div className="grid grid-cols-2 gap-4">
                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                    required
                    className="border p-2 rounded"
                />
                <input
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                    className="border p-2 rounded"
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                    className="border p-2 rounded"
                />
                {/* Dropdown Mika */}
                <select
                    name="mika"
                    value={form.mika}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                >
                    <option value="">Pilih Mika</option>
                    {mikas.map(mika => (
                        <option key={mika._id} value={mika.name}>{mika.name}</option>
                    ))}
                </select>
                {/* Dropdown Level */}
                <select
                    name="level"
                    value={form.level}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                >
                    <option value="">Pilih Level</option>
                    {levels.map(level => (
                        <option key={level._id} value={level.name}>{level.name}</option>
                    ))}
                </select>
                {/* Dropdown Unit Kerja */}
                <select
                    name="unitKerja"
                    value={form.unitKerja}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                >
                    <option value="">Pilih Unit Kerja</option>
                    {unitKerjas.map(unitKerja => (
                        <option key={unitKerja._id} value={unitKerja.name}>{unitKerja.name}</option>
                    ))}
                </select>
                <input
                    name="itopRequest"
                    value={form.itopRequest}
                    onChange={handleChange}
                    placeholder="Enter ITOP request"
                    required
                    className="border p-2 rounded"
                />
                <input
                    name="hostname"
                    value={form.hostname}
                    onChange={handleChange}
                    placeholder="Enter hostname"
                    required
                    className="border p-2 rounded"
                />
            </div>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full mt-4">Submit</button>
        </form>
    );
} 