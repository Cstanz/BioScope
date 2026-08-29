# BioScope — Classification Challenge

Prototype pembelajaran klasifikasi biologi berbasis **HTML5, CSS3, dan Vanilla JavaScript**.

## Perubahan visual

- Menggunakan tema terang agar halaman lebih nyaman dibaca.
- Tipografi memakai font sistem yang aman tanpa library eksternal.
- Heading memakai serif untuk nuansa editorial/scientific encyclopedia.
- Body text memakai sans-serif untuk keterbacaan.
- Warna utama menggunakan off-white, sage, hijau natural, dan aksen terracotta.
- Tidak menggunakan gradient berlebihan, glassmorphism, particle effect, atau animasi berat.

## Struktur kode

```text
BioScope/
├── index.html
├── why-classify.html
├── monera.html
├── protista.html
├── fungi.html
├── plantae.html
├── animalia.html
├── classification-challenge.html
├── progress.html
├── about.html
├── divisions/
│   └── *.html
├── css/
│   └── style.css
└── js/
    ├── data.js
    └── main.js
```

## Mudah diedit

- `css/style.css` berisi design system dan responsive layout dengan section yang dipisahkan jelas.
- `js/data.js` adalah sumber utama data kingdom, division/phylum, challenge, dan quiz.
- `js/main.js` berisi logika navigasi, progress, score, unlock 85%, challenge, dan quiz.
- Setiap halaman HTML ditulis dengan indentation sehingga struktur mudah ditemukan dan diubah.

## Menjalankan

Tidak membutuhkan build tool atau backend.

1. Extract folder project.
2. Buka `index.html` di browser modern.
3. Progress tersimpan di `localStorage` browser.

## Catatan

Visual biologis masih menggunakan placeholder sesuai spesifikasi. Gambar nyata dapat ditambahkan kemudian tanpa mengubah struktur pembelajaran.
