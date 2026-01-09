# Jobsheet Node.js – Sistem Modul dan NPM

## Deskripsi
Jobsheet ini membahas penerapan **sistem modul pada Node.js** serta penggunaan **Node Package Manager (NPM)** untuk mengelola dependensi. Melalui praktikum ini, pengguna mempelajari cara memecah program menjadi modul-modul terpisah, menggunakan modul bawaan, serta memanfaatkan package pihak ketiga untuk membangun aplikasi yang lebih terstruktur dan interaktif.

## Materi yang Dipelajari
Dalam jobsheet ini dipelajari beberapa hal penting, antara lain:
- Penggunaan `require()` dan `module.exports` untuk modularisasi kode
- Pemanfaatan modul bawaan Node.js seperti `fs`
- Pengelolaan library eksternal menggunakan NPM
- Penggunaan `process.argv` dan **yargs** untuk membaca argument dari command line

## Kegiatan Praktikum
Selama praktikum, langkah-langkah yang dilakukan meliputi:

1. Mengelola file catatan menggunakan modul **fs**, termasuk membuat file baru dan menambahkan isi ke dalamnya.  

2. Membuat modul sendiri (`catatan.js`) lalu menghubungkannya ke program utama dengan `require()`.  

3. Menginisialisasi proyek menggunakan `npm init` dan menginstal beberapa package pendukung, seperti:
   - **validator** untuk memeriksa kevalidan data  
   - **chalk** untuk menampilkan output berwarna di terminal  
   - **nodemon** untuk menjalankan aplikasi dengan fitur auto-reload  

4. Mengimplementasikan pemrosesan argument pada command line menggunakan `process.argv` dan **yargs**.  

5. Mengembangkan aplikasi catatan berbasis terminal dengan fitur **CRUD (Create, Read, Update, Delete)** sehingga pengguna dapat menambah, melihat, memperbarui, dan menghapus catatan secara dinamis.

## Kesimpulan
Melalui jobsheet ini, diperoleh pemahaman yang lebih mendalam mengenai cara kerja modul di Node.js serta bagaimana NPM membantu dalam pengelolaan dependensi. Dengan mengombinasikan modul bawaan, modul buatan sendiri, dan package eksternal, aplikasi Node.js dapat dibangun secara lebih terstruktur, efisien, dan mudah dikembangkan.

---

Disusun oleh: **Brian Makmur**
