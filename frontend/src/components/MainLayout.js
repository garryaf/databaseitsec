import React from "react";
import { FaHome, FaUserShield, FaPlusCircle, FaCog } from "react-icons/fa";
import logoMitra from "../assets/Mitra_Keluarga_2014.svg.png";

export default function MainLayout({ menu, setMenu, children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white min-h-screen shadow flex flex-col">
        <div className="flex items-center px-4 py-6">
          <img src={logoMitra} alt="Logo Mitra Keluarga" className="h-10 w-auto" />
        </div>
        <div className="font-bold text-xl text-blue-700 px-4 mb-8">Data Management</div>
        <nav className="flex flex-col gap-2">
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded font-semibold ${
              menu === "dashboard"
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-blue-50"
            }`}
            onClick={() => setMenu("dashboard")}
          >
            <FaHome /> Home
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded font-semibold ${
              menu === "vpn"
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-blue-50"
            }`}
            onClick={() => setMenu("vpn")}
          >
            <FaUserShield /> Request VPN
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded font-semibold ${
              menu === "setting"
                ? "bg-blue-100 text-blue-700"
                : "hover:bg-blue-50"
            }`}
            onClick={() => setMenu("setting")}
          >
            <FaCog /> Setting
          </button>
        </nav>
        <button
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded flex items-center justify-center gap-2"
          onClick={() => setMenu("vpn")}
        >
          <FaPlusCircle /> New Request
        </button>
        <button className="mt-auto flex items-center gap-2 px-3 py-2 rounded font-semibold hover:bg-blue-50">
          <span role="img" aria-label="feedback">💬</span> Feedback
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}