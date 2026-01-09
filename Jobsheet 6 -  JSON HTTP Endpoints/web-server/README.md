# Jobsheet 6 – JSON HTTP Endpoints

## Deskripsi Proyek
Jobsheet 6 membahas penerapan **JSON HTTP Endpoints** menggunakan **Express.js** sebagai bagian dari pengembangan aplikasi web berbasis API. Pada jobsheet ini, aplikasi dikembangkan untuk mengirim dan menerima data dalam format **JSON**, memanfaatkan **query string (req.query)**, serta mengintegrasikan API eksternal **Mapbox** dan **Weatherstack** guna menampilkan informasi cuaca secara real-time.

Aplikasi yang dihasilkan mampu menangani permintaan dari frontend, memproses data lokasi, dan mengembalikan respons cuaca secara dinamis melalui endpoint HTTP.

## Tujuan Pembelajaran
- Memahami konsep JSON HTTP Endpoints  
- Membuat endpoint dinamis menggunakan Express.js  
- Menggunakan query string (`req.query`) untuk menerima input pengguna  
- Mengintegrasikan API eksternal ke dalam aplikasi Node.js  
- Menghubungkan frontend dan backend menggunakan Fetch API  
- Menerapkan validasi input dan tampilan interaktif  

## Materi dan Tahapan Latihan
Beberapa tahapan yang dilakukan dalam jobsheet ini meliputi:

1. Mempelajari konsep JSON HTTP Endpoints sebagai URL yang berfungsi untuk mengirim dan menerima data berformat JSON melalui protokol HTTP.  

2. Menggunakan fitur `req.query` pada Express.js untuk membaca parameter dari URL, seperti `?address=padang`, dan menghasilkan respons JSON yang sesuai.  

3. Membuat endpoint `/infoCuaca` yang mampu memberikan respons berbeda berdasarkan ada atau tidaknya parameter alamat yang dikirimkan pengguna.  

4. Menghubungkan aplikasi Node.js dengan layanan API eksternal menggunakan modul `postman-request`.  

5. Membuat dua modul utilitas, yaitu:
   - `geocode.js` untuk mengakses Mapbox API dan memperoleh data koordinat berupa latitude, longitude, dan nama lokasi.
   - `prediksiCuaca.js` untuk mengakses Weatherstack API dan menampilkan informasi cuaca seperti deskripsi kondisi, suhu, visibilitas, dan indeks UV.

6. Mengintegrasikan kedua modul tersebut ke dalam `app.js` sehingga aplikasi dapat mengembalikan data cuaca dalam format JSON dinamis, contohnya:
   ```json
   {
     "prediksiCuaca": "Cuaca cerah dengan suhu 30 derajat",
     "lokasi": "Padang, Indonesia",
     "address": "padang"
   }
   ```

7. Mengintegrasikan sisi frontend menggunakan Fetch API dengan menambahkan form pencarian pada halaman `index.hbs`, sehingga pengguna dapat mencari informasi cuaca tanpa melakukan refresh halaman.

8. Menambahkan styling menggunakan CSS untuk memperbaiki tampilan form, tombol pencarian, serta area hasil pencarian agar lebih interaktif.

9. Menerapkan validasi input pengguna, sehingga sistem menampilkan pesan kesalahan ketika kolom pencarian dibiarkan kosong.

10. Menyesuaikan tampilan halaman bantuan dan halaman tentang agar lebih informatif serta selaras dengan fungsi masing-masing halaman.

## Teknologi yang Digunakan
- Node.js  
- Express.js  
- JavaScript  
- Mapbox API  
- Weatherstack API  
- Handlebars (hbs)  
- HTML, CSS  
- Fetch API  

## Hasil dan Output Aplikasi
Aplikasi yang dibangun mampu:
- Menyediakan endpoint JSON dinamis  
- Menampilkan data cuaca berdasarkan lokasi pengguna  
- Menghubungkan frontend dan backend secara real-time  
- Menangani validasi input pengguna  
- Menampilkan antarmuka web yang interaktif  

## Kesimpulan
Melalui Jobsheet 6 ini, diperoleh pemahaman menyeluruh mengenai peran JSON HTTP Endpoints dalam pengembangan aplikasi web modern berbasis API.  
Selain itu, penerapan Express.js, penggunaan `req.query`, serta integrasi API eksternal berhasil memperlihatkan alur kerja yang jelas antara frontend, backend, dan layanan pihak ketiga.  
Hasil akhir dari jobsheet ini adalah sebuah aplikasi web interaktif yang mampu menampilkan informasi cuaca berdasarkan lokasi pengguna dalam format JSON secara dinamis.
