import { ImageResponse } from 'next/og';

export const config = { runtime: 'edge' };

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#fcf9f3',
          overflow: 'hidden',
        }}
      >
        {/* Subtle decorative circles */}
        <div style={{
          position: 'absolute', top: -80, right: 280, width: 320, height: 320,
          background: '#dfc0b7', borderRadius: '50%', opacity: 0.25, display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: 60, width: 200, height: 200,
          background: '#ccd6ad', borderRadius: '50%', opacity: 0.3, display: 'flex',
        }} />

        {/* Left content area */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 72px',
          position: 'relative',
        }}>
          {/* Portfolio badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 44,
          }}>
            <div style={{
              background: '#3f6267', color: '#fff',
              padding: '10px 24px', borderRadius: 9999,
              fontSize: 13, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'sans-serif', display: 'flex',
            }}>
              Portfolio
            </div>
            <div style={{
              marginLeft: 16, fontSize: 13, color: '#8b716a',
              fontFamily: 'sans-serif', letterSpacing: '0.1em',
              textTransform: 'uppercase', display: 'flex',
            }}>
              Mechanical Engineer & Designer
            </div>
          </div>

          {/* Main heading */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            marginBottom: 32,
          }}>
            <span style={{
              fontSize: 88, fontWeight: 800, color: '#1c1c18',
              lineHeight: 1.0, letterSpacing: '-0.03em',
              fontFamily: 'sans-serif', display: 'flex',
            }}>
              Hi, I'm
            </span>
            <span style={{
              fontSize: 88, fontWeight: 800, color: '#3f6267',
              lineHeight: 1.0, letterSpacing: '-0.03em',
              fontFamily: 'sans-serif', display: 'flex',
            }}>
              Rebecca.
            </span>
          </div>

          {/* Subtitle */}
          <div style={{
            fontSize: 22, color: '#58423c', lineHeight: 1.55,
            fontFamily: 'sans-serif', fontWeight: 500,
            maxWidth: 520, display: 'flex', flexWrap: 'wrap',
          }}>
            Moving parts, human-centred teams, and big-picture innovation.
          </div>

          {/* Bottom divider line */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: 4, background: '#dfc0b7', display: 'flex',
          }} />
        </div>

        {/* Right accent panel */}
        <div style={{
          width: 300, background: '#3f6267',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 16, flexShrink: 0, position: 'relative',
        }}>
          {/* Faint circle inside panel */}
          <div style={{
            position: 'absolute', top: -40, right: -40,
            width: 220, height: 220,
            background: 'rgba(255,255,255,0.06)', borderRadius: '50%', display: 'flex',
          }} />
          <div style={{
            position: 'absolute', bottom: -30, left: -30,
            width: 160, height: 160,
            background: 'rgba(255,255,255,0.06)', borderRadius: '50%', display: 'flex',
          }} />

          {/* RG monogram */}
          <div style={{
            fontSize: 100, fontWeight: 800,
            color: 'rgba(255,255,255,0.18)',
            fontFamily: 'sans-serif', lineHeight: 1,
            letterSpacing: '-0.04em', display: 'flex',
          }}>
            RG
          </div>

          {/* Divider */}
          <div style={{
            width: 40, height: 3,
            background: 'rgba(255,255,255,0.35)',
            borderRadius: 2, display: 'flex',
          }} />

          {/* Label */}
          <div style={{
            fontSize: 12, color: 'rgba(255,255,255,0.55)',
            fontFamily: 'sans-serif', letterSpacing: '0.16em',
            textTransform: 'uppercase', display: 'flex',
          }}>
            Portfolio
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
