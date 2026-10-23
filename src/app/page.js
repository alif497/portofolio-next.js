import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  {nama: "HTML",level:"Menengah"},
  {nama: "CSS",level:"menengah"},
  {nama:"Git dan GitHub",level:"Dasar"},
  {nama:"Desain poster dengan canva", level:"Mahir"},
  {nama:"Javascript",level:"Dasar"}
];

export default function Home() {
  return(
    <>
    <main className="mx-auto mx-w-5x1 px-4 py-10">
      <Hero
      nama="Muhammad Alif Anail Adi"
      tagline="Siswa kelas x SMKN 1 Kepanjen,calon Junior web developer di kelas Industri UBIG"
      />
      <section className=" mt-6 rounded-2xl border border-gray-300 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">tentang saya</h2>
        <p className="max-w-xl">
  Hallo, namaku Muhammad Alif Anail Adi. Aku bersekolah di SMKN 1 Kepanjen,
  dan saya berjurusan RPL di kelas industri PT.Universal Big Data atau bisa 
  disingkat juga dengan (U-BIg)</p>
      </section>

       <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-utama">
            Hobi
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              Coding
            </li>
            <li>
              Badminton
            </li>
            <li>
              Joging
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
          <h2 className="mb- text-2xl text-utama font-bold">
            Cita-Cita
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-600"><br></br>
            <li>
              Web Developer
            </li>
            <li>
              Cyber Security
            </li>
          </ul>
        </div>
       </section>

      <section className="mt-10 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2x1 font-bold text-utama">Keahlihan</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map ((skill) =>(
            <SkillCard key={skill.nama} nama={skill.nama}
            level={skill.level} />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-utama">
          Jadwal Belajar
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">

            <thead>
              <tr className="bg-[#1e3558] text-white p-6">
                <th className="w-1/5 px-4 py-3">Hari</th>
                <th className="w-1/5 px-4 py-3">Waktu</th>
                <th className="px-4 py-3">kegiatan</th>
              </tr>
               </thead>

               <tbody>
              <tr className="rounded-2xl border border-gray-200 hover:bg-gray-50">
                <td className="px-2 py-2">Senin</td>
                <td>19.00-20.00</td>
                <td>Membaca Ulang Modul</td>
              </tr>

              <tr className=" rounded-2xl border border-gray-200 hover:bg-gray-50">
                <td className="px-2 py-2">Selasa</td>
                <td>19.00-21.00</td> 
                <td>Mengerjakan Tugas Praktik</td>
              </tr>

              <tr className="rounded-2xl border border-gray-200 hover:bg-gray-50">
                <td className="px-2 py-2">Rabu</td>
                <td>19.30-20.30</td>
                <td>Merekam Video dan menulis laporan</td>
              </tr>
              </tbody>
          </table>
        </div>
      </section>
    </main>
          <footer className="mt-8 border-t border-gray-300 bg-[#1e3558] text-center text-white text-base px-5 py-5">
        © 2026 Muhammad Alif Anail Adi.Dibuat Menggunakan Next.js di kelas Industri UBIG
      </footer>
      </>
  );
}

