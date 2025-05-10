import React, { useState } from "react";
import logoMitra from "../assets/Mitra_Keluarga_2014.svg.png";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo: username: admin, password: admin
    if (form.username === "admin" && form.password === "admin") {
      setError("");
      if (onLogin) onLogin(form.username);
    } else {
      setError("Username atau password salah.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 relative">
      {/* Logo di pojok kiri atas */}
      <img
        src={logoMitra}
        alt="Mitra Keluarga"
        className="absolute top-6 left-8 w-40 h-auto"
        style={{ zIndex: 10 }}
      />
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Kiri */}
        <div className="w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-10 flex flex-col justify-center text-white">
          <div className="mb-8">
            <div className="text-4xl font-bold mb-2">Request VPN</div>
            <div className="text-lg font-light">
              Platform permintaan akses VPN untuk karyawan. Silakan login untuk mengajukan request VPN.
            </div>
          </div>
          <div className="mt-auto text-xs opacity-80">
            &copy; {new Date().getFullYear()} IT Department
          </div>
        </div>
        {/* Kanan */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">Welcome</div>
            <div className="text-gray-500">Silakan login dengan username dan password Anda</div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                placeholder="Masukkan Username"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                placeholder="Masukkan Password"
                required
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition-all"
            >
              Sign In
            </button>
            <div className="text-right">
              <button
                type="button"
                className="text-blue-600 hover:underline text-sm mt-2"
                onClick={() => setShowForgot(true)}
              >
                Forgot Password?
              </button>
            </div>
          </form>
          {/* Modal/Pesan Forgot Password */}
          {showForgot && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800">
              Silakan hubungi admin IT di <a href="mailto:support@yourcompany.com" className="underline">support@yourcompany.com</a> untuk reset password.
              <button
                className="block mt-2 text-blue-600 hover:underline"
                onClick={() => setShowForgot(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}