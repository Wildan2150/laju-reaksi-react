import { useState, type FC } from 'react';

interface ElementData {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: number;
  category: 'alkali' | 'alkaline-earth' | 'transition' | 'nonmetal' | 'halogen' | 'noble-gas';
  categoryLabel: string;
  categoryColor: string;
  electronConfig: string;
  electronegativity: number;
  commonOxidation: string;
  state: 'Gas' | 'Padat' | 'Cair';
  labRole: string;
}

const SPOTLIGHT_ELEMENTS: ElementData[] = [
  {
    symbol: 'H',
    name: 'Hidrogen',
    atomicNumber: 1,
    atomicMass: 1.008,
    category: 'nonmetal',
    categoryLabel: 'Non-logam Reaktif',
    categoryColor: '#3b82f6',
    electronConfig: '1s¹',
    electronegativity: 2.20,
    commonOxidation: '+1, -1',
    state: 'Gas',
    labRole: 'Membentuk ion H⁺ penentu keasaman dalam larutan asam klorida (HCl) serta dilepaskan sebagai gas H₂ pada reaksi logam aktif.'
  },
  {
    symbol: 'C',
    name: 'Karbon',
    atomicNumber: 6,
    atomicMass: 12.011,
    category: 'nonmetal',
    categoryLabel: 'Non-logam Poliatomik',
    categoryColor: '#6366f1',
    electronConfig: '[He] 2s² 2p²',
    electronegativity: 2.55,
    commonOxidation: '+4, +2, -4',
    state: 'Padat',
    labRole: 'Dasar kimia organik hidrokarbon, asam asetat (CH₃COOH), dan indikator fenolftalein.'
  },
  {
    symbol: 'O',
    name: 'Oksigen',
    atomicNumber: 8,
    atomicMass: 15.999,
    category: 'nonmetal',
    categoryLabel: 'Non-logam Reaktif',
    categoryColor: '#0ea5e9',
    electronConfig: '[He] 2s² 2p⁴',
    electronegativity: 3.44,
    commonOxidation: '-2',
    state: 'Gas',
    labRole: 'Oksidator universal dalam reaksi pembakaran, respirasi sel, serta pembentukan senyawa ion hidroksida (OH⁻) penentu kebasaan.'
  },
  {
    symbol: 'Na',
    name: 'Natrium',
    atomicNumber: 11,
    atomicMass: 22.990,
    category: 'alkali',
    categoryLabel: 'Logam Alkali (Gol. IA)',
    categoryColor: '#f59e0b',
    electronConfig: '[Ne] 3s¹',
    electronegativity: 0.93,
    commonOxidation: '+1',
    state: 'Padat',
    labRole: 'Komponen kation Na⁺ pada natrium hidroksida (NaOH) basa kuat dan natrium klorida (NaCl) garam dapur.'
  },
  {
    symbol: 'Mg',
    name: 'Magnesium',
    atomicNumber: 12,
    atomicMass: 24.305,
    category: 'alkaline-earth',
    categoryLabel: 'Logam Alkali Tanah (Gol. IIA)',
    categoryColor: '#d97706',
    electronConfig: '[Ne] 3s²',
    electronegativity: 1.31,
    commonOxidation: '+2',
    state: 'Padat',
    labRole: 'Pita logam reaktif yang sering dipakai dalam percobaan laju reaksi dan uji pembentukan gas H₂ bersama asam kuat.'
  },
  {
    symbol: 'Cl',
    name: 'Klorin',
    atomicNumber: 17,
    atomicMass: 35.45,
    category: 'halogen',
    categoryLabel: 'Halogen (Gol. VIIA)',
    categoryColor: '#10b981',
    electronConfig: '[Ne] 3s² 3p⁵',
    electronegativity: 3.16,
    commonOxidation: '-1, +1, +5, +7',
    state: 'Gas',
    labRole: 'Anion klorida Cl⁻ dalam asam klorida dan garam halida. Mengendap membentuk AgCl putih jika direaksikan dengan ion perak.'
  },
  {
    symbol: 'Cu',
    name: 'Tembaga',
    atomicNumber: 29,
    atomicMass: 63.546,
    category: 'transition',
    categoryLabel: 'Logam Transisi (Gol. IB)',
    categoryColor: '#0284c7',
    electronConfig: '[Ar] 3d¹⁰ 4s¹',
    electronegativity: 1.90,
    commonOxidation: '+2, +1',
    state: 'Padat',
    labRole: 'Ion Cu²⁺ memberikan warna biru khas pada larutan tembaga(II) sulfat dan menghasilkan endapan biru gelatin Cu(OH)₂ dengan basa.'
  },
  {
    symbol: 'Ag',
    name: 'Perak',
    atomicNumber: 47,
    atomicMass: 107.868,
    category: 'transition',
    categoryLabel: 'Logam Transisi (Gol. IB)',
    categoryColor: '#64748b',
    electronConfig: '[Kr] 4d¹⁰ 5s¹',
    electronegativity: 1.93,
    commonOxidation: '+1',
    state: 'Padat',
    labRole: 'Reagen uji spesifik kation Ag⁺ (AgNO₃) untuk mendeteksi keberadaan ion halogen klorida, bromida, dan iodida melalui endapan.'
  }
];

