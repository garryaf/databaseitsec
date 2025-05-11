import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCog } from "react-icons/fa";
import UserManagement from "./UserManagement";
import MasterData from "./MasterData";
import logoMitra from "../assets/Mitra_Keluarga_2014.svg";

function exportToCSV(data, filename = "vpn_users.csv") {
  const header = [
    "Username",
    "Name",
    "Email",
    "Mika",
    "Level",
    "Work Unit",
    "ItopRequest",
  ];
  const rows = data.map((u) => [
    u.username,
    u.nama,
    u.email,
    u.mika,
    u.level,
    u.unitKerja,
    u.itopRequest,
  ]);
  let csvContent =
    "data:text/csv;charset=utf-8," +
    [header, ...rows].map((e) => e.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Dashboard({ user }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search & Filter state
  const [search, setSearch] = useState("");
  const [filterMika, setFilterMika] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [filterUnit, setFilterUnit] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/vpn-users");
      setUsers(res.data);
    } catch (e) {
      setUsers([]);
    }
    setLoading(false);
  };

  // Get unique values for filter dropdowns
  const mikaList = [...new Set(users.map((u) => u.mika))].filter(Boolean);
  const levelList = [...new Set(users.map((u) => u.level))].filter(Boolean);
  const unitList = [...new Set(users.map((u) => u.unitKerja))].filter(Boolean);

  // Filtered & searched data
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.username.toLowerCase().includes(search.toLowerCase()) ||
      u.nama.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.mika.toLowerCase().includes(search.toLowerCase()) ||
      u.level.toLowerCase().includes(search.toLowerCase()) ||
      u.unitKerja.toLowerCase().includes(search.toLowerCase()) ||
      u.itopRequest.toLowerCase().includes(search.toLowerCase());
    const matchesMika = filterMika ? u.mika === filterMika : true;
    const matchesLevel = filterLevel ? u.level === filterLevel : true;
    const matchesUnit = filterUnit ? u.unitKerja === filterUnit : true;
    return matchesSearch && matchesMika && matchesLevel && matchesUnit;
  });

  // Setelah fetchUsers dan setUsers
  const mikaStats = {};
  users.forEach((u) => {
    if (u.mika) {
      mikaStats[u.mika] = (mikaStats[u.mika] || 0) + 1;
    }
  });
  const sortedMika = Object.entries(mikaStats).sort((a, b) => b[1] - a[1]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Selamat Datang, {user}</h2>
      <div className="bg-white rounded-xl shadow p-4 mb-8">
        <div className="font-bold text-lg mb-4">Grafik Jumlah User per Mika</div>
        <div className="flex items-end gap-6 h-40">
          {sortedMika.length === 0 ? (
            <div className="text-gray-400">Belum ada data</div>
          ) : (
            sortedMika.map(([mika, count]) => (
              <div key={mika} className="flex flex-col items-center">
                <div
                  className="bg-blue-500 w-10 rounded-t"
                  style={{ height: `${count * 30}px` }}
                  title={mika}
                ></div>
                <div className="text-xs mt-1 font-semibold">{mika}</div>
                <div className="text-xs text-gray-500">{count}</div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-4">
        <div className="font-bold text-lg mb-4">Data User VPN</div>
        {/* Search & Filter */}
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            placeholder="Cari username, nama, email, dll..."
            className="px-3 py-2 border rounded w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="px-3 py-2 border rounded"
            value={filterMika}
            onChange={(e) => setFilterMika(e.target.value)}
          >
            <option value="">Semua Mika</option>
            {mikaList.map((mika) => (
              <option key={mika} value={mika}>
                {mika}
              </option>
            ))}
          </select>
          <select
            className="px-3 py-2 border rounded"
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            <option value="">Semua Level</option>
            {levelList.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <select
            className="px-3 py-2 border rounded"
            value={filterUnit}
            onChange={(e) => setFilterUnit(e.target.value)}
          >
            <option value="">Semua Unit Kerja</option>
            {unitList.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <button
            className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
            onClick={() => exportToCSV(filteredUsers)}
          >
            Export CSV
          </button>
        </div>
        {/* Table */}
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-2 text-left">Username</th>
              <th className="py-2 px-2 text-left">Name</th>
              <th className="py-2 px-2 text-left">Email</th>
              <th className="py-2 px-2 text-left">Mika</th>
              <th className="py-2 px-2 text-left">Level</th>
              <th className="py-2 px-2 text-left">Work Unit</th>
              <th className="py-2 px-2 text-left">ItopRequest</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  No data.
                </td>
              </tr>
            ) : (
              filteredUsers.map((u) => (
                <tr key={u._id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-2">{u.username}</td>
                  <td className="py-2 px-2">{u.nama}</td>
                  <td className="py-2 px-2">{u.email}</td>
                  <td className="py-2 px-2">{u.mika}</td>
                  <td className="py-2 px-2">{u.level}</td>
                  <td className="py-2 px-2">{u.unitKerja}</td>
                  <td className="py-2 px-2">{u.itopRequest}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}