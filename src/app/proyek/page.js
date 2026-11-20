import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";

export const metadata ={
    title:"Proyek",
    description:"Daftar proyek HTML,CSS,dan JavaScript karya Muhammad Alif Anail Adi.",
}

export default async function DaftarProyek () {
    const {data:proyek,error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at");
    return(
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary dark:text-sky-200 md:text-4xl">
                Proyek Saya
            </h1>
            <p className="mt-3 text-lg text-muted-foreground dark:text-gray-300">Kumpulan hasil
                belajar saya di kelas industri UBIG . Klik Kartu untuk melihat detailnya
            </p>
            {error && (
                <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-aksen">
                    Data Proyek Gagal Dimuat: {error.message}
                </p>
            )}
            {proyek && proyek.length > 0 && <FilterProyek proyek={proyek} />}
        </main>
    );
}