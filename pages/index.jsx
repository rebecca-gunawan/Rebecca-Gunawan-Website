import { useRef, useEffect, useCallback, useReducer } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import IconTrail from '../components/IconTrail';

const N = 40;

const SKILLS = [
  { label: 'CAD',                   bg: '#a8cdd3', border: '#3f6267' },
  { label: 'Product Design',         bg: '#fcf9f3', border: '#8b716a' },
  { label: 'Project Documentation',  bg: '#ccd6ad', border: '#5e6e45' },
  { label: 'Electronics',            bg: '#ffd8e9', border: '#87466b' },
  { label: 'C',                      bg: '#fcf9f3', border: '#8b716a' },
  { label: 'MATLAB',                 bg: '#a8cdd3', border: '#3f6267' },
  { label: 'Problem Solving',        bg: '#ccd6ad', border: '#5e6e45' },
  { label: 'Prototyping',            bg: '#ffd8e9', border: '#87466b' },
  { label: 'Innovation',             bg: '#a8cdd3', border: '#3f6267' },
];

export default function About() {
  const trailPhotos = [
    "/images/trail/photo-1.jpg",
    "/images/trail/photo-2.jpg",
    "/images/trail/photo-3.jpg",
    "/images/trail/IMG_8510.jpg",
    "/images/trail/IMG_8308.JPG",
    "/images/trail/IMG_8146.JPG",
    "/images/trail/IMG_7984.jpg",
    "/images/trail/IMG_7199.jpg",
    "/images/trail/IMG_7103.JPG",
    "/images/trail/IMG_7099.jpg",
    "/images/trail/IMG_6841.jpg",
    "/images/trail/IMG_6799.jpg",
    "/images/trail/IMG_6788.jpg",
    "/images/trail/IMG_6560.jpg",
    "/images/trail/IMG_6525.jpg",
    "/images/trail/IMG_6481.jpg",
    "/images/trail/IMG_6479.jpg",
    "/images/trail/IMG_6446.jpg",
    "/images/trail/IMG_6338.jpg",
    "/images/trail/IMG_6260.jpg",
    "/images/trail/IMG_6225.jpg",
    "/images/trail/IMG_6111.JPG",
    "/images/trail/IMG_6031.jpg",
    "/images/trail/IMG_5561.jpg",
    "/images/trail/IMG_5362.jpg",
    "/images/trail/IMG_4396.jpg",
    "/images/trail/IMG_4258.jpg",
    "/images/trail/IMG_3951.jpg",
    "/images/trail/IMG_3447.jpg",
    "/images/trail/IMG_2521.jpg",
    "/images/trail/IMG_2517.JPG",
    "/images/trail/IMG_2333.jpg",
    "/images/trail/IMG_1702.jpg",
    "/images/trail/IMG_1179.JPEG",
    "/images/trail/IMG_0523.jpg",
    "/images/trail/IMG_0296.JPG",
    "/images/trail/IMG_0260.jpg",
    "/images/trail/IMG_0223.jpg",
    "/images/trail/IMG_0105.jpg",
    "/images/trail/GPTempDownload.JPG",
    "/images/trail/GPTempDownload 3.JPG",
    "/images/trail/GPTempDownload 2.JPG",
    "/images/trail/GPTempDownload 1.jpg",
    "/images/trail/CIE_IDEAS_CHALLENGE_014_HIGH_RES (1).jpg",
    "/images/trail/CIE_IDEAS_CHALLENGE_012_HIGH_RES.jpg",
    "/images/trail/5530962912_IMG_0508.JPG",
  ];

  const posRef = useRef(Array.from({ length: N }, () => ({ x: -9999, y: -9999, on: false })));
  const idxRef = useRef(0);
  const lastRef = useRef(null);
  const timersRef = useRef({});
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const handleMouseMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const gap = 54;
    if (lastRef.current) {
      const dx = x - lastRef.current.x, dy = y - lastRef.current.y;
      if (dx * dx + dy * dy < gap * gap) return;
    }
    lastRef.current = { x, y };
    const i = idxRef.current;
    idxRef.current = (idxRef.current + 1) % N;
    posRef.current[i] = { x, y, on: true };
    clearTimeout(timersRef.current[i]);
    timersRef.current[i] = setTimeout(() => {
      posRef.current[i] = { ...posRef.current[i], on: false };
      forceUpdate();
    }, 1200);
    forceUpdate();
  }, []);

  useEffect(() => {
    return () => Object.values(timersRef.current).forEach(clearTimeout);
  }, []);

  const idle = !posRef.current.some(p => p.on);

  return (
    <>
      <Head>
        <title>Rebecca Gunawan — Portfolio</title>
        <meta name="description" content="Rebecca Gunawan — mechanical engineer and designer." />
      </Head>

      <div style={{ background: '#fcf9f3', color: '#1c1c18', fontFamily: "'Manrope',sans-serif" }}>
        <Nav />

        <main>
          {/* ===== HERO ===== */}
          <section
            id="about-hero"
            className="hero-section"
            onMouseMove={handleMouseMove}
          >
            <span className="ms" style={{ position: 'absolute', top: 90, left: 80, color: '#a8cdd3', fontSize: 42, fontVariationSettings: "'FILL' 1", animation: 'floaty 7s ease-in-out infinite', zIndex: 1, pointerEvents: 'none' }}>star</span>
            <span className="ms" style={{ position: 'absolute', bottom: 170, right: 180, color: '#5e6e45', fontSize: 30, fontVariationSettings: "'FILL' 1", animation: 'floaty2 9s ease-in-out infinite', zIndex: 1, pointerEvents: 'none' }}>auto_awesome</span>

            {/* Photo trail tiles */}
            {posRef.current.map((ph, i) => {
              const rot = Math.round(Math.sin(i * 3.3) * 10);
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: 104, height: 128,
                    zIndex: 2,
                    left: ph.x, top: ph.y,
                    transform: `translate(-50%,-50%) rotate(${rot}deg)`,
                    opacity: ph.on ? 1 : 0,
                    transition: 'opacity .55s ease, transform .55s ease',
                    pointerEvents: 'none',
                  }}
                >
                  <img
                    src={trailPhotos[i % trailPhotos.length]}
                    alt=""
                    aria-hidden="true"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10, boxShadow: '0 6px 18px rgba(0,0,0,.18)', display: 'block' }}
                  />
                </div>
              );
            })}

            {/* Centered text */}
            <div className="hero-text-wrap">
              <h1 className="hero-heading">
                Hi, I'm Rebecca.
              </h1>
              <p className="hero-sub">
                I design <span style={{ color: '#3f6267', fontStyle: 'italic', fontWeight: 700 }}>moving parts</span>, foster thriving <span style={{ color: '#3f6267', fontStyle: 'italic', fontWeight: 700 }}>human-centred teams</span>, and tackle big problems with <span style={{ color: '#3f6267', fontStyle: 'italic', fontWeight: 700 }}>innovation</span>.
              </p>
              <Link
                href="/projects"
                className="lift"
                style={{ pointerEvents: 'auto', display: 'inline-block', background: '#3f6267', color: '#fff', padding: '18px 36px', borderRadius: 9999, fontFamily: "'Space Mono'", fontSize: 13, textTransform: 'uppercase', letterSpacing: '.12em', boxShadow: '4px 4px 0 0 #1c1c18', textDecoration: 'none' }}
              >
                See My Work
              </Link>
              {idle && (
                <p className="trail-hint">
                  ✦ move your cursor anywhere to reveal my world ✦
                </p>
              )}
            </div>
          </section>

          {/* ===== ABOUT ME ===== */}
          <section className="about-section">
            <div className="about-inner">
              <h2 className="about-heading">About Me</h2>

              <div className="flipcards-grid">

                {/* Studies */}
                <div className="flipcard" style={{ height: 380, transform: 'rotate(-2deg)' }}>
                  <div className="flip-inner">
                    <div className="flip-face" style={{ background: '#fcf9f3', padding: 40, border: '1px solid rgba(223,192,183,.6)', boxShadow: '4px 4px 0 0 #1c1c18', display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <div style={{ width: 48, height: 48, background: '#a8cdd3', borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="ms" style={{ color: '#3f6267', fontSize: 24 }}>school</span>
                      </div>
                      <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 26, margin: 0 }}>Studies</h3>
                      <p style={{ fontFamily: "'Manrope'", fontSize: 16, lineHeight: 1.6, color: '#58423c', margin: 0 }}>Bachelor of Mechanical Engineering (Honours). Always tinkering, always learning something new on the side.</p>
                    </div>
                    <div className="flip-face" style={{ transform: 'rotateY(180deg)', background: '#fcf9f3', border: '1px solid rgba(223,192,183,.6)', boxShadow: '4px 4px 0 0 #1c1c18', padding: 20 }}>
                      <img src="/images/about-studies.jpg" alt="Studies" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 14, boxShadow: '0 8px 20px rgba(0,0,0,.2)', display: 'block' }} />
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div className="flipcard flipcard-stagger-md" style={{ height: 380, transform: 'rotate(1.5deg)' }}>
                  <div className="flip-inner">
                    <div className="flip-face" style={{ background: 'rgba(204,214,173,.4)', padding: 40, border: '1px solid rgba(94,110,69,.3)', boxShadow: '4px 4px 0 0 #1c1c18', display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <div style={{ width: 48, height: 48, background: '#ccd6ad', borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="ms" style={{ color: '#5e6e45', fontSize: 24 }}>interests</span>
                      </div>
                      <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 26, margin: 0 }}>Interests</h3>
                      <p style={{ fontFamily: "'Manrope'", fontSize: 16, lineHeight: 1.6, color: '#58423c', margin: 0 }}>Public speaking, running, the outdoors, and meeting curious people — the things that keep me energised beyond the workbench.</p>
                    </div>
                    <div className="flip-face" style={{ transform: 'rotateY(180deg)', background: '#fcf9f3', border: '1px solid rgba(94,110,69,.3)', boxShadow: '4px 4px 0 0 #1c1c18', padding: 20 }}>
                      <img src="/images/about-interests.JPG" alt="Interests" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 14, boxShadow: '0 8px 20px rgba(0,0,0,.2)', display: 'block' }} />
                    </div>
                  </div>
                </div>

                {/* Hobbies */}
                <div className="flipcard flipcard-stagger-sm" style={{ height: 380, transform: 'rotate(2deg)' }}>
                  <div className="flip-inner">
                    <div className="flip-face" style={{ background: '#fcf9f3', padding: 40, border: '1px solid rgba(223,192,183,.6)', boxShadow: '4px 4px 0 0 #1c1c18', display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <div style={{ width: 48, height: 48, background: '#ffaed8', borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="ms" style={{ color: '#87466b', fontSize: 24 }}>palette</span>
                      </div>
                      <h3 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 26, margin: 0 }}>Hobbies</h3>
                      <p style={{ fontFamily: "'Manrope'", fontSize: 16, lineHeight: 1.6, color: '#58423c', margin: 0 }}>Knitting, sewing, reading, and making things by hand — slow, tactile creativity that balances out all the engineering.</p>
                    </div>
                    <div className="flip-face" style={{ transform: 'rotateY(180deg)', background: '#fcf9f3', border: '1px solid rgba(223,192,183,.6)', boxShadow: '4px 4px 0 0 #1c1c18', padding: 20 }}>
                      <img src="/images/about-hobbies.jpg" alt="Hobbies" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 14, boxShadow: '0 8px 20px rgba(0,0,0,.2)', display: 'block' }} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ===== SKILLS MARQUEE ===== */}
          <section className="marquee-section">
            <div
              className="marquee-mask"
              style={{
                overflow: 'hidden',
                WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)',
                maskImage: 'linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)',
              }}
            >
              <div className="marquee-track">
                {[...SKILLS, ...SKILLS].map((s, i) => (
                  <span
                    key={i}
                    className="chip"
                    aria-hidden={i >= SKILLS.length ? 'true' : undefined}
                    style={{
                      flexShrink: 0, padding: '16px 28px',
                      background: s.bg, border: `1px solid ${s.border}`,
                      borderRadius: 9999, boxShadow: '4px 4px 0 0 #1c1c18',
                      fontFamily: "'Space Mono'", fontSize: 13, textTransform: 'uppercase', whiteSpace: 'nowrap',
                    }}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ===== CTA ===== */}
          <section className="cta-section">
            <h2 className="cta-heading">
              Have a look at <span style={{ color: '#3f6267', fontStyle: 'italic' }}>cool things</span> I've built.
            </h2>
            <p className="cta-sub">
              A mix of robotics, mechanical design, and hands-on engineering. Take a look through what I've been building.
            </p>
            <Link
              href="/projects"
              className="lift"
              style={{ display: 'inline-block', background: '#3f6267', color: '#fff', padding: '20px 48px', borderRadius: 9999, fontFamily: "'Space Mono'", fontSize: 14, textTransform: 'uppercase', letterSpacing: '.12em', boxShadow: '4px 4px 0 0 #1c1c18', textDecoration: 'none' }}
            >
              View Projects
            </Link>
          </section>
        </main>

        <Footer />
        <IconTrail pauseSelector="#about-hero, a, button" />
      </div>
    </>
  );
}
