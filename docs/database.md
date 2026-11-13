## Struktur Database Portofolio

Database disimpan di Supabase, project 'protofolio Muhammad Alif Anail Adi' (region
Southeast Asia,Singapore).Alamat project dan publishable key disimpan di '.env.local', yang tidak ikut di-commit karena tercantum di '.gitignore' ('.env*').

## Tabel 'projects'

Daftar Proyek portofolio Muhmmad Alif Anail Adi.

|kolom | Tipe | keterangan |
|---|---|---|
|'id'| 'int8' | primary key, nomor otomatis 1,2,3,....|
| 'created_at'|'timestamptz' | Waktu baris dibuat, terisi otomatis dengan 'now()'|
|'slug'|'text'| penanda unik di alamat,misalnya 'halaman-profil'(unik) |
|'judul'|'text'| Judul Proyek|
|'deskripsi'| 'text'| kalimat singkat tentang proyek|
|'kategori' | 'text' | HTML,CSS,atau JavaScript |
|'minggu' | 'text' | Minggu proyek dibuat,misalnya 'Minggu 01' |
|'fitur' | 'text[]' | Daftar hal yang dipelajari (array teks) |
|'Gambar_url'| 'text'| Alamat gambar di folder  'public', misalnya '\proyek/proyek.png'|

RLS aktif.policy 'pengunjung boleh membaca proyek': peran 'anon'
boleh 'select' semua baris.

## Tabel 'messagess'

pesan dari form kontak.

|kolom|tipe|keterangan|
|---|---|---|
|'id'|'int8'| primary key,nomor otomatis 1,2,3,....|
|'created_at'| 'timestampz' | waktu baris dibuat,terisi otomatis dengan 'now()'|
|'nama'| 'text'| Nama Pengirim|
|'email' | 'text'| Email Pengirim | 
|'pesan' | 'text' | isi pesan |

RLS aktif tanpa policy, sehingga pengunjung tidak bisa  membaca pesan. Policy 'insert' dibuat di Minggu 15