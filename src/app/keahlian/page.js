import SkillCard from "@/components/SkillCard";
import Link from "next/link";
const skills = [
  {nama: "HTML",level:"Menengah"},
  {nama: "CSS",level:"menengah"},
  {nama:"Git dan GitHub",level:"Dasar"},
  {nama:"Desain poster dengan canva", level:"Mahir"},
  {nama:"Javascript",level:"Dasar"}
];

export default function keahlian(){
    return(
        <main className="mx-auto mt-12">
            <h2 className="mt-8 mb-4 text-2x1 font-bold text-utama">Keahlihan</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {skills.map ((skill) =>(
                    <SkillCard key={skill.nama} nama={skill.nama}
                    level={skill.level} />
                  ))}
                </div>
                <div className="mt-8">
                    <Link className="text-lg font-semibold mt-6 text-black border border-gray-300 rounded-3xl bg-gray-300"
                    href="/"
                    >
                        ← Kembali ke beranda
                    </Link>
                </div>
                </main>
    );
}