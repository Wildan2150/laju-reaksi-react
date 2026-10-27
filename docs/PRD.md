# Product Requirements Document (PRD)
## Virtual Chemistry Lab & Chemical Reaction Simulator (Lab Kimia Virtual)

---

### 1. Ringkasan Eksekutif (Executive Summary)
**Virtual Chemistry Lab** adalah aplikasi web interaktif edukatif yang dirancang untuk memfasilitasi simulasi eksperimen kimia bagi siswa SMA/sederajat. Aplikasi ini memungkinkan pengguna melakukan simulasi pencampuran zat kimia, mengamati reaksi visual (perubahan warna, timbulnya gas, endapan, perubahan suhu), melakukan uji pH dan titrasi sederhana, serta mengeksplorasi sifat unsur melalui visualisasi interaktif tabel periodik secara aman, bebas biaya, dan realistis.

---

### 2. Latar Belakang & Masalah (Problem Statement)
- **Keterbatasan Fasilitas Laboratorium:** Banyak sekolah memiliki fasilitas bahan kimia dan alat laboratorium yang terbatas atau kadaluarsa.
- **Risiko Keselamatan Kerja:** Siswa pemula seringkali tidak dapat mencoba langsung zat-zat asam kuat, basa pekat, atau reagen berbahaya karena risiko kecelakaan.
- **Kesulitan Visualisasi Konsep Abstrak:** Siswa kesulitan memahami apa yang terjadi di tingkat molekuler saat reaksi kimia berlangsung (misal: perpindahan ion, perubahan pH, dan kesetaraan reaksi).
- **Kebutuhan Media Pembelajaran Modern:** Guru membutuhkan media peraga digital yang interaktif, bersih, dan mudah dijalankan langsung di browser kelas.

---

### 3. Target Pengguna & Persona
1. **Siswa SMA (Kelas X, XI, XII):**
   - Ingin memahami konsep reaksi kimia, asam-basa, stoikiometri, dan tabel periodik secara visual tanpa takut salah.
2. **Guru Kimia:**
   - Membutuhkan alat peraga digital cepat untuk demonstrasi reaksi di kelas atau penugasan praktikum virtual.
3. **Penggemar Edukasi Sains:**
   - Pengguna yang ingin mengeksplorasi kombinasi kimia dasar secara kasual dan interaktif.

---

### 4. Nilai Unik Produk (Value Proposition)
- **Aman & Interaktif:** Simulasi tanpa batas tanpa risiko zat kimia berbahaya.
- **Visualisasi Ilmiah yang Bersih:** Indikator warna, animasi gelembung gas, pembentukan presipitat (endapan), dan perubahan suhu termokimia yang presisi.
- **Kurikulum Relevan:** Reaksi dan reagen disesuaikan dengan topik kimia SMA (Asam Basa, Indikator pH, Reaksi Pengendapan, Reaksi Redoks sederhana, Identifikasi Logam).
- **Integrasi Tabel Periodik:** Akses cepat untuk mengkaji massa atom, nomor atom, sifat periodik, dan konfigurasi elektron unsur yang sedang bereaksi.

---

### 5. Ruang Lingkup Fitur (Feature Scope)

#### 5.1. Meja Praktikum Reaksi Kimia (Virtual Reaction Workbench)
- **Rak Bahan Kimia (Chemical Shelf):**
  - Kategori: Asam ($HCl$, $H_2SO_4$, $CH_3COOH$), Basa ($NaOH$, $NH_4OH$, $Ca(OH)_2$), Garam ($NaCl$, $AgNO_3$, $BaCl_2$, $CuSO_4$, $KI$), Logam ($Mg$, $Zn$, $Fe$, $Cu$), serta Indikator ($PP$, Metil Jingga, BTB, Lakmus).
  - Informasi detail zat: Rumus kimia, nama umum, wujud ($aq$, $s$, $l$, $g$), konsentrasi molaritas, dan piktogram keselamatan GHS edukatif.
