# Jobsheet 1 – Pengantar Node.js

## Deskripsi
Jobsheet ini membahas dasar-dasar **pemrograman jaringan** dan peran **Node.js** sebagai runtime JavaScript di sisi server. Mahasiswa mempelajari konsep komunikasi antar komputer serta bagaimana Node.js digunakan untuk membuat aplikasi jaringan yang efisien dan responsif.

## Materi Utama

### 1. Pemrograman Jaringan
Pemrograman jaringan adalah bidang yang mempelajari cara membuat aplikasi yang dapat saling berkomunikasi dan bertukar data melalui jaringan komputer, baik dalam skala **LAN** maupun **WAN**.

### 2. Konsep Dasar
Beberapa konsep penting yang dipelajari:
- **Arsitektur Client–Server**: Klien mengirim permintaan, server memberikan respons.
- **Protokol Jaringan**: Aturan komunikasi data seperti HTTP dan SMTP.
- **Socket**: Media komunikasi antara aplikasi melalui TCP atau UDP.
- **Sinkron dan Asinkron**: Sinkron menunggu proses selesai, sedangkan asinkron dapat berjalan paralel tanpa menunggu.
- **Aplikasi Web dan Mobile**: Biasanya berkomunikasi dengan server melalui API atau protokol jaringan.

### 3. Peran Node.js
Node.js adalah runtime JavaScript yang berjalan di server dengan pendekatan **event-driven** dan **non-blocking I/O**, sehingga sangat cocok untuk:
- Aplikasi dengan banyak koneksi klien
- Proses yang membutuhkan kecepatan dan efisiensi
- Sistem yang mengandalkan komunikasi jaringan

### 4. Keunggulan Node.js
- Mampu menangani banyak koneksi secara efisien  
- Performa tetap cepat meskipun ada proses I/O  
- Dapat dijalankan di berbagai sistem operasi  
- Menggunakan JavaScript untuk frontend dan backend  
- Memiliki banyak library melalui NPM  

## Kesimpulan Latihan B
Pada latihan ini dibuat file JavaScript sederhana (`hello.js`) yang dijalankan menggunakan Node.js melalui terminal. Hasilnya menunjukkan bahwa Node.js dapat mengeksekusi JavaScript tanpa browser, sehingga berfungsi sebagai runtime di sisi server.

## Kesimpulan Latihan C
Latihan ini memperlihatkan cara membuat **server HTTP sederhana** menggunakan file `hello-world.js`. Server tersebut dapat diakses melalui browser di alamat `http://127.0.0.1:3000/`.  
Latihan ini menjadi fondasi penting dalam pemrograman jaringan karena Node.js menyediakan modul bawaan seperti `http` untuk membangun server dengan cepat.

---

Disusun oleh: **Brian Makmur**
