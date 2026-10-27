import { useState, type FC } from 'react';

interface ChemicalItem {
  id: string;
  name: string;
  formula: string;
  type: 'acid' | 'base' | 'salt' | 'indicator' | 'metal';
  badgeColor: string;
  description: string;
}

const AVAILABLE_CHEMICALS: ChemicalItem[] = [
  { id: 'hcl', name: 'Asam Klorida 0.1 M', formula: 'HCl', type: 'acid', badgeColor: '#ef4444', description: 'Asam kuat (pH ~1.0)' },
  { id: 'naoh', name: 'Natrium Hidroksida 0.1 M', formula: 'NaOH', type: 'base', badgeColor: '#3b82f6', description: 'Basa kuat (pH ~13.0)' },
  { id: 'pp', name: 'Indikator PP', formula: 'C₂₀H₁₄O₄', type: 'indicator', badgeColor: '#ec4899', description: 'Pink pada basa (pH > 8.2)' },
  { id: 'cuso4', name: 'Tembaga(II) Sulfat', formula: 'CuSO₄', type: 'salt', badgeColor: '#0ea5e9', description: 'Larutan biru cerah' },
  { id: 'mg', name: 'Keping Logam Mg', formula: 'Mg', type: 'metal', badgeColor: '#64748b', description: 'Logam aktif pita abu-abu' },
  { id: 'ki', name: 'Kalium Iodida', formula: 'KI', type: 'salt', badgeColor: '#eab308', description: 'Garam halida transparan' },
  { id: 'pbno3', name: 'Timbal(II) Nitrat', formula: 'Pb(NO₃)₂', type: 'salt', badgeColor: '#8b5cf6', description: 'Larutan garam transparan' },
];

export const HeroPreview: FC = () => {
  const [beakerContents, setBeakerContents] = useState<string[]>(['hcl', 'pp']);

  const addChemical = (id: string) => {
    if (beakerContents.length >= 6) return;
    setBeakerContents((prev) => [...prev, id]);
  };

  const resetBeaker = () => {
    setBeakerContents([]);
  };

  const applyPreset = (preset: 'neutralization' | 'gas' | 'precipitate') => {
    if (preset === 'neutralization') {
      setBeakerContents(['hcl', 'pp', 'naoh']);
    } else if (preset === 'gas') {
      setBeakerContents(['hcl', 'mg']);
    } else if (preset === 'precipitate') {
      setBeakerContents(['pbno3', 'ki']);
    }
  };

  // State derivation
  const hasHcl = beakerContents.includes('hcl');
  const hasNaoh = beakerContents.includes('naoh');
  const hasPp = beakerContents.includes('pp');
  const hasCuso4 = beakerContents.includes('cuso4');
  const hasMg = beakerContents.includes('mg');
  const hasKi = beakerContents.includes('ki');
  const hasPbno3 = beakerContents.includes('pbno3');

  const hclCount = beakerContents.filter((c) => c === 'hcl').length;
  const naohCount = beakerContents.filter((c) => c === 'naoh').length;

  // pH Calculation
  let ph = 7.0;
  if (hclCount > 0 && naohCount === 0) {
    ph = 1.2;
  } else if (naohCount > 0 && hclCount === 0) {
    ph = 13.0;
  } else if (hclCount > naohCount) {
    ph = 2.4;
  } else if (naohCount > hclCount) {
    ph = 11.8;
  } else if (hclCount > 0 && naohCount > 0 && hclCount === naohCount) {
    ph = 7.0;
  } else if (hasCuso4) {
    ph = 4.8;
  }

  // Temperature
  let temperature = 25.0;
  if (hasMg && hasHcl) {
    temperature = 41.5;
  } else if (hasHcl && hasNaoh) {
    temperature = 29.4;
  }

  // Gas formation
  const hasGas = hasMg && hasHcl;

  // Precipitate formation
  let precipitate: string | null = null;
  if (hasCuso4 && hasNaoh) {
    precipitate = 'Cu(OH)₂ (Endapan Biru Muda)';
  } else if (hasPbno3 && hasKi) {
    precipitate = 'PbI₂ (Endapan Kuning Kenari)';
  }

  // Fluid visual color
  let fluidBg = 'rgba(238, 242, 246, 0.4)'; // clear empty/water
  let fluidGlow = 'none';

  if (beakerContents.length > 0) {
    if (precipitate === 'PbI₂ (Endapan Kuning Kenari)') {
      fluidBg = 'linear-gradient(180deg, rgba(254, 240, 138, 0.75) 0%, rgba(234, 179, 8, 0.95) 100%)';
      fluidGlow = '0 0 20px rgba(234, 179, 8, 0.35)';
    } else if (hasCuso4 && hasNaoh) {
      fluidBg = 'linear-gradient(180deg, rgba(56, 189, 248, 0.7) 0%, rgba(2, 132, 199, 0.92) 100%)';
      fluidGlow = '0 0 20px rgba(2, 132, 199, 0.35)';
    } else if (hasCuso4) {
      fluidBg = 'linear-gradient(180deg, rgba(186, 230, 253, 0.6) 0%, rgba(56, 189, 248, 0.85) 100%)';
      fluidGlow = '0 0 15px rgba(56, 189, 248, 0.3)';
    } else if (hasPp && ph >= 8.2) {
      fluidBg = 'linear-gradient(180deg, rgba(244, 114, 182, 0.65) 0%, rgba(236, 72, 153, 0.9) 100%)';
      fluidGlow = '0 0 25px rgba(236, 72, 153, 0.45)';
    } else {
      fluidBg = 'linear-gradient(180deg, rgba(224, 242, 254, 0.5) 0%, rgba(186, 230, 253, 0.65) 100%)';
    }
  }

  const fluidHeight = Math.min(15 + beakerContents.length * 13, 85);

  // Reaction description
  let reactionTitle = 'Larutan Siap Eksperimen';
  let reactionEquation = 'Wadah kosong atau belum ada reaksi aktif.';
  let reactionType = 'Observasi';

  if (hasMg && hasHcl) {
    reactionTitle = 'Reaksi Logam Aktif & Asam Klorida';
    reactionEquation = 'Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g) ↑';
    reactionType = 'Reaksi Redoks & Pembentukan Gas (Eksoterm ΔT +16.5°C)';
  } else if (hasCuso4 && hasNaoh) {
    reactionTitle = 'Reaksi Pengendapan Hidroksida Logam';
    reactionEquation = 'CuSO₄(aq) + 2NaOH(aq) → Cu(OH)₂(s) ↓ + Na₂SO₄(aq)';
    reactionType = 'Reaksi Presipitasi (Endapan Biru Gelatin)';
  } else if (hasPbno3 && hasKi) {
    reactionTitle = 'Reaksi Pengendapan Garam Timbal';
    reactionEquation = 'Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) ↓ + 2KNO₃(aq)';
    reactionType = 'Reaksi Presipitasi Kuning Terang (Uji Ion Logam)';
  } else if (hasHcl && hasNaoh) {
    reactionTitle = 'Reaksi Netralisasi Asam Kuat & Basa Kuat';
    reactionEquation = 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)';
    reactionType = hasPp
      ? ph >= 8.2 
        ? 'Indikator PP Magenta (Basa Berlebih)' 
        : 'Indikator PP Bening (Netral/Asam)'
      : 'Netralisasi Asam-Basa (Eksoterm Ringan)';
  } else if (hasPp && hasNaoh) {
    reactionTitle = 'Uji Indikator Asam-Basa Fenolftalein';
    reactionEquation = 'Indikator PP + OH⁻(aq) → Ion Indikator Pink Merah Muda';
    reactionType = 'Perubahan Warna Indikator (pH > 8.2)';
  }

  return (
    <div className="hero-preview-card" id="simulator">
      {/* Header bar of preview */}
      <div className="preview-topbar">
        <div className="preview-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="preview-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mini-icon">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
          Simulator Reaksi Interaktif (Live Demo)
        </div>
        <div className="preview-status">
          <span className="live-indicator"></span> 60 FPS
        </div>
      </div>

      <div className="preview-body">
        {/* Left Side: Beaker Visualization */}
        <div className="beaker-stage">
          {/* Scientific Measurement Meters */}
          <div className="stage-meters">
            <div className="meter-pill">
              <span className="meter-label">pH Meter:</span>
              <span className="meter-value" style={{ 
                color: ph < 6 ? '#ef4444' : ph > 8 ? '#8b5cf6' : '#10b981' 
              }}>
                {ph.toFixed(1)}
              </span>
              <span className="ph-badge">
                {ph < 6 ? 'Asam' : ph > 8 ? 'Basa' : 'Netral'}
              </span>
            </div>

            <div className="meter-pill">
              <span className="meter-label">Suhu:</span>
              <span className="meter-value" style={{ 
                color: temperature > 30 ? '#f59e0b' : '#3b82f6' 
              }}>
                {temperature.toFixed(1)} °C
              </span>
            </div>
          </div>

          {/* Glass Beaker SVG Graphic */}
          <div className="beaker-container">
            <div className="beaker-glass">
              {/* Beaker tick markings */}
              <div className="beaker-ticks">
                <span className="tick">250 ml</span>
                <span className="tick">200 ml</span>
                <span className="tick">150 ml</span>
                <span className="tick">100 ml</span>
                <span className="tick">50 ml</span>
              </div>

              {/* Liquid element inside glass */}
              <div 
                className="beaker-liquid"
                style={{ 
                  height: beakerContents.length === 0 ? '6px' : `${fluidHeight}%`,
                  background: fluidBg,
                  boxShadow: fluidGlow
                }}
              >
                {/* Surface meniscus wave */}
                {beakerContents.length > 0 && <div className="liquid-meniscus"></div>}

                {/* Animated Gas Bubbles */}
                {hasGas && (
                  <div className="gas-bubbles-layer" aria-hidden="true">
                    <span className="bubble b1"></span>
                    <span className="bubble b2"></span>
                    <span className="bubble b3"></span>
                    <span className="bubble b4"></span>
                    <span className="bubble b5"></span>
                  </div>
                )}

                {/* Precipitate layer at bottom */}
                {precipitate && (
                  <div className={`precipitate-layer ${hasPbno3 ? 'precipitate-yellow' : 'precipitate-blue'}`}>
                    <span className="precipitate-label">Endapan {precipitate.split(' ')[0]}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Beaker base reflection */}
            <div className="beaker-stand"></div>
          </div>

          {/* Reaction Live Banner */}
          <div className="reaction-live-panel">
            <div className="reaction-badge-row">
              <span className="rx-type-tag">{reactionType}</span>
              {hasGas && <span className="rx-effect-tag tag-gas">🔥 Gelembung Gas H₂</span>}
              {precipitate && <span className="rx-effect-tag tag-precipitate">⬇ Terbentuk Endapan</span>}
            </div>
            <div className="reaction-title-text">{reactionTitle}</div>
            <code className="reaction-formula-text">{reactionEquation}</code>
          </div>
        </div>

        {/* Right Side: Reagent Rack & Controls */}
        <div className="reagent-panel">
          <div className="reagent-panel-header">
            <h4>Rak Zat Kimia Laboratorium</h4>
            <span className="reagent-hint">Klik botol untuk menuang ke dalam wadah</span>
          </div>

          <div className="reagents-grid">
            {AVAILABLE_CHEMICALS.map((chem) => (
              <button
                key={chem.id}
                type="button"
                className="reagent-btn"
                onClick={() => addChemical(chem.id)}
                title={`Tambahkan ${chem.name}`}
              >
                <div className="reagent-bottle-icon" style={{ backgroundColor: chem.badgeColor }}>
                  <span>{chem.formula}</span>
                </div>
                <div className="reagent-meta">
                  <span className="reagent-name">{chem.name}</span>
                  <span className="reagent-desc">{chem.description}</span>
                </div>
                <span className="reagent-add-icon">+</span>
              </button>
            ))}
          </div>

          {/* Quick Presets */}
          <div className="presets-section">
            <span className="presets-label">Preset Praktikum Cepat:</span>
            <div className="presets-buttons">
              <button 
                type="button" 
                className="btn-preset" 
                onClick={() => applyPreset('neutralization')}
              >
                🧪 Asam-Basa & PP
              </button>
              <button 
                type="button" 
                className="btn-preset" 
                onClick={() => applyPreset('gas')}
              >
                ⚡ Logam Mg + HCl
              </button>
              <button 
                type="button" 
                className="btn-preset" 
                onClick={() => applyPreset('precipitate')}
              >
                🟡 Endapan PbI₂
              </button>
            </div>
          </div>

          {/* Action Row */}
          <div className="preview-action-row">
            <button 
              type="button" 
              className="btn-reset-lab" 
              onClick={resetBeaker}
              disabled={beakerContents.length === 0}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              Bilas & Kosongkan Wadah
            </button>
            <span className="reagent-count">
              {beakerContents.length} zat dalam wadah
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
