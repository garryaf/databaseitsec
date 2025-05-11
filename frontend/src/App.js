import React, { useState } from "react";
import Login from "./components/Login";
import VpnUserManager from "./components/VpnUserManager";
import Dashboard from "./components/Dashboard";
import MainLayout from "./components/MainLayout";
import Setting from "./components/Setting";
import { FaCog } from "react-icons/fa";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menu, setMenu] = useState("dashboard");
  const [user, setUser] = useState("User");

  // Ambil nama user dari login
  const handleLogin = (username) => {
    setUser(username);
    setLoggedIn(true);
    setMenu("dashboard");
  };

  if (!loggedIn) {
    return <Login onLogin={(username) => handleLogin(username)} />;
  }

  return (
    <MainLayout menu={menu} setMenu={setMenu}>
      {menu === "dashboard" && <Dashboard user={user} />}
      {menu === "vpn" && <VpnUserManager />}
      {menu === "setting" && <Setting />}
    </MainLayout>
  );
}

export default App;