import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Nav() {
  const { pathname } = useRouter();
  const active = (path) => pathname === path;
  const [open, setOpen] = useState(false);

  const linkStyle = (path) => ({
    fontFamily: "'Manrope'",
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: '.06em',
    fontWeight: 700,
    textDecoration: 'none',
    color: active(path) ? '#3f6267' : '#58423c',
    ...(active(path) ? { borderBottom: '2px solid #3f6267', paddingBottom: 2 } : {}),
  });

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(252,249,243,.82)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(223,192,183,.4)',
    }}>
      <nav className="nav-inner">
        <Link href="/" style={{
          fontFamily: "'Bricolage Grotesque'", fontWeight: 800,
          fontSize: 'clamp(18px, 2.5vw, 28px)',
          letterSpacing: '-.02em', color: '#3f6267', textDecoration: 'none',
        }}>
          Rebecca Gunawan
        </Link>

        <div className="nav-links">
          <Link href="/" className="navlink" style={linkStyle('/')}>About</Link>
          <Link href="/projects" className="navlink" style={linkStyle('/projects')}>Projects</Link>
          <Link href="/contact" className="btn-press" style={{
            background: '#3f6267', color: '#fff', fontFamily: "'Space Mono'", fontSize: 12,
            padding: '12px 24px', borderRadius: 9999, textTransform: 'uppercase',
            letterSpacing: '.12em', boxShadow: '4px 4px 0 0 #1c1c18',
            textDecoration: 'none', transition: 'transform .15s ease',
          }}>Contact</Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="ms" style={{ fontSize: 28, color: '#3f6267' }}>
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {open && (
        <div className="nav-mobile-menu">
          <Link href="/" className="nav-mobile-link navlink" onClick={() => setOpen(false)}
            style={{ color: active('/') ? '#3f6267' : '#58423c' }}>About</Link>
          <Link href="/projects" className="nav-mobile-link navlink" onClick={() => setOpen(false)}
            style={{ color: active('/projects') ? '#3f6267' : '#58423c' }}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-press"
            style={{ display: 'inline-block', alignSelf: 'flex-start', background: '#3f6267', color: '#fff',
              fontFamily: "'Space Mono'", fontSize: 12, padding: '12px 24px', borderRadius: 9999,
              textTransform: 'uppercase', letterSpacing: '.12em', boxShadow: '4px 4px 0 0 #1c1c18',
              textDecoration: 'none' }}>Contact</Link>
        </div>
      )}
    </header>
  );
}