export const ElementSpotlight: FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string>('Cu');

  const selected = SPOTLIGHT_ELEMENTS.find((el) => el.symbol === selectedSymbol) || SPOTLIGHT_ELEMENTS[0];

  return (
    <section className="elements-section" id="unsur">
      <div className="section-header">
        <div className="section-pill">Inspektur Unsur & Tabel Periodik</div>
        <h2 className="section-title">Eksplorasi Sifat Atomik & Unsur Kunci</h2>
        <p className="section-desc">
          Klik salah satu kartu unsur untuk mempelajari konfigurasi elektron, sifat keelektronegatifan, dan perannya dalam eksperimen kimia sekolah.
        </p>
      </div>

      <div className="elements-container">
        {/* Element Selection Grid */}
        <div className="elements-shelf">
          {SPOTLIGHT_ELEMENTS.map((el) => (
            <button
              key={el.symbol}
              type="button"
              className={`element-chip-btn ${selectedSymbol === el.symbol ? 'selected' : ''}`}
              onClick={() => setSelectedSymbol(el.symbol)}
              style={{
                borderColor: selectedSymbol === el.symbol ? el.categoryColor : 'var(--border-subtle)'
              }}
            >
              <span className="chip-number">{el.atomicNumber}</span>
              <span className="chip-symbol" style={{ color: el.categoryColor }}>{el.symbol}</span>
              <span className="chip-name">{el.name}</span>
            </button>
          ))}
        </div>

        {/* Detailed Inspection Card */}
        <div className="element-detail-card">
          <div className="detail-header">
            <div className="element-hero-box" style={{ borderColor: selected.categoryColor }}>
              <span className="hero-box-number">{selected.atomicNumber}</span>
              <span className="hero-box-symbol" style={{ color: selected.categoryColor }}>{selected.symbol}</span>
              <span className="hero-box-mass">{selected.atomicMass.toFixed(3)}</span>
            </div>

            <div className="hero-meta-col">
              <div className="hero-meta-top">
                <span className="element-category-tag" style={{ backgroundColor: `${selected.categoryColor}15`, color: selected.categoryColor }}>
                  {selected.categoryLabel}
                </span>
                <span className="element-state-tag">Wujud: {selected.state}</span>
              </div>
              <h3 className="element-hero-name">{selected.name}</h3>
              <p className="element-role-desc">
                <strong>Peran di Laboratorium SMA:</strong> {selected.labRole}
              </p>
            </div>
          </div>

          <div className="element-props-grid">
            <div className="prop-box">
              <span className="prop-label">Konfigurasi Elektron:</span>
              <code className="prop-code">{selected.electronConfig}</code>
            </div>
            <div className="prop-box">
              <span className="prop-label">Keelektronegatifan:</span>
              <span className="prop-value">{selected.electronegativity} (Skala Pauling)</span>
            </div>
            <div className="prop-box">
              <span className="prop-label">Bilangan Oksidasi Umum:</span>
              <span className="prop-value">{selected.commonOxidation}</span>
            </div>
            <div className="prop-box">
              <span className="prop-label">Massa Atom Relatif (Ar):</span>
              <span className="prop-value">{selected.atomicMass} g/mol</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
