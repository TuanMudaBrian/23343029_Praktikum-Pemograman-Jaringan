# Jobsheet 3 – HTTP Request and API (Node.js)

## Deskripsi Proyek
Proyek ini merupakan hasil implementasi Jobsheet 3 yang berfokus pada pemahaman mekanisme **HTTP Request** serta pemanfaatan **API (Application Programming Interface)** menggunakan lingkungan **Node.js**.  
Aplikasi yang dikembangkan mampu menampilkan informasi cuaca berdasarkan lokasi pengguna dengan mengintegrasikan **Mapbox API** dan **Weatherstack API**.

## Tujuan Pembelajaran
- Memahami konsep HTTP Request dan Response  
- Mengenal metode HTTP seperti GET, POST, PUT, dan DELETE  
- Mengimplementasikan konsumsi API pada Node.js  
- Mengolah dan menampilkan data berformat JSON  
- Mengintegrasikan lebih dari satu API dalam satu aplikasi  

## Fitur Utama
- Mengambil data dari API eksternal menggunakan metode HTTP GET  
- Melakukan forward geocoding (nama lokasi menjadi koordinat geografis)  
- Menampilkan informasi cuaca terkini berdasarkan lokasi  
- Output data ditampilkan secara langsung melalui terminal  

## Teknologi yang Digunakan
- Node.js  
- JavaScript  
- Mapbox API  
- Weatherstack API  
- Modul postman-request  

## Cara Kerja Aplikasi
1. Pengguna memasukkan nama lokasi melalui terminal.  
2. Aplikasi mengirim HTTP request ke Mapbox API untuk mendapatkan koordinat (latitude dan longitude).  
3. Koordinat tersebut dikirim ke Weatherstack API untuk memperoleh data cuaca.  
4. Informasi cuaca ditampilkan di terminal dalam bentuk teks yang mudah dipahami.  

## Output Aplikasi
Aplikasi menampilkan informasi berikut:
- Nama lokasi  
- Suhu udara  
- Deskripsi kondisi cuaca  
- Kemungkinan hujan  

## Kesimpulan
Melalui Jobsheet 3 ini, diperoleh pemahaman bahwa komunikasi antara klien dan server pada Node.js dapat dilakukan secara efektif menggunakan HTTP Request dan API. Selain itu, proses pengolahan data JSON, pengelolaan access key, serta integrasi beberapa API dapat diterapkan untuk membangun aplikasi sederhana yang fungsional.  
Hasil akhir dari jobsheet ini adalah aplikasi berbasis Node.js yang mampu menampilkan informasi cuaca secara dinamis berdasarkan lokasi pengguna.
