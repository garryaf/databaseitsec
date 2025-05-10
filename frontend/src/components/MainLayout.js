import React from "react";
import { FaHome, FaUserFriends, FaCalendarAlt, FaUserShield, FaPlusCircle, FaCommentDots } from "react-icons/fa";

export default function MainLayout({ menu, setMenu, children, onNewRequest }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-lg flex flex-col py-8 px-4">
        <div className="text-2xl font-bold text-blue-600 mb-10">Data Management</div>
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
          <button className="flex items-center gap-2 px-3 py-2 rounded font-semibold hover:bg-blue-50">
            <FaCalendarAlt /> Events
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded font-semibold hover:bg-blue-50">
            <FaUserFriends /> People
          </button>
        </nav>
        <button
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded flex items-center justify-center gap-2"
          onClick={() => setMenu("vpn")}
        >
          <FaPlusCircle /> New Request
        </button>
        <button className="mt-auto flex items-center gap-2 px-3 py-2 rounded font-semibold hover:bg-blue-50">
          <FaCommentDots /> Feedback
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}