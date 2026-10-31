export default function FOoter() {
    const tahun = new Date () .getFullYear();
    return(
        <footer className="mt-auto bg-utama p-6 text-center text-latar">
            <p>&copy;{tahun} Muhammad ALif Anail Adi.Dibuat dengan next.js di kelas Industri UBIG</p>
        </footer>
    );
}