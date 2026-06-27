import { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import IconTrail from '../components/IconTrail';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('New Project Inquiry');
  const [message, setMessage] = useState('');

  const opener = topic === 'Just saying hi!' ? 'Just wanted to say hi! ' : '';
  const body = message || 'Start typing your message and watch it take shape here…';
  const sign = name ? ('\n\n— ' + name + (email ? '\n' + email : '')) : '';
  const preview = 'Hi Rebecca,\n\n' + opener + body + sign;

  const send = () => {
    const subject = (topic || 'New inquiry') + (name ? ' — from ' + name : '');
    const bodyText = 'Hi Rebecca,\n\n' + (message || '') + (name ? '\n\n— ' + name : '') + (email ? '\n' + email : '');
    window.location.href = 'mailto:rebeccagunawan.nz@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyText);
  };

  return (
    <>
      <Head>
        <title>Let's Chat — Rebecca Gunawan</title>
        <meta name="description" content="Get in touch with Rebecca Gunawan — mechanical engineer and designer." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Let's Chat — Rebecca Gunawan" />
        <meta property="og:description" content="Get in touch with Rebecca Gunawan — mechanical engineer and designer." />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/contact`} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/images/contact-preview.png`} />
        <meta property="og:image:alt" content="Let's Chat — Rebecca Gunawan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Let's Chat — Rebecca Gunawan" />
        <meta name="twitter:description" content="Get in touch with Rebecca Gunawan — mechanical engineer and designer." />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || ''}/images/contact-preview.png`} />
      </Head>

      <div style={{ background: '#fcf9f3', color: '#1c1c18', fontFamily: "'Manrope',sans-serif" }}>
        <Nav />

        <main style={{ position: 'relative', minHeight: '100vh', backgroundImage: 'radial-gradient(circle,#dfc0b7 1px,transparent 1px)', backgroundSize: '40px 40px' }}>
          <span className="ms" style={{ position: 'absolute', top: 80, left: 48, color: '#a8cdd3', fontSize: 48, fontVariationSettings: "'FILL' 1", animation: 'floaty 7s ease-in-out infinite', pointerEvents: 'none' }}>star</span>
          <span className="ms" style={{ position: 'absolute', top: 160, right: 80, color: '#b3bd8a', fontSize: 60, fontVariationSettings: "'FILL' 1", animation: 'floaty 9s ease-in-out infinite', pointerEvents: 'none' }}>auto_awesome</span>
          <span className="ms" style={{ position: 'absolute', bottom: 140, left: '24%', color: '#ffaed8', fontSize: 32, animation: 'twinkle 5s ease-in-out infinite', pointerEvents: 'none' }}>auto_awesome</span>

          <section className="contact-section">
            <div className="contact-layout">

              {/* LEFT: heading + contact info */}
              <div className="contact-left">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <span style={{ display: 'inline-block', alignSelf: 'flex-start', background: '#ccd6ad', color: '#3f4a27', padding: '6px 16px', borderRadius: 9999, fontFamily: "'Space Mono'", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.14em', boxShadow: '4px 4px 0 0 #1c1c18', transform: 'rotate(1deg)' }}>
                    Let's Chat
                  </span>
                  <h1 className="contact-heading">
                    Have an idea?<br />
                    <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Let's make it real.</span>
                  </h1>
                  <p style={{ fontFamily: "'Manrope'", fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.6, color: '#58423c', maxWidth: 440, margin: 0 }}>
                    Whether you're starting a new brand or just want to chat about the future of design and engineering, my door is always open. Pick whichever feels easiest.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <a href="mailto:rebeccagunawan.nz@gmail.com" className="contactrow" style={{ display: 'flex', alignItems: 'center', gap: 20, textDecoration: 'none', color: 'inherit' }}>
                    <div className="iconbox" style={{ width: 64, height: 64, background: '#c4e9ef', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-3deg)', boxShadow: '4px 4px 0 0 #1c1c18', flexShrink: 0 }}>
                      <span className="ms" style={{ color: '#3f6267', fontSize: 30 }}>mail</span>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontFamily: "'Space Mono'", fontSize: 12, color: '#58423c', textTransform: 'uppercase', margin: '0 0 4px' }}>Email</p>
                      <p style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 'clamp(16px, 1.8vw, 22px)', color: '#1c1c18', margin: 0, wordBreak: 'break-word' }}>rebeccagunawan.nz@gmail.com</p>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/rebeccagunawan/" target="_blank" rel="noopener noreferrer" className="contactrow" style={{ display: 'flex', alignItems: 'center', gap: 20, textDecoration: 'none', color: 'inherit' }}>
                    <div className="iconbox" style={{ width: 64, height: 64, background: '#ccd6ad', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(3deg)', boxShadow: '4px 4px 0 0 #1c1c18', flexShrink: 0 }}>
                      <span className="ms" style={{ color: '#5e6e45', fontSize: 30 }}>person</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Space Mono'", fontSize: 12, color: '#58423c', textTransform: 'uppercase', margin: '0 0 4px' }}>LinkedIn</p>
                      <p style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 'clamp(16px, 1.8vw, 22px)', color: '#1c1c18', margin: 0 }}>in/rebeccagunawan</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* RIGHT: Message Creator */}
              <div className="creator-zone contact-right">
                <div className="contact-form-box">
                  <div style={{ position: 'absolute', top: -16, right: -16, background: '#87466b', color: '#fff', padding: 16, borderRadius: 9999, transform: 'rotate(12deg)', boxShadow: '4px 4px 0 0 #1c1c18', display: 'flex' }}>
                    <span className="ms" style={{ fontSize: 24 }}>edit_note</span>
                  </div>

                  <h2 style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 'clamp(20px, 2.4vw, 28px)', margin: '0 0 4px' }}>Message Creator</h2>
                  <p style={{ fontFamily: "'Manrope'", fontSize: 15, color: '#58423c', margin: '0 0 32px' }}>Fill this in and I'll compose a tidy email for you to send.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 28 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <label style={{ fontFamily: "'Space Mono'", fontSize: 12, textTransform: 'uppercase', color: '#58423c', marginLeft: 4 }}>Your Name</label>
                        <input className="field" type="text" placeholder="Jane Doe" value={name} onChange={e => setName(e.target.value)} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <label style={{ fontFamily: "'Space Mono'", fontSize: 12, textTransform: 'uppercase', color: '#58423c', marginLeft: 4 }}>Your Email</label>
                        <input className="field" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label style={{ fontFamily: "'Space Mono'", fontSize: 12, textTransform: 'uppercase', color: '#58423c', marginLeft: 4 }}>What's it about?</label>
                      <select className="field" value={topic} onChange={e => setTopic(e.target.value)}>
                        <option>New Project Inquiry</option>
                        <option>Partnership / Collaboration</option>
                        <option>Just saying hi!</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label style={{ fontFamily: "'Space Mono'", fontSize: 12, textTransform: 'uppercase', color: '#58423c', marginLeft: 4 }}>Your Message</label>
                      <textarea className="field" rows={3} placeholder="Tell me about your magic..." style={{ resize: 'none' }} value={message} onChange={e => setMessage(e.target.value)} />
                    </div>

                    {/* Live preview */}
                    <div style={{ background: '#fcf9f3', border: '1px dashed #b3bd8a', borderRadius: 16, padding: 24 }}>
                      <p style={{ fontFamily: "'Space Mono'", fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: '#5e6e45', margin: '0 0 12px' }}>Preview</p>
                      <p style={{ fontFamily: "'Manrope'", fontSize: 15, lineHeight: 1.7, color: '#1c1c18', margin: 0, whiteSpace: 'pre-wrap' }}>{preview}</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#5e6e45', fontFamily: "'Space Mono'", fontSize: 12, textTransform: 'uppercase' }}>
                        <span className="ms" style={{ fontSize: 18 }}>verified</span> Replies in 24h
                      </div>
                      <button
                        onClick={send}
                        className="press-btn"
                        style={{ background: '#3f6267', color: '#fff', padding: '20px 44px', borderRadius: 12, fontFamily: "'Space Mono'", fontSize: 12, textTransform: 'uppercase', letterSpacing: '.12em', boxShadow: '4px 4px 0 0 #1c1c18', border: 'none', display: 'flex', alignItems: 'center', gap: 12 }}
                      >
                        Send Message <span className="ms">send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>

        <Footer />
        <IconTrail pauseSelector=".creator-zone" />
      </div>
    </>
  );
}
