import React, { useState } from "react";
import UserManagement from "./UserManagement";
import MasterData from "./MasterData";

export default function Setting() {
  const [tab, setTab] = useState("user");

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            tab === "user" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTab("user")}
        >
          User Management
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${
            tab === "master" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTab("master")}
        >
          Master
        </button>
      </div>
      {tab === "user" && <UserManagement />}
      {tab === "master" && <MasterData />}
    </div>
  );
}
