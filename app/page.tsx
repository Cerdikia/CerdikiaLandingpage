"use client"

import Image from "next/image"
import { ArrowDown, ArrowRight, BookOpen, Check, Download, Flame, Gamepad2, Trophy, Zap } from "lucide-react"

const tiers = [
  { name: "Bronze", image: "/images/bronze.svg", note: "Langkah pertama" },
  { name: "Silver", image: "/images/silver.svg", note: "Terus bertumbuh" },
  { name: "Gold", image: "/images/gold.svg", note: "Makin bersinar" },
  { name: "Platinum", image: "/images/platinum.svg", note: "Konsisten berlatih" },
  { name: "Diamond", image: "/images/diamond.svg", note: "Puncak prestasi" },
]

const screens = [
  { src: "/images/mockup-features.png", alt: "Beragam fitur belajar Cerdikia", title: "Belajar dengan cara yang seru", kind: "wide" },
  { src: "/images/mockup-login.png", alt: "Halaman masuk aplikasi Cerdikia", title: "Mulai dari profilmu", kind: "half" },
  { src: "/images/phone-question.svg", alt: "Tampilan kuis Cerdikia", title: "Jawab, kumpulkan XP", kind: "half" },
]

const downloadUrl = process.env.NEXT_PUBLIC_DOWNLOAD_LINK

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Cerdikia, kembali ke atas">
          <Image src="/images/cerdikia-logo.svg" alt="Cerdikia" width={148} height={48} priority />
        </a>
        <nav className="nav-links" aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#fitur">Fitur</a>
          <a href="#ranking">Ranking</a>
        </nav>
        <a className="button button-small" href={downloadUrl || "#unduh"} target={downloadUrl ? "_blank" : undefined} rel={downloadUrl ? "noreferrer" : undefined}>
          <span>Unduh aplikasi</span><ArrowRight size={16} />
        </a>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Teman belajar setiap hari</p>
          <h1>Belajar jadi petualangan <span>seru.</span></h1>
          <p className="hero-description">Kenalan dengan Cerdikia — ruang belajar interaktif yang mengajak anak berlatih, bermain, dan naik level dengan caranya sendiri.</p>
          <div className="hero-actions">
            <a className="button" href={downloadUrl || "#unduh"} target={downloadUrl ? "_blank" : undefined} rel={downloadUrl ? "noreferrer" : undefined}><Download size={18} /> Mulai belajar</a>
            <a className="text-link" href="#tentang">Kenali Cerdikia <ArrowDown size={15} /></a>
          </div>
          <div className="hero-note"><span className="note-icon"><BookOpen size={16} /></span><span>Belajar sedikit demi sedikit,<br /><strong>bertumbuh setiap hari.</strong></span></div>
        </div>
        <div className="hero-art" aria-label="Pratinjau aplikasi Cerdikia">
          <div className="art-tag tag-top"><span className="tag-icon"><Zap size={15} fill="currentColor" /></span> Poin XP terkumpul</div>
          <Image className="overview-image" src="/images/mockup-overview.png" alt="Kolase layar belajar, latihan, misi, dan reward di aplikasi Cerdikia" width={1400} height={800} priority />
          <div className="art-tag tag-bottom"><span className="tag-icon tag-orange"><Trophy size={15} /></span> Setiap latihan punya arti</div>
        </div>
        <a className="scroll-cue" href="#tentang"><span /> Gulir untuk menjelajah</a>
      </section>

      <section className="intro section-wrap" id="tentang">
        <div className="section-marker"><span>01</span><span className="marker-line" /> Tentang Cerdikia</div>
        <div className="intro-layout">
          <h2>Rasa ingin tahu<br />adalah <span>awal dari semua.</span></h2>
          <div className="intro-copy"><p>Cerdikia mengubah waktu belajar menjadi sesi yang terasa ringan dan menyenangkan. Anak bisa menjelajahi materi, mencoba kuis, lalu melihat usahanya berkembang.</p><a className="text-link" href="#fitur">Lihat cara kerjanya <ArrowRight size={15} /></a></div>
        </div>
        <div className="principles">
          <article><span className="principle-number">A</span><div><h3>Belajar aktif</h3><p>Materi dan latihan mengundang anak untuk ikut mencoba.</p></div></article>
          <article><span className="principle-number">B</span><div><h3>Progres terasa</h3><p>Poin dan level memberi tanda atas usaha yang sudah dilakukan.</p></div></article>
          <article><span className="principle-number">C</span><div><h3>Ritme sendiri</h3><p>Jelajahi fitur belajar dengan nyaman, satu langkah demi satu.</p></div></article>
        </div>
      </section>

      <section className="features section-wrap" id="fitur">
        <div className="section-heading">
          <div><div className="section-marker"><span>02</span><span className="marker-line" /> Di dalam aplikasi</div><h2>Satu aplikasi,<br /><span>banyak hal seru.</span></h2></div>
          <p className="heading-aside">Dari sesi latihan sampai hadiah kecil yang bikin semangat kembali.</p>
        </div>
        <div className="screens-grid">
          {screens.map((screen, index) => <article key={screen.src} className={`screen-card screen-${screen.kind}`}>
            <div className="screen-image"><Image src={screen.src} alt={screen.alt} width={1400} height={800} /></div>
            <div className="screen-caption"><span>0{index + 1}</span><h3>{screen.title}</h3><ArrowRight size={17} /></div>
          </article>)}
        </div>
        <div className="feature-strip">
          <div><span className="strip-icon"><Gamepad2 size={20} /></span><p><strong>Latihan interaktif</strong><br />Uji pemahaman sambil bermain.</p></div>
          <div><span className="strip-icon"><Flame size={20} /></span><p><strong>Misi dan XP</strong><br />Jaga semangat lewat tantangan.</p></div>
          <div><span className="strip-icon"><Trophy size={20} /></span><p><strong>Ranking belajar</strong><br />Rayakan progres di tiap level.</p></div>
        </div>
      </section>

      <section className="ranking" id="ranking">
        <div className="ranking-inner section-wrap">
          <div className="ranking-copy">
            <div className="section-marker section-marker-light"><span>03</span><span className="marker-line" /> Tangga pencapaian</div>
            <h2>Setiap usaha<br />punya <span>tingkat baru.</span></h2>
            <p>Terus berlatih dan kumpulkan XP. Perjalananmu akan ditandai dengan tier ranking yang bisa diraih setahap demi setahap.</p>
            <div className="ranking-proof"><Image src="/images/ranking-frame.svg" alt="Contoh tampilan ranking di aplikasi Cerdikia" width={200} height={400} /><span><strong>Belajar. Dapat XP.</strong><br />Lihat progres naik.</span></div>
          </div>
          <div className="tier-list" aria-label="Urutan tier ranking Cerdikia">
            {tiers.map((tier, index) => <article className="tier-row" key={tier.name}>
              <span className="tier-order">0{index + 1}</span><Image src={tier.image} alt={`Lencana ${tier.name}`} width={68} height={68} /><span className="tier-name">{tier.name}</span><span className="tier-note">{tier.note}</span><Check className="tier-check" size={16} />
            </article>)}
            <p className="tier-footnote">Urutan tier dari awal hingga pencapaian tertinggi.</p>
          </div>
        </div>
      </section>

      <section className="download-section section-wrap" id="unduh">
        <div className="download-card">
          <div className="download-stamp"><Download size={17} /> SIAP UNTUK MULAI?</div>
          <h2>Petualangan belajarmu<br /><span>dimulai di sini.</span></h2>
          <p>Unduh Cerdikia dan temukan pengalaman belajar yang lebih menyenangkan.</p>
          <a className="button button-light" href={downloadUrl || "#top"} target={downloadUrl ? "_blank" : undefined} rel={downloadUrl ? "noreferrer" : undefined}><Download size={18} /> Unduh untuk Android <ArrowRight size={16} /></a>
          {!downloadUrl && <small>Tautan unduhan akan segera tersedia.</small>}
          <div className="download-orbit orbit-one" /><div className="download-orbit orbit-two" />
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#top" aria-label="Cerdikia, kembali ke atas"><Image src="/images/cerdikia-logo.svg" alt="Cerdikia" width={138} height={44} /></a>
        <p>Belajar, bermain, bertumbuh.</p>
        <nav aria-label="Navigasi footer"><a href="#tentang">Tentang</a><a href="#fitur">Fitur</a><a href="#ranking">Ranking</a><a href="#unduh">Unduh</a></nav>
        <span className="copyright">© {new Date().getFullYear()} Cerdikia</span>
      </footer>
    </main>
  )
}