- **Wadah Reaksi (Beaker & Erlenmeyer):**
  - Animasi penuangan larutan dengan volume terukur ($mL$).
  - Campuran multi-zat dengan deteksi reaksi otomatis.
  - Efek visual reaksi:
    - Perubahan warna larutan secara gradien realistis.
    - Pembentukan endapan di dasar wadah.
    - Efek pelepasan gelembung gas ($H_2$, $CO_2$, $O_2$).
    - Indikator termal (kenaikan/penurunan suhu $\Delta T$).
- **Uji Indikator & Sensor pH:**
  - Kertas lakmus merah & biru (berubah warna saat dicelupkan).
  - Indikator universal dengan pita spektrum warna pH 0–14.
  - Probe pH meter digital presisi tinggi.

#### 5.2. Panel Penjelasan Reaksi (Educational Reaction Breakdown)
- Penulisan persamaan reaksi kimia lengkap dan setara:
  $$\text{Contoh: } HCl_{(aq)} + NaOH_{(aq)} \rightarrow NaCl_{(aq)} + H_2O_{(l)}$$
- Jenis reaksi (Netralisasi asam-basa, presipitasi, penggantian tunggal/ganda).
- Penjelasan konsep singkat bahasa Indonesia yang mudah dicerna siswa SMA.

#### 5.3. Tabel Periodik & Inspektur Unsur Interaktif
- Tampilan tabel periodik interaktif yang ringan dan responsif.
- Visualisasi ringkas per unsur: Nomor atom, lambang, nama, nomor massa, golongan & periode, serta model kulit elektron sederhana.
- Integrasi: Kemudahan mencari senyawa yang dibentuk oleh unsur terpilih.

#### 5.4. Mode Praktikum Terpandu (Guided Lab Modules)
- **Praktikum 1: Identifikasi Larutan Asam-Basa & Skala pH.**
- **Praktikum 2: Reaksi Pengendapan (Presipitasi) Kation & Anion.**
- **Praktikum 3: Reaksi Logam dengan Asam Menghasilkan Gas Hidrogen.**
- **Mode Bebas (Sandbox Mode):** Eksplorasi bebas tanpa batas langkah.

---

### 6. Desain Antarmuka & Estetika (UI/UX Guidelines)
- **Tema:** *Clean Scientific & Minimalis* (Tema terang bernuansa laboratorium riset modern).
- **Palet Warna:**
  - Background Utama: Clean White & Lab Slate (`#F8FAFC`, `#FFFFFF`, `#F1F5F9`).
  - Warna Aksen Ilmiah: Cobalt Deep Blue (`#2563EB`), Modern Cyan (`#06B6D4`).
  - Warna Reagen & Indikator: Warna larutan realistis (misal: $CuSO_4$ biru cerah, $FeCl_3$ kuning jingga, fenolftalein basa magenta cerah, endapan $AgCl$ putih susu).
  - Border & Pembatas: Halus dan tipis (`#E2E8F0`).
- **Tipografi:** Sans-serif modern yang rapi dan mudah dibaca (Inter / Plus Jakarta Sans) serta font monospace untuk rumus kimia dan angka data teknis.
- **Interaktivitas:** Transisi halus, tombol drag-and-drop / klik intuitif, feedback visual yang responsif.

---

### 7. Kebutuhan Non-Fungsional (Non-Functional Requirements)
- **Performa:** Loading instan di browser modern (Chrome, Edge, Firefox, Safari), animasi rendering CSS/SVG lancar tanpa freeze.
- **Responsivitas:** Desain optimal untuk layar laptop/desktop dan tablet display kelas.
- **Keandalan Perhitungan:** Rumus kimia dan kalkulasi pH sesuai kaidah ilmiah kimia dasar kurikulum SMA.
- **Aksesibilitas:** Kontras teks memenuhi standar WCAG AA.

---

### 8. Milestone Rilis (Roadmap)
- **Milestone 1:** Struktur data kimia (`chemicals.ts`, `reactions.ts`), UI Meja Kerja (Beaker, Rak Zat), penuangan zat & deteksi reaksi dasar.
- **Milestone 2:** Simulasi uji pH lengkap (lakmus, indikator cair, digital probe) dan animasi reaksi visual (endapan, gas, warna).
- **Milestone 3:** Modul Tabel Periodik Interaktif & Inspektur atom.
- **Milestone 4:** Modul praktikum terpandu untuk siswa SMA dan fitur reset/bersihkan lab.
