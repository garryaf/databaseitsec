import React, { useState } from "react";
import axios from "axios";

export default function MasterData() {
  const [mika, setMika] = useState({ nama: "", kode: "" });
  const [unit, setUnit] = useState({ nama: "", kode: "" });
  const [level, setLevel] = useState({ nama: "", kode: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = (e, type) => {
    e.preventDefault();
    let valid = true;
    if (type === "mika" && !/^[A-Za-z]{4}$/.test(mika.kode)) valid = false;
    if (type === "unit" && !/^[A-Za-z]{4}$/.test(unit.kode)) valid = false;
    if (type === "level" && !/^[A-Za-z]{4}$/.test(level.kode)) valid = false;
    if (!valid) {
      setMsg("Kode harus 4 huruf.");
      return;
    }
    setMsg("Data berhasil disimpan! (simulasi)");
    if (type === "mika") setMika({ nama: "", kode: "" });
    if (type === "unit") setUnit({ nama: "", kode: "" });
    if (type === "level") setLevel({ nama: "", kode: "" });
  };

  return (
    <div className="max-w-2xl bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-bold mb-4">Input Master Data</h3>
      {msg && <div className="mb-2 text-green-600">{msg}</div>}
      {/* Input Mika */}
      <form onSubmit={e => handleSubmit(e, "mika")} className="mb-6 space-y-2">
        <div className="font-semibold">Mika</div>
        <input
          type="text"
          name="nama"
          value={mika.nama}
          onChange={e => setMika({ ...mika, nama: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Nama Mika"
          required
        />
        <input
          type="text"
          name="kode"
          value={mika.kode}
          onChange={e => setMika({ ...mika, kode: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Kode Mika (4 huruf)"
          maxLength={4}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
        >
          Simpan Mika
        </button>
      </form>
      {/* Input Unit Kerja */}
      <form onSubmit={e => handleSubmit(e, "unit")} className="mb-6 space-y-2">
        <div className="font-semibold">Unit Kerja</div>
        <input
          type="text"
          name="nama"
          value={unit.nama}
          onChange={e => setUnit({ ...unit, nama: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Nama Unit Kerja"
          required
        />
        <input
          type="text"
          name="kode"
          value={unit.kode}
          onChange={e => setUnit({ ...unit, kode: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Kode Unit Kerja (4 huruf)"
          maxLength={4}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
        >
          Simpan Unit Kerja
        </button>
      </form>
      {/* Input Level */}
      <form onSubmit={e => handleSubmit(e, "level")} className="space-y-2">
        <div className="font-semibold">Level</div>
        <input
          type="text"
          name="nama"
          value={level.nama}
          onChange={e => setLevel({ ...level, nama: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Nama Level"
          required
        />
        <input
          type="text"
          name="kode"
          value={level.kode}
          onChange={e => setLevel({ ...level, kode: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Kode Level (4 huruf)"
          maxLength={4}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
        >
          Simpan Level
        </button>
      </form>
    </div>
  );
}
