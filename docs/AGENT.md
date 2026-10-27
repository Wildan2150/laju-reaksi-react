# AGENT.md - Development & Architecture Guidelines

Dokumen ini berisi panduan teknis, arsitektur, konvensi kode, dan aturan operasional untuk AI Agent dan pengembang yang bekerja pada repositori **Virtual Chemistry Lab** (`projek-kimia`).

---

## 1. Ikhtisar Repositori (Project Overview)
- **Nama Proyek:** `projek-kimia` (Virtual Chemistry Lab)
- **Tujuan:** Aplikasi web simulasi laboratorium kimia interaktif dan tabel periodik untuk siswa SMA dengan tema *Clean Scientific & Minimalis*.
- **Jenis Aplikasi:** Single Page Application (SPA) berbasis client-side.

---

## 2. Tumpukan Teknologi (Technology Stack)
- **Framework:** React 19 (Hooks & Functional Components).
- **Bahasa Pemrograman:** TypeScript (Strict mode diaktifkan).
- **Bundler & Build Tool:** Vite.
- **Styling:** Vanilla CSS murni dengan CSS Custom Properties (Variables) & CSS Modules/scoped classes. 
  *(Catatan: Jangan gunakan TailwindCSS kecuali diminta secara eksplisit oleh pengguna).*
- **Ikonografi & Aset:** SVG murni / ikon inline ringan dan representasi grafis CSS.

---

## 3. Struktur Direktori yang Ditetapkan (Project Structure)
```
projek-kimia/
├── .agent/
│   ├── PRD.md                 # Product Requirements Document
│   └── AGENT.md               # Pedoman Teknis & Konvensi Agent (dokumen ini)
├── public/                    # Aset statis publik
├── src/
│   ├── assets/                # Gambar, logo, ikon SVG
│   ├── components/            # Komponen React modular
│   │   ├── Header/            # Navigasi & mode switcher
│   │   ├── Workbench/         # Meja laboratorium interaktif (Beaker, tabung reaksi)
│   │   ├── ChemicalShelf/     # Rak pemilihan zat kimia & reagen
│   │   ├── PhTesting/         # Alat uji pH (lakmus, universal, probe digital)
│   │   ├── ReactionInfo/      # Panel persamaan reaksi & penjelasan ilmiah
│   │   ├── PeriodicTable/     # Komponen tabel periodik pendukung
│   │   └── GuidedLab/         # Modul praktikum terpandu
│   ├── data/                  # Basis data statis terverifikasi
│   │   ├── chemicals.ts       # Database zat kimia (nama, rumus, wujud, warna, pH murni)
│   │   ├── reactions.ts       # Aturan kombinasi reaksi, produk, efek visual
│   │   ├── elements.ts        # Data unsur tabel periodik (nomor atom, massa, golongan)
│   │   └── experiments.ts     # Preset skenario praktikum terpandu SMA
│   ├── types/                 # Definisi tipe TypeScript
│   │   ├── chemical.ts        # Interface Chemical, Concentration, State
│   │   ├── reaction.ts        # Interface ReactionRule, ReactionProduct, VisualEffect
│   │   ├── beaker.ts          # Interface BeakerState, MixtureComponent
│   │   └── element.ts         # Interface PeriodicElement
│   ├── utils/                 # Logika ilmiah murni & helper
│   │   ├── chemistrySolver.ts # Algoritma pencocokan reaksi & kalkulasi produk
│   │   ├── phCalculator.ts    # Perhitungan pH campuran larutan & warna indikator
│   │   └── formatters.ts      # Pemformat subskrip rumus kimia (H₂O, SO₄²⁻)
│   ├── styles/                # Sistem token desain global
│   │   ├── variables.css      # CSS variables (warna lab, spacing, typography, shadow)
│   │   └── base.css           # Reset CSS & utilitas tipografi ilmiah
│   ├── App.tsx                # Komponen root aplikasi & routing state
│   ├── main.tsx               # Entry point React
│   └── index.css              # Global styles entry
├── index.html                 # HTML template utama
├── package.json               # Dependensi & script proyek
├── tsconfig.json              # Konfigurasi TypeScript
└── vite.config.ts             # Konfigurasi bundler Vite
```

---

## 4. Konvensi & Standar Pengkodean (Coding Standards)

### 4.1. TypeScript & Integritas Tipe
- Gunakan tipe data yang jelas dan ketat (*strict typing*). **Dilarang keras menggunakan tipe `any`**.
- Definisikan interface dan type alias di folder `src/types/`.
- Gunakan union types untuk wujud zat (`'aq' | 's' | 'l' | 'g'`) dan jenis reaksi (`'neutralization' | 'precipitation' | 'redox' | 'gas_evolution' | 'none'`).

### 4.2. Pemisahan Logika Ilmiah (Separation of Concerns)
- **Komponen Presentasi:** Hanya bertanggung jawab untuk rendering antarmuka, menangani interaksi pengguna, dan memicu animasi.
- **Utils / Solvers Kimia:** Seluruh logika perhitungan kimia (seperti pendeteksian reaksi kimia, perhitungan pH, pengenceran konsentrasi, dan penentuan warna) harus berupa *pure functions* di dalam folder `src/utils/` agar mudah diuji secara modular.

### 4.3. Konvensi Bahasa
- **Kode Program (Variabel, Fungsi, Types, File):** Gunakan Bahasa Inggris teknis yang baku (contoh: `calculateMixturePh`, `ChemicalMixture`, `isPrecipitateFormed`).
- **Antarmuka Pengguna (UI) & Penjelasan Kimia:** Gunakan Bahasa Indonesia yang baik dan edukatif, sesuai istilah standar kimia SMA/Kemdikbud (contoh: "Asam Klorida", "Endapan Putih", "Persamaan Reaksi", "Netralisasi").

### 4.4. Panduan Desain & Visual (Clean Scientific)
- Gunakan palet warna laboratorium yang elegan: latar bersih putih/slate, garis batas abu-abu lembut, dan kontras tajam untuk teks ilmiah.
- Gunakan CSS Custom Properties (`--color-lab-bg`, `--color-primary`, `--beaker-fluid-color`, dll.) untuk mempermudah konsistensi visual.
- Tampilkan rumus kimia dengan format subscript yang rapi menggunakan komponen atau formatter (contoh: $H_2SO_4$, bukan H2SO4 polos).

---

## 5. Aturan Kerja AI Agent (Agent Rules & Workflow)
1. **Validasi Build:** Selalu jalankan `npm run build` setelah melakukan modifikasi signifikan untuk memastikan tidak ada kesalahan kompilasi TypeScript atau CSS.
2. **Tanpa Data Palsu yang Rusak:** Pastikan semua data reaksi kimia dalam `reactions.ts` valid secara ilmiah dan sesuai dengan reaksi nyata tingkat SMA.
3. **Komponen Modular:** Pecah antarmuka menjadi komponen-komponen kecil yang reusable, hindari menulis file tunggal yang terlampau panjang (> 300 baris jika bisa dipecah).
4. **Preservasi Dokumentasi:** Jangan menghapus komentar atau dokumentasi yang sudah ada tanpa instruksi eksplisit.
5. **Navigasi File:** Ketika mereferensikan file dalam komunikasi dengan pengguna, selalu gunakan format tautan markdown github yang dapat diklik: `[nama_file](file:///path/to/file)`.

---

## 6. Perintah Standar (Common Commands)
- Menjalankan server lokal: `npm run dev`
- Memeriksa tipe dan build: `npm run build`
- Linter: `npm run lint`
