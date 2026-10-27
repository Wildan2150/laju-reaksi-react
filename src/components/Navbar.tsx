import type { FC } from 'react';

interface NavbarProps {
  onStartSimulation: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onStartSimulation }) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="brand" tabIndex={0} role="banner">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2v7.31L4.47 19.52A2 2 0 0 0 6.2 22h11.6a2 2 0 0 0 1.73-2.48L14 9.31V2" />
              <path d="M8.5 2h7" />
              <path d="M7 16h10" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">ChemLab<span className="brand-accent">SMA</span></span>
            <span className="brand-badge">Lab Virtual v1.0</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#hero" className="nav-link active">Beranda</a>
          <a href="#simulator" className="nav-link">Meja Reaksi</a>
          <a href="#fitur" className="nav-link">Fitur Lab</a>
          <a href="#praktikum" className="nav-link">Praktikum SMA</a>
          <a href="#unsur" className="nav-link">Tabel Periodik</a>
          <a href="#keselamatan" className="nav-link">Keselamatan</a>
        </nav>

        {/* Right CTA */}
        <div className="nav-actions">
          <div className="curriculum-tag">
            <span className="pulse-dot"></span>
            Kurikulum Merdeka SMA
          </div>
          <button 
            type="button" 
            className="btn-primary-nav" 
            id="nav-cta-btn"
            onClick={onStartSimulation}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="btn-icon">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Mulai Lab
          </button>
        </div>
      </div>
    </header>
  );
};
