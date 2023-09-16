# CatatanKecilku
## Catatan Sederhana Berbasis Web Menggunakan React JS + Vite 📝

Ini adalah proyek catatan sederhana berbasis web yang dibangun dengan menggunakan React JS dan Vite. Aplikasi ini memungkinkan pengguna untuk membuat, mengedit, dan menghapus catatan secara interaktif, dan catatan-catatan tersebut disimpan menggunakan session storage.
![ScreenShot][https://i.ibb.co/6FvRnc6/Simple-Catatanku.png]

**Author:** AlulCOde 🧑‍💻

**Open Source:** Ya, proyek ini sepenuhnya open source! Anda dapat menemukan kode sumbernya di [GitHub](https://github.com/AlulCode45/CatatanKecilku).

### Cara Menggunakan Aplikasi 🚀

Untuk menggunakan aplikasi ini, ikuti langkah-langkah berikut:

1. **Instalasi Dependencies** 📦
   Pastikan Anda telah menginstal Node.js di komputer Anda. Jika belum, Anda dapat mengunduhnya dari [situs web resmi Node.js](https://nodejs.org/).

   Setelah Node.js terinstal, buka terminal dan masuk ke direktori proyek ini. Kemudian, jalankan perintah berikut untuk menginstal semua dependencies yang diperlukan:

   ```
   npm install
   ```

2. **Menjalankan Aplikasi** ▶️
   Setelah semua dependencies terinstal, Anda dapat menjalankan aplikasi dengan perintah berikut:

   ```
   npm run dev
   ```

   Aplikasi akan dijalankan pada `http://localhost:3000`. Buka browser Anda dan akses alamat tersebut.

3. **Menggunakan Aplikasi** 📓
   - Anda akan melihat tampilan aplikasi yang berisi daftar catatan kosong pada awalnya.
   - Untuk menambahkan catatan baru, klik tombol "Tambah Catatan" di bagian atas.
   - Untuk mengedit catatan, klik pada catatan yang ingin Anda edit, lakukan perubahan, dan klik tombol "Simpan".
   - Untuk menghapus catatan, klik tombol "Hapus" pada catatan yang ingin Anda hapus.

4. **Simpan Catatan Menggunakan Session Storage** 💾
   - Catatan-catatan yang Anda buat akan disimpan menggunakan session storage browser Anda. Ini berarti catatan-catatan tersebut hanya akan tersedia selama sesi penjelajahan Anda. Saat Anda menutup browser atau menyegarkan halaman, catatan-catatan tersebut akan tetap ada.

### Struktur Proyek 📂

Struktur proyek ini terdiri dari beberapa direktori dan berkas utama:

- `src/`: Direktori ini berisi kode sumber aplikasi.
  - `components/`: Direktori ini berisi komponen React yang digunakan dalam aplikasi, seperti `NoteList`, `NoteForm`, dan lainnya.
  - `App.js`: Berkas ini adalah komponen utama yang mengatur tampilan dan logika aplikasi.
- `index.html`: Berkas HTML utama aplikasi.
- `main.js`: Berkas JavaScript utama yang menginisialisasi aplikasi React.
- `vite.config.js`: Berkas konfigurasi Vite.

### Catatan Tambahan 📌

Aplikasi ini hanya menyimpan catatan dalam session storage browser, sehingga catatan-catatan tersebut akan hilang saat Anda menutup browser atau membuka halaman dalam tab yang berbeda. Untuk menyimpan catatan secara permanen, Anda dapat mengintegrasikan aplikasi dengan backend dan database.

Selamat mencoba dan selamat berkoding! Jika Anda memiliki pertanyaan atau masalah, jangan ragu untuk menghubungi kami. 😊
