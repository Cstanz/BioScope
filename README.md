```text
    ____  _       _____                      
   / __ )(_)___  / ___/_________  ____  ___  
  / __  / / __ \ \__ \/ ___/ __ \/ __ \/ _ \ 
 / /_/ / / /_/ /___/ / /__/ /_/ / /_/ /  __/ 
/_____/_/\____//____/\___/\____/ .___/\___/  
                              /_/            
```

# 🔬 BioScope — Classification Challenge

BioScope adalah platform pembelajaran interaktif berbasis web yang dirancang untuk membantu mahasiswa memahami klasifikasi biologi (Taksonomi) dari lima kingdom. Platform ini menggunakan pendekatan *gamification* di mana pengguna harus menyelesaikan materi dan kuis dengan skor tertentu untuk membuka akses ke materi selanjutnya.

## ✨ Fitur Utama

* **Sistem Pembelajaran Terkunci (Gamification):** Mahasiswa harus mencapai skor minimal **85%** pada kuis evaluasi untuk meng-unlock kingdom berikutnya (Monera → Protista → Fungi → Plantae → Animalia).
* **Interactive Editorial Taxonomy Map:** Peta klasifikasi visual yang dinamis dengan efek *hover* interaktif dan *floating annotations* untuk memahami hierarki makhluk hidup secara memukau.
* **3D Specimen Viewer:** Integrasi embed 3D model (via Sketchfab) yang langsung berputar otomatis untuk visualisasi organisme yang lebih nyata (contoh: struktur Coronavirus pada materi Monera).
* **Observation Cards:** Tampilan UI kartu observasi dalam bentuk *grid* yang rapi dan elegan untuk mempelajari karakteristik utama organisme.
* **Local Progress Tracking:** Seluruh data *progress* belajar, skor kuis, dan riwayat *unlock* disimpan secara otomatis di browser menggunakan `localStorage`.
* **Admin Bypass Mode:** Mode khusus (akses via console/local storage) untuk *reviewer* atau dosen agar dapat mengakses seluruh materi tanpa harus menyelesaikan kuis berurutan.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun murni menggunakan teknologi *front-end* dasar tanpa *framework* eksternal (Vanilla), sehingga sangat ringan, cepat, dan teroptimasi:
* **HTML5** (Struktur semantik)
* **CSS3** (Styling, animasi *keyframes*, Flexbox & CSS Grid, tipografi responsif)
* **Vanilla JavaScript** (Logika aplikasi, manipulasi DOM dinamis, validasi kuis)
* **Web Storage API (localStorage)** (Penyimpanan state & data user secara lokal)

## 🚀 Cara Menjalankan Project (Instalasi)

Karena BioScope berjalan murni di sisi *client* (Client-Side), Anda tidak perlu menginstal server, dependensi *Node.js*, atau *database* tambahan.

1. *Clone* atau *download* (ZIP) repository ini ke komputer Anda.
2. Ekstrak folder proyek jika dalam bentuk ZIP.
3. Buka file `index.html` langsung menggunakan browser modern pilihan Anda (direkomendasikan Google Chrome, Firefox, atau Brave).

## 📝 Catatan Khusus & Kredit

* **Penyimpanan Data:** Karena menggunakan `localStorage`, *progress* skor mahasiswa akan hilang jika pengguna membersihkan *cache/history* browser atau jika membuka web di mode *Incognito/Private Browsing*.
* **Kredit 3D Model:** Model 3D Coronavirus pada materi Monera menggunakan fitur embed interaktif yang disediakan oleh sketchfab 