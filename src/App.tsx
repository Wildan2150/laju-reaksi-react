import { Navbar } from './components/Navbar';
import { HeroPreview } from './components/HeroPreview';
import { Features } from './components/Features';
import { GuidedExperiments } from './components/GuidedExperiments';
import { ElementSpotlight } from './components/ElementSpotlight';
import { SafetyGuidelines } from './components/SafetyGuidelines';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperiments = () => {
    const el = document.getElementById('praktikum');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Top Navigation */}
      <Navbar onStartSimulation={scrollToSimulator} />

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="hero">
          <div className="hero-container">
            <div className="hero-grid">
              {/* Left Column: Hero Copy & Actions */}
              <div className="hero-content">
                <div className="hero-pill-badge">
                  <span className="hero-pill-pulse"></span>
                  <span className="hero-pill-text">Laboratorium Kimia Virtual Interaktif</span>
                </div>

                <h1 className="hero-headline">
                  Eksplorasi Reaksi Kimia &amp; Praktikum Nyata di Browser Anda
                </h1>

                <p className="hero-lead">
                  Simulasikan pencampuran zat kimia, amati perubahan warna larutan, pembentukan endapan presipitat, gelembung gas hidrogen, dan uji pH 0–14 secara visual, aman, dan presisi tanpa risiko bahan berbahaya.
                </p>

                <div className="hero-cta-group">
                  <button 
                    type="button" 
                    className="btn-hero-primary"
                    onClick={scrollToSimulator}
                    id="hero-start-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="btn-icon">
                      <path d="M10 2v7.31L4.47 19.52A2 2 0 0 0 6.2 22h11.6a2 2 0 0 0 1.73-2.48L14 9.31V2" />
                      <line x1="8.5" y1="2" x2="15.5" y2="2" />
                    </svg>
                    Coba Simulator Meja Reaksi
                  </button>

                  <button 
                    type="button" 
                    className="btn-hero-secondary"
                    onClick={scrollToExperiments}
                    id="hero-explore-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="btn-icon">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                      <path d="M6 6h10" />
                      <path d="M6 10h10" />
                    </svg>
                    Modul Praktikum SMA
                  </button>
                </div>

                {/* Key Benefits Stats */}
                <div className="hero-stats-row">
                  <div className="stat-card">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Reagen &amp; Asam-Basa</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-card">
                    <span className="stat-number">0–14</span>
                    <span className="stat-label">Spektrum Uji pH</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-card">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Aman &amp; Tanpa Risiko</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Simulator */}
              <div className="hero-interactive-column">
                <HeroPreview />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <Features />

        {/* High School Guided Experiments Showcase */}
        <GuidedExperiments />

        {/* Quick Periodic Table & Atomic Spotlight */}
        <ElementSpotlight />

        {/* Lab Safety & GHS Standards */}
        <SafetyGuidelines />

        {/* Call to Action Banner */}
        <section className="cta-banner-section">
          <div className="cta-banner-card">
            <div className="cta-banner-badge">Mulai Eksplorasi Sekarang</div>
            <h2 className="cta-banner-title">
              Tingkatkan Pemahaman Kimia Melalui Visualisasi Interaktif
            </h2>
            <p className="cta-banner-desc">
              Bebas bereksperimen dengan berbagai reagen kimia, uji reaksi asam-basa, hingga pembentukan endapan garam kapan saja langsung dari perangkat Anda.
            </p>
            <div className="cta-banner-actions">
              <button 
                type="button" 
                className="btn-cta-white" 
                onClick={scrollToSimulator}
              >
                Buka Simulator Lab Sekarang
              </button>
              <a href="#unsur" className="btn-cta-ghost">
                Lihat Tabel Unsur
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
