import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#f0eee8', borderTop: '1px solid rgba(223,192,183,.4)' }}>
      <div className="footer-inner">
        <p style={{ fontFamily: "'Manrope'", fontSize: 16, color: '#3f6267', margin: 0 }}>
          © 2026 Rebecca Gunawan.
        </p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" style={{ fontFamily: "'Manrope'", fontSize: 16, color: '#3f6267', textDecoration: 'underline', textUnderlineOffset: 4 }}>About</Link>
          <Link href="/projects" style={{ fontFamily: "'Manrope'", fontSize: 16, color: '#3f6267', textDecoration: 'underline', textUnderlineOffset: 4 }}>Projects</Link>
          <Link href="/contact" style={{ fontFamily: "'Manrope'", fontSize: 16, color: '#3f6267', textDecoration: 'underline', textUnderlineOffset: 4 }}>Contact</Link>
        </div>
      </div>
    </footer>
  );
}
