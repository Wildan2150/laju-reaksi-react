import { useState, type FC } from 'react';

interface Experiment {
  id: string;
  tabLabel: string;
  grade: string;
  title: string;
  objective: string;
  equation: string;
  reagents: string[];
  steps: string[];
  observations: {
    color: string;
    temperature: string;
    gas: string;
    precipitate: string;
  };
  safetyNotice: string;
}

const EXPERIMENTS: Experiment[] = [
  {
    id: 'acid-base',
    tabLabel: 'Praktikum 1: Asam-Basa & Netralisasi',
    grade: 'Kelas XI - Semester 2',
    title: 'Netralisasi Asam Klorida dan Natrium Hidroksida dengan Indikator PP',
    objective: 'Mengidentifikasi titik netralisasi larutan asam-basa kuat serta mengamati transisi warna indikator fenolftalein pada batas pH 8.2.',
    equation: 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)',
    reagents: ['HCl 0.1 M (50 mL)', 'NaOH 0.1 M (50 mL)', 'Indikator Fenolftalein (3 tetes)'],
    steps: [
      'Tuangkan 50 mL larutan HCl 0.1 M ke dalam labu erlenmeyer.',
      'Tambahkan 3 tetes indikator fenolftalein (larutan tetap bening tak berwarna, pH ~1.2).',
      'Teteskan perlahan larutan NaOH 0.1 M hingga larutan tepat berubah menjadi merah muda stabil (titik akhir netralisasi).',
      'Ukur kembali pH larutan dengan pH meter digital untuk memastikan netralitas (pH ~7.0).'
    ],
    observations: {
      color: 'Bening tak berwarna → Merah muda fuchsia stabil saat basa',
      temperature: 'Kenaikan suhu halus (+4.4°C akibat entalpi netralisasi eksoterm)',
      gas: 'Tidak menghasilkan gelembung gas',
      precipitate: 'Tidak ada endapan (garam NaCl larut sempurna dalam air)'
    },
    safetyNotice: 'HCl dan NaOH bersifat korosif terhadap kulit. Gunakan sarung tangan nitril dan kacamata pengaman lab.'
  },
  {
    id: 'precipitation',
    tabLabel: 'Praktikum 2: Reaksi Presipitasi Garam',
    grade: 'Kelas XI - Kelarutan & Ksp',
    title: 'Pembentukan Endapan Kuning Timbal(II) Iodida (Golden Rain)',
    objective: 'Membuktikan terjadinya reaksi pengendapan antar ion timbal Pb²⁺ dan iodida I⁻ berdasarkan konsep hasil kali kelarutan (Ksp).',
    equation: 'Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) ↓ + 2KNO₃(aq)',
    reagents: ['Larutan Pb(NO₃)₂ 0.1 M (25 mL)', 'Larutan KI 0.1 M (25 mL)', 'Air Suling'],
    steps: [
      'Siapkan 25 mL larutan Timbal(II) Nitrat tak berwarna dalam tabung reaksi.',
      'Tambahkan 25 mL larutan Kalium Iodida bening secara bertahap.',
      'Amati seketika perubahan larutan bening menjadi suspensi berwarna kuning kenari pekat.',
      'Biarkan beberapa menit untuk melihat partikel endapan PbI₂ mengendap di dasar tabung.'
    ],
    observations: {
      color: 'Dua cairan bening seketika berubah menjadi kuning kenari cerah',
      temperature: 'Suhu ruangan relatif konstan (25.0°C)',
      gas: 'Tidak terjadi pelepasan gas',
      precipitate: 'Terbentuk endapan kristal padat PbI₂ berwarna kuning mencolok'
    },
    safetyNotice: 'Limbah senyawa timbal (Pb²⁺) beracun dan berbahaya bagi lingkungan. Wajib dibuang pada wadah limbah logam berat B3.'
  },
  {
    id: 'gas-evolution',
    tabLabel: 'Praktikum 3: Logam & Pembentukan Gas',
    grade: 'Kelas X & XII - Redoks & Laju Reaksi',
    title: 'Reaksi Logam Magnesium dengan Asam Menghasilkan Gas Hidrogen',
    objective: 'Mempelajari reaksi pergantian tunggal antara logam aktif golongan IIA dengan asam kuat serta mengamati laju pembentukan gas H₂.',
    equation: 'Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g) ↑',
    reagents: ['Pita Magnesium Mg (potongan 3 cm)', 'Larutan HCl 1.0 M (30 mL)'],
    steps: [
      'Tuangkan 30 mL HCl 1.0 M ke dalam tabung reaksi bertutup pipa penghubung.',
      'Amplas sedikit pita magnesium untuk membersihkan lapisan oksida luar.',
      'Masukkan keping pita magnesium ke dalam larutan asam.',
      'Amati semburan gelembung gas hidrogen secara cepat dan rasakan pelepasan kalor pada tabung.'
    ],
    observations: {
      color: 'Pita logam keperakan perlahan melarut hingga habis menjadi larutan jernih',
      temperature: 'Pelepasan panas eksoterm yang signifikan (suhu naik dari 25°C ke 42°C)',
      gas: 'Pelepasan hebat gelembung gas hidrogen (H₂) mudah terbakar',
      precipitate: 'Tidak ada endapan (MgCl₂ larut sempurna)'
    },
    safetyNotice: 'Gas hidrogen (H₂) bersifat sangat mudah terbakar jika didekatkan pada api terbuka. Lakukan di lemari asam atau ruang berventilasi baik.'
  }
];

