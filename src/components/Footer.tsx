import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="footer-icon">
                <path d="M10 2v7.31L4.47 19.52A2 2 0 0 0 6.2 22h11.6a2 2 0 0 0 1.73-2.48L14 9.31V2" />
                <path d="M8.5 2h7" />
                <path d="M7 16h10" />
              </svg>
              <span className="footer-title">ChemLab<span className="accent">SMA</span></span>
            </div>
            <p className="footer-tagline">
              Platform laboratorium kimia virtual terpadu untuk pembelajaran interaktif, aman, dan mendalam bagi siswa SMA di seluruh Indonesia.
            </p>
            <div className="footer-curriculum-pill">
              Dirancang untuk Kurikulum Merdeka • Kelas X, XI & XII
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Navigasi Utama</h4>
            <ul>
              <li><a href="#hero">Beranda</a></li>
              <li><a href="#simulator">Simulator Meja Reaksi</a></li>
              <li><a href="#fitur">Fitur Laboratorium</a></li>
              <li><a href="#praktikum">Modul Praktikum SMA</a></li>
              <li><a href="#unsur">Tabel Periodik Unsur</a></li>
              <li><a href="#keselamatan">Keselamatan Kerja (K3)</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Materi Praktikum</h4>
            <ul>
              <li><a href="#praktikum">Reaksi Asam-Basa & Titrasi</a></li>
              <li><a href="#praktikum">Reaksi Presipitasi & Ksp</a></li>
              <li><a href="#praktikum">Reaksi Redoks & Gas Hidrogen</a></li>
              <li><a href="#simulator">Uji Spektrum pH Larutan</a></li>
              <li><a href="#unsur">Konfigurasi Elektron Bohr</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Standar Ilmiah</h4>
            <p className="footer-science-note">
              Semua tata nama senyawa mengikuti kaidah <strong>IUPAC</strong> (International Union of Pure and Applied Chemistry) dan silabus resmi sains SMA.
            </p>
            <div className="chemical-formula-watermark">
              <span>H₂O</span> • <span>NaCl</span> • <span>HCl</span> • <span>NaOH</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ChemLab SMA — Laboratorium Kimia Virtual. Dikembangkan untuk kemajuan pendidikan sains Indonesia.</p>
          <div className="footer-bottom-badges">
            <span className="badge-item">Clean Scientific UI</span>
            <span className="badge-item">React 19 + TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
