"use client";

import { useState } from "react";

import ProyekCard from "./ProyekCard"
const daftarKategori=["SEMUA", "HTML", "CSS", "JavaScript","Next.js"];
const tombolBiasa="rounded-full border border-utama dark:border-sky-200 dark:border-sky-200 px-4 py-1 text-sm font-semibold text-utama dark:text-sky-200 dark:text-sky-200";
const tombolAktif="rounded-full border border-aksen bg-aksen px-4 py-1 text-sm font-semibold text-white"

export default function FilterProyek({proyek}) {
    const [kategori,setKategori] = useState("SEMUA");
    const [kata,setKata] = useState("")

    const kataKecil = kata.toLowerCase();
    const hasil= kategori === "" ? proyek: proyek.filter((p) =>{
        const cocokKategori = kategori === "SEMUA" || p.kategori.toLowerCase().includes(kategori.toLowerCase());        
        const cocokJudul = p.judul.toLowerCase().includes(kataKecil);
        const cocokDeskripsi =
        p.deskripsi.toLowerCase().includes(kataKecil);
        const cocokKata = cocokJudul || cocokDeskripsi;
        return cocokKategori && cocokKata;
    });

    return(
        <div className="mt-8">
           <div className="flex flex-wrap gap-2">
            {daftarKategori.map((k) => (
                <button key={k} type="button" onClick={() => setKategori(k)}
                className={kategori === k ? tombolAktif:tombolBiasa}>
                    {k}
                </button>
            ))}
           </div>

           <div className="mt-6">
            <label htmlFor="Cari" className="block font-semibold">
                Cari Proyek
            </label>
            <input
            type="text"
            id="cari"
            value={kata}
            onChange={(e) => setKata(e.target.value)}
            placeholder="Contoh:HTML"
            className="mt-1 w-full rounded-lg border border-gray-300
dark:border-gray-600
dark:border-gray-600 bg-white dark:bg-gray-800 dark:bg-gray-800 p-2 md:w-80"
            />

                {kata !== "" && (
                    <button
                    type="button"
                    onClick={() => setKata("")}
                    className="block mt-2 text-sm font-smibold text-aksen dark-text-red-300 hover:underline">
                        Hapus Pencarian
                    </button>
                )}
           </div>

           <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            menampilkan {hasil.length} dari {proyek.length} proyek</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
            {hasil.map((item) => (
                <ProyekCard key={item.slug} proyek={item} />
            ))}
        </div>
        {hasil.length === 0 && (
            <p className="mt-6 rounded-xl border border-dashed border-gray-300
dark:border-gray-600
dark:border-gray-600 p-6 text-center text-gray-600 dark:text-gray-400 dark:text-
gray-400">
                Belum ada proyek yang cocok
            </p>
        )}

        </div>
    );
}