import Image from "next/image";

export default function Hero({nama, tagline}) {
    return(
        <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <Image
            src="/gambar 1.png"
            alt={'Foto-profil ${nama}'}
            width={180}
            height={180}
            loading="eager"
            className="rounded-full border-4 border-aksen object-cover aspect-square"
            />
            <div>
                <h1 className="text-3x1 font-bold text-utama md:text-5x1">Halo,saya {nama}!</h1>
                <p className="mt-3 text-1g text-gray-700">{tagline}</p>
            </div>
        </section>
    );
}