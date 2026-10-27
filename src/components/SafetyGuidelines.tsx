import { useState, type FC } from 'react';

interface HazardItem {
  id: string;
  name: string;
  symbol: string;
  description: string;
  examples: string;
  firstAid: string;
}

const HAZARDS: HazardItem[] = [
  {
    id: 'corrosive',
    name: 'Bahan Korosif (Corrosive)',
    symbol: '🧪⚠️',
    description: 'Dapat merusak jaringan hidup seketika dan menyebabkan luka bakar kimia serta merusak permukaan logam.',
    examples: 'HCl pekat, H₂SO₄ pekat, NaOH, KOH',
    firstAid: 'Bilas segera dengan air mengalir selama minimal 15 menit. Jangan gunakan zat penetral langsung pada kulit.'
  },
  {
    id: 'flammable',
    name: 'Mudah Terbakar (Flammable)',
    symbol: '🔥',
    description: 'Gas atau cairan yang mudah menyala pada kontak dengan percikan api, panas, atau reaksi eksoterm spontan.',
    examples: 'Gas H₂, Etanol, Aseton, Logam Na / K',
    firstAid: 'Jauhkan dari sumber api terbuka, sediakan kain basah atau pemadam api pasir/APAR kelas B.'
  },
  {
    id: 'toxic',
    name: 'Toksisitas Akut & Iritan',
    symbol: '☠️',
    description: 'Menyebabkan iritasi pada selaput lendir saluran pernapasan atau keracunan jika tertelan atau terhirup berlebih.',
    examples: 'Gas klorin (Cl₂), amonia pekat (NH₃), uap bromin',
    firstAid: 'Bawa korban segera ke area terbuka berudara segar. Jangan memaksa muntah jika tertelan bahan kaustik.'
  },
  {
    id: 'environment',
    name: 'Bahaya Lingkungan Akuatik',
    symbol: '🐟⚠️',
    description: 'Zat yang memiliki dampak toksik jangka panjang pada ekosistem air dan mikroorganisme tanah.',
    examples: 'Limbah ion tembaga (Cu²⁺), timbal (Pb²⁺), perak nitrat (AgNO₃)',
    firstAid: 'Jangan membuang limbah langsung ke wastafel. Tampung pada jeriken limbah B3 logam berat sekolah.'
  }
];

export const SafetyGuidelines: FC = () => {
  const [activeHazard, setActiveHazard] = useState<string>('corrosive');

  const selected = HAZARDS.find((h) => h.id === activeHazard) || HAZARDS[0];

  return (
    <section className="safety-section" id="keselamatan">
      <div className="section-header">
        <div className="section-pill">Kesehatan & Keselamatan Kerja (K3)</div>
        <h2 className="section-title">Standar Keselamatan Laboratorium Kimia</h2>
        <p className="section-desc">
          Meskipun praktikum dilakukan secara virtual, memahami simbol piktogram GHS dan etika keselamatan lab adalah kompetensi mutlak bagi siswa kimia.
        </p>
      </div>

      <div className="safety-grid">
        {/* Left Column: Hazard List */}
        <div className="hazards-list">
          {HAZARDS.map((h) => (
            <button
              key={h.id}
              type="button"
              className={`hazard-card-btn ${activeHazard === h.id ? 'active' : ''}`}
              onClick={() => setActiveHazard(h.id)}
            >
              <span className="hazard-symbol">{h.symbol}</span>
              <div className="hazard-meta">
                <span className="hazard-title">{h.name}</span>
                <span className="hazard-examples-preview">Contoh: {h.examples}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column: Detailed Card */}
        <div className="hazard-detail-card">
          <div className="hazard-detail-header">
            <span className="detail-symbol-large">{selected.symbol}</span>
            <div>
              <span className="ghs-standard-badge">Standar Piktogram GHS Global</span>
              <h3 className="detail-name">{selected.name}</h3>
            </div>
          </div>

          <p className="detail-desc">{selected.description}</p>

          <div className="hazard-detail-grid">
            <div className="detail-box">
              <span className="detail-box-title">Contoh Bahan di Sekolah:</span>
              <p className="detail-box-val">{selected.examples}</p>
            </div>
            <div className="detail-box">
              <span className="detail-box-title">Tindakan Pertolongan Pertama:</span>
              <p className="detail-box-val">{selected.firstAid}</p>
            </div>
          </div>

          {/* Golden Rules Reminder */}
          <div className="safety-rule-highlight">
            <div className="rule-badge">Aturan Emas Lab:</div>
            <p className="rule-text">
              "Selalu tuangkan <strong>asam kuat ke dalam air</strong> (AAA: Air Asam Aman), jangan pernah menuangkan air ke dalam asam pekat untuk menghindari lonjakan kalor mendadak."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
