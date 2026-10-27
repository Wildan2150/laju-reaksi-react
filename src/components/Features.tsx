import type { FC, ReactNode } from 'react';

interface FeatureCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  iconSvg: ReactNode;
  specs: string[];
}

export const Features: FC = () => {
  const features: FeatureCard[] = [
    {
      id: 'workbench',
      badge: 'Simulasi Utama',
      badgeColor: 'blue',
      title: 'Meja Reaksi Kimia Virtual',
      description: 'Lakukan pencampuran puluhan larutan kimia realistik. Amati perubahan warna cairan, pembentukan endapan presipitat, gelembung gas aktif, serta kenaikan suhu eksoterm secara presisi.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31L4.47 19.52A2 2 0 0 0 6.2 22h11.6a2 2 0 0 0 1.73-2.48L14 9.31V2" />
          <line x1="8.5" y1="2" x2="15.5" y2="2" />
          <line x1="7" y1="16" x2="17" y2="16" />
        </svg>
      ),
      specs: ['Reaksi Multi-Zat Otomatis', 'Efek Endapan & Gas Fisik', 'Pemantauan Suhu Termokimia']
    },
    {
      id: 'ph-sensor',
      badge: 'Analisis Larutan',
      badgeColor: 'cyan',
      title: 'Uji Indikator & Sensor pH Presisi',
      description: 'Uji derajat keasaman larutan secara interaktif dengan kertas lakmus merah dan biru, kertas indikator universal dengan gradien spektrum warna, dan probe sensor pH digital instan.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      specs: ['Kertas Lakmus Merah & Biru', 'Spektrum Universal pH 0–14', 'Sensor Digital Akurasi 0.1']
    },
    {
      id: 'periodic-table',
      badge: 'Database Unsur',
      badgeColor: 'purple',
      title: 'Tabel Periodik & Inspektur Atom',
      description: 'Eksplorasi 118 unsur kimia modern lengkap dengan nomor atom, massa atom relatif, keelektronegatifan Pauling, wujud standar, dan visualisasi model kulit elektron Bohr.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      specs: ['118 Unsur Terverifikasi IUPAC', 'Visualisasi Kulit Elektron', 'Pencarian Sifat & Golongan']
    },
    {
      id: 'curriculum',
      badge: 'Kurikulum SMA',
      badgeColor: 'emerald',
      title: 'Modul Praktikum Terpadu',
      description: 'Panduan langkah demi langkah untuk praktikum wajib kimia SMA: Netralisasi Asam-Basa, Identifikasi Logam, Penyetaraan Reaksi Redoks, dan Reaksi Pengendapan Garam.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      ),
      specs: ['Sesuai Silabus Kelas X-XII', 'Langkah Praktikum Interaktif', 'Simbol Keselamatan MSDS']
    }
  ];

  return (
    <section className="features-section" id="fitur">
      <div className="section-header">
        <div className="section-pill">Fitur Unggulan Laboratorium</div>
        <h2 className="section-title">Teknologi Ilmiah untuk Pembelajaran Modern</h2>
        <p className="section-desc">
          Semua alat, reagen, dan instrumen ukur kimia dirancang dengan standar ilmiah akurat untuk mendukung pemahaman konsep nyata siswa SMA.
        </p>
      </div>

      <div className="features-grid">
        {features.map((item) => (
          <div key={item.id} className="feature-card">
            <div className="feature-top">
              <div className={`feature-icon-wrapper icon-${item.badgeColor}`}>
                {item.iconSvg}
              </div>
              <span className={`feature-badge badge-${item.badgeColor}`}>{item.badge}</span>
            </div>

            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-description">{item.description}</p>

            <ul className="feature-specs">
              {item.specs.map((spec, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="spec-check">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
