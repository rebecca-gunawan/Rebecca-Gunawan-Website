import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import IconTrail from '../components/IconTrail';

const PROJECTS = [
  {
    genre: 'Robotics & Automation',
    title: 'Warman Competition',
    description: 'Designed and built a complete mechatronic system from scratch for autonomous payload retrieval, transport, and precision drop-off; engineered the full mechanism from a blank slate through iterative CAD prototyping and design–build–test cycles to optimise reliability and cycle time.',
    imgSrc: '/images/project-warman.png',
  },
  {
    genre: 'Robotics & Automation',
    title: 'VEX Robot Autonomous Navigation',
    description: 'Programmed an autonomous payload-retrieval and line-following robot in C with optical sensor feedback for real-time path correction; P and PI control loops to minimise steady-state error and improve trajectory tracking.',
    imgSrc: '/images/project-vex.png',
  },
  {
    genre: 'Structural Design · CAD',
    title: 'Towers in the Wind',
    description: 'Engineered a robust, weather-resistant tower structure under strict material constraints, utilising CAD software, 3D modelling, iterative prototyping, and structural design techniques to maximise strength and performance using cardboard-based materials.',
    imgSrc: '/images/project-towers.png',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects — Rebecca Gunawan</title>
        <meta name="description" content="Rebecca Gunawan's engineering projects — robotics, CAD, and structural design." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects — Rebecca Gunawan" />
        <meta property="og:description" content="Rebecca Gunawan's engineering projects — robotics, CAD, and structural design." />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/projects`} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/images/projects-preview.png`} />
        <meta property="og:image:alt" content="Projects — Rebecca Gunawan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects — Rebecca Gunawan" />
        <meta name="twitter:description" content="Rebecca Gunawan's engineering projects — robotics, CAD, and structural design." />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/images/projects-preview.png`} />
      </Head>

      <div style={{ background: '#fcf9f3', color: '#1c1c18', fontFamily: "'Manrope',sans-serif" }}>
        <Nav />

        <main style={{ position: 'relative' }}>
          {/* ===== HERO ===== */}
          <section className="projects-hero">
            <span className="ms" style={{ position: 'absolute', top: 40, left: 60, color: '#3f6267', fontSize: 36, transform: 'rotate(12deg)', fontVariationSettings: "'FILL' 1", animation: 'twinkle 6s ease-in-out infinite', pointerEvents: 'none' }}>auto_awesome</span>
            <span className="ms" style={{ position: 'absolute', top: 120, right: 90, color: '#87466b', fontSize: 48, opacity: .5, transform: 'rotate(-12deg)', animation: 'twinkle 7s ease-in-out infinite', pointerEvents: 'none' }}>pentagon</span>

            <h1 className="projects-heading">
              Rebecca's <span style={{ color: '#3f6267' }}>Projects</span>
            </h1>
            <p className="projects-sub">
              A handpicked collection of my favourite works — where{' '}
              <span style={{ color: '#3f6267', fontStyle: 'italic', fontWeight: 700 }}>curiosity</span>,{' '}
              <span style={{ color: '#3f6267', fontStyle: 'italic', fontWeight: 700 }}>engineering</span>, and{' '}
              <span style={{ color: '#3f6267', fontStyle: 'italic', fontWeight: 700 }}>thoughtful design</span> meet.
            </p>
            <Link
              href="/contact"
              className="lift"
              style={{ display: 'inline-block', marginTop: 40, background: '#3f6267', color: '#fff', padding: '18px 36px', borderRadius: 9999, fontFamily: "'Space Mono'", fontSize: 13, textTransform: 'uppercase', letterSpacing: '.12em', boxShadow: '4px 4px 0 0 #1c1c18', textDecoration: 'none' }}
            >
              Let's Collaborate
            </Link>
          </section>

          {/* ===== PROJECT ROWS ===== */}
          <section className="projrows-section">
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                className="projrow"
                style={{ background: '#f6f3ed', border: '1px solid #dfc0b7', borderRadius: 24, padding: 24, boxShadow: '4px 4px 0 0 #1c1c18' }}
              >
                <div className="proj-img-col">
                  <img src={proj.imgSrc} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px 8px 8px 0' }}>
                  <span style={{ fontFamily: "'Space Mono'", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.12em', color: '#5e6e45', marginBottom: 10 }}>{proj.genre}</span>
                  <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 'clamp(22px, 2.8vw, 32px)', lineHeight: 1.15, margin: 0 }}>{proj.title}</h3>
                  <div className="details">
                    <p style={{ fontFamily: "'Manrope'", fontSize: 16, lineHeight: 1.6, color: '#58423c', margin: '0 0 14px' }}>{proj.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* ===== CTA ===== */}
          <section className="cta-section">
            <h2 className="cta-heading">
              Let's build something <span style={{ color: '#3f6267', fontStyle: 'italic' }}>great</span> together.
            </h2>
            <p className="cta-sub">
              Always keen to take on new projects and interesting problems. Got an idea or a question? I'd love to hear it.
            </p>
            <Link
              href="/contact"
              className="lift"
              style={{ display: 'inline-block', background: '#3f6267', color: '#fff', padding: '20px 48px', borderRadius: 9999, fontFamily: "'Space Mono'", fontSize: 14, textTransform: 'uppercase', letterSpacing: '.12em', boxShadow: '4px 4px 0 0 #1c1c18', textDecoration: 'none' }}
            >
              Let's Collaborate
            </Link>
          </section>
        </main>

        <Footer />
        <IconTrail pauseSelector=".projrow" />
      </div>
    </>
  );
}
