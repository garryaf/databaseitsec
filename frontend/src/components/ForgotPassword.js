import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import { FaCog } from "react-icons/fa";

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Kirim email ke backend untuk reset password
    setSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Forgot Password</h2>
        <p className="mb-6 text-gray-600">
          Masukkan email Anda. Kami akan mengirimkan instruksi reset password ke email Anda.
        </p>
        {sent ? (
          <div className="text-green-600 mb-4">Instruksi reset password telah dikirim ke email Anda (simulasi).</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
                placeholder="Masukkan Email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition-all"
            >
              Kirim Instruksi
            </button>
          </form>
        )}
        <button
          className="mt-6 text-blue-600 hover:underline text-sm"
          onClick={onBack}
        >
          Kembali ke Login
        </button>
      </div>
    </div>
  );
}