export const GuidedExperiments: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('acid-base');

  const selectedExp = EXPERIMENTS.find((e) => e.id === activeTab) || EXPERIMENTS[0];

  return (
    <section className="experiments-section" id="praktikum">
      <div className="section-header">
        <div className="section-pill">Skenario Praktikum SMA</div>
        <h2 className="section-title">Modul Praktikum Berdasarkan Silabus Nasional</h2>
        <p className="section-desc">
          Pelajari konsep teori kimia abstrak secara visual melalui skenario eksperimen terpadu dengan instruksi ilmiah presisi.
        </p>
      </div>

      <div className="experiments-card">
        {/* Tab Buttons */}
        <div className="exp-tabs" role="tablist">
          {EXPERIMENTS.map((exp) => (
            <button
              key={exp.id}
              role="tab"
              aria-selected={activeTab === exp.id}
              className={`exp-tab-btn ${activeTab === exp.id ? 'active' : ''}`}
              onClick={() => setActiveTab(exp.id)}
            >
              <span>{exp.tabLabel}</span>
              <span className="exp-tab-grade">{exp.grade.split(' - ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Experiment Details */}
        <div className="exp-content">
          <div className="exp-header-row">
            <div>
              <span className="exp-grade-badge">{selectedExp.grade}</span>
              <h3 className="exp-main-title">{selectedExp.title}</h3>
              <p className="exp-objective">{selectedExp.objective}</p>
            </div>
          </div>

          {/* Equation Banner */}
          <div className="exp-equation-box">
            <span className="equation-label">Persamaan Reaksi Kimia Setara:</span>
            <code className="equation-formula">{selectedExp.equation}</code>
          </div>

          <div className="exp-grid-details">
            {/* Steps & Reagents */}
            <div className="exp-column">
              <h4 className="exp-subheading">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mini-icon">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Prosedur Pelaksanaan:
              </h4>
              <ol className="steps-list">
                {selectedExp.steps.map((step, idx) => (
                  <li key={idx}>
                    <span className="step-num">{idx + 1}</span>
                    <span className="step-text">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="reagents-tag-box">
                <span className="reagents-tag-title">Reagen Diperlukan:</span>
                <div className="reagents-chips">
                  {selectedExp.reagents.map((r, i) => (
                    <span key={i} className="reagent-chip">{r}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Scientific Observations */}
            <div className="exp-column">
              <h4 className="exp-subheading">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mini-icon">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                </svg>
                Hasil Pengamatan Indrawi & Fisik:
              </h4>

              <div className="obs-cards-list">
                <div className="obs-item">
                  <span className="obs-key">🎨 Perubahan Warna:</span>
                  <span className="obs-val">{selectedExp.observations.color}</span>
                </div>
                <div className="obs-item">
                  <span className="obs-key">🌡 Perubahan Suhu (Kalor):</span>
                  <span className="obs-val">{selectedExp.observations.temperature}</span>
                </div>
                <div className="obs-item">
                  <span className="obs-key">💨 Pelepasan Gas:</span>
                  <span className="obs-val">{selectedExp.observations.gas}</span>
                </div>
                <div className="obs-item">
                  <span className="obs-key">⬇ Pembentukan Endapan:</span>
                  <span className="obs-val">{selectedExp.observations.precipitate}</span>
                </div>
              </div>

              {/* Safety notice */}
              <div className="exp-safety-alert">
                <div className="safety-alert-icon">⚠️</div>
                <div className="safety-alert-text">
                  <strong>Peringatan Keselamatan Praktikum:</strong>
                  <p>{selectedExp.safetyNotice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
