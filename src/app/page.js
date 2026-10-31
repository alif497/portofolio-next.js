export const metadata={
  title:"Beranda|Muhammad Alif Anail Adi"
}
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Link from "next/link";
import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";



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
    <main className="mx-auto mx-w-5x1 px-4 py-10 font-bold text-utama">
      <Hero
      nama="Muhammad Alif Anail Adi"
      tagline="Siswa kelas X di kelas industri UBIG,Calon Junior Web developer"
      />
      <section className="gap-4">
      <div className="mt-3">
        <Link className="text-white rounded-xl px-1 py-2 border border-gray-300 bg-blue-600 font-bold gap-6"
        href="/tentang"
        >        
        Tentang saya
        </Link>
          <Link className="px-3 py-2 rounded-2xl text-black-700 hover:border hover:bg-green-400"
        href="/keahlian"
        >
          keahlian
        </Link>
      </div>
          </section>

        <h2 className="mt-6 mb-4 text-2x1 font-bold text-utama">Keahlihan</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map ((skill) =>(
            <SkillCard key={skill.nama} nama={skill.nama}
            level={skill.level} />
          ))}
        </div>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-utam">
            proyek Terbaru
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {proyek && proyek.map((item) =>(
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
          Lihat semua proyek
          </Link>
        </section>
    </main>
      </>
  );
}

