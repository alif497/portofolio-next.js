import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
    return(
        <Link
    href={`/proyek/${proyek.slug}`}
    className="block overflow-hidden rounded-xl border border-gray-200dark:border-gray-
700
dark:border-gray-700 bg-white dark:bg-gray-800 dark:bg-gray-800 shadow-sm hover:shadow-md"
>
            <Image
            src={proyek.gambar}
            alt={`Tangkapan layar ${proyek.judul}`}
            width={640}
            height={420}
            loading="eager"
            className="h-auto w-full"
            />
            <div className="p-5">
                {proyek.kategori.split(",").map((kat,index) =>(
                    <span key={index} className="rounded-full font-bold px-3 py-1 bg-latar dark:bg-gray-900 dark:bg-gray-900 text-xs text-utama dark:text-sky-200 dark:text-
sky-200">
                        {kat.trim()}
                    </span>
                ))}
                <h3 className="mt-3 text-lg font-semibold text-utama dark:text-sky-200 dark:text-
sky-200">{proyek.judul}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 dark:text-
gray-400">{proyek.deskripsi}</p>
            </div>
        </Link>
        
    );
}

