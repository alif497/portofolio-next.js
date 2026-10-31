import Image from "next/image";
import Link from "next/link";
import { proyek } from "@/data/proyek";
export async function generateStaticParams() {
  return proyek.map((item) => ({
    slug: item.slug,
  }));
}
export default async function DetailProyek({ params }) {
  const { slug } = await params;
  
  const item = proyek.find((p) => p.slug === slug);
  if (!item) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">Proyek Tidak Ditemukan</h1>
        <p className="mt-2 text-gray-600">
          Parameter slug <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600 font-mono">"{slug}"</code> tidak cocok dengan data apa pun.
        </p>
        <Link href="/proyek" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline">
          &larr; Kembali ke daftar proyek
        </Link>
      </main>
    );
  }
  const teksKategori = Array.isArray(item.kategori) 
    ? item.kategori.join(", ") 
    : item.kategori;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/proyek" className="text-sm font-semibold text-blue-600 hover:underline">
        &larr; Kembali ke daftar proyek
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">{item.judul}</h1>
      <p className="mt-2 text-gray-600">
        {teksKategori} &middot; Dibuat di {item.minggu}
      </p>

      <div className="relative mt-6 aspect-[640/420] w-full overflow-hidden rounded-xl border border-gray-200">
        <Image
          src={item.gambar}
          alt={`Tangkapan layar ${item.judul}`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <p className="mt-6 text-lg text-gray-700">{item.deskripsi}</p>

      <h2 className="mt-8 text-2xl font-bold text-gray-900">Yang Saya Pelajari</h2>
      
      <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
        {item.fitur && item.fitur.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </main>
  );
}
