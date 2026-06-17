import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '../lib/css';
import { ArrowRight } from '../components/Icons';

const eyebrow = 'color:#2EE6A6; font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;';
const svgBase = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

const HOURS = [
  { day: 'Mon – Fri', val: 'By appointment', dim: false },
  { day: 'Saturday', val: 'By appointment', dim: false },
  { day: 'Sunday', val: 'Closed', dim: true },
];

export default function Contact() {
  return (
    <main>
      <section style={css('position:relative; background:radial-gradient(120% 80% at 50% 0%, rgba(46,230,166,0.10), rgba(11,13,12,0) 55%), #0B0D0C; overflow:hidden;')}>
        <div style={css('position:absolute; inset:0; background-image:radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size:22px 22px; opacity:0.5;')} />
        <div style={css('position:relative; max-width:900px; margin:0 auto; padding:clamp(44px,6vw,76px) clamp(20px,5vw,48px); text-align:center;')}>
          <span style={css(eyebrow)}>Contact</span>
          <h1 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(38px,6vw,62px); line-height:1.04; letter-spacing:-0.025em; margin:16px 0 0;")}>Get in touch with Kyree.</h1>
          <p style={css('font-size:clamp(16px,2.2vw,18px); line-height:1.6; color:#AEB7B2; max-width:480px; margin:18px auto 0;')}>Text or call for the fastest reply, or send your details for a free quote.</p>
        </div>
      </section>

      <section style={css('max-width:1100px; margin:0 auto; padding:clamp(20px,3vw,40px) clamp(20px,5vw,48px) clamp(48px,7vw,80px); display:grid; grid-template-columns:repeat(auto-fit,minmax(290px,1fr)); gap:clamp(20px,3vw,28px); align-items:start;')}>
        {/* contact methods */}
        <div style={css('display:flex; flex-direction:column; gap:16px;')}>
          <a href="tel:+14247285089" className="contact-card" style={css('display:flex; gap:15px; align-items:center; text-decoration:none; background:#101513; border:1px solid rgba(255,255,255,0.09); border-radius:16px; padding:22px;')}>
            <span style={css('width:48px; height:48px; flex-shrink:0; border-radius:13px; background:rgba(46,230,166,0.12); color:#2EE6A6; display:flex; align-items:center; justify-content:center;')}>
              <svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </span>
            <div><span style={css('font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:#76817B; display:block;')}>Call or text</span><span style={css('font-weight:700; font-size:19px; color:#F6F8F6;')}>(424) 728-5089</span></div>
          </a>
          <a href="mailto:kyriwindowtints.booking@gmail.com" className="contact-card" style={css('display:flex; gap:15px; align-items:center; text-decoration:none; background:#101513; border:1px solid rgba(255,255,255,0.09); border-radius:16px; padding:22px;')}>
            <span style={css('width:48px; height:48px; flex-shrink:0; border-radius:13px; background:rgba(46,230,166,0.12); color:#2EE6A6; display:flex; align-items:center; justify-content:center;')}>
              <svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
            </span>
            <div style={css('min-width:0;')}><span style={css('font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:#76817B; display:block;')}>Email</span><span style={css('font-weight:600; font-size:15px; color:#F6F8F6; word-break:break-all;')}>kyriwindowtints.booking@gmail.com</span></div>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="contact-card" style={css('display:flex; gap:15px; align-items:center; text-decoration:none; background:#101513; border:1px solid rgba(255,255,255,0.09); border-radius:16px; padding:22px;')}>
            <span style={css('width:48px; height:48px; flex-shrink:0; border-radius:13px; background:rgba(46,230,166,0.12); color:#2EE6A6; display:flex; align-items:center; justify-content:center;')}>
              <svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </span>
            <div><span style={css('font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:#76817B; display:block;')}>Social</span><span style={css('font-weight:600; font-size:16px; color:#F6F8F6;')}>Facebook — see latest work</span></div>
          </a>
          <Link to="/quote" className="btn-primary" style={css('display:flex; gap:8px; align-items:center; justify-content:center; text-decoration:none; background:#2EE6A6; color:#06120D; border-radius:14px; padding:17px; font-weight:700; font-size:16px;')}>Get a free quote <ArrowRight size={17} /></Link>
        </div>

        {/* hours + area */}
        <div style={css('display:flex; flex-direction:column; gap:20px;')}>
          <div style={css('background:#101513; border:1px solid rgba(255,255,255,0.09); border-radius:16px; padding:24px;')}>
            <div style={css('display:flex; align-items:center; gap:10px; margin-bottom:16px;')}>
              <span style={css('color:#2EE6A6;')}><svg width="20" height="20" viewBox="0 0 24 24" {...svgBase}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg></span>
              <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:21px; margin:0;")}>Hours</h2>
            </div>
            <div style={css('display:flex; flex-direction:column; gap:10px;')}>
              {HOURS.map((h) => (
                <div key={h.day} style={css('display:flex; justify-content:space-between; font-size:14.5px;')}>
                  <span style={css('color:#C7CFCB;')}>{h.day}</span>
                  <span style={css(`font-weight:600; color:${h.dim ? '#8C958F' : '#F6F8F6'};`)}>{h.val}</span>
                </div>
              ))}
            </div>
            <p style={css('font-size:12.5px; color:#5E6862; margin:16px 0 0; border-top:1px solid rgba(255,255,255,0.07); padding-top:14px;')}>Text or call to schedule a drop-off. Confirm your exact hours and we'll update this.</p>
          </div>
          <div style={css('background:#101513; border:1px solid rgba(255,255,255,0.09); border-radius:16px; padding:24px;')}>
            <div style={css('display:flex; align-items:center; gap:10px; margin-bottom:14px;')}>
              <span style={css('color:#2EE6A6;')}><svg width="20" height="20" viewBox="0 0 24 24" {...svgBase}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
              <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:21px; margin:0;")}>Service area</h2>
            </div>
            <p style={css('font-size:14.5px; line-height:1.7; color:#AEB7B2; margin:0;')}>Based in <span style={css('color:#F6F8F6; font-weight:600;')}>Lafayette, Indiana</span> — serving West Lafayette, Battle Ground, Dayton, Monticello, Delphi, and the rest of Tippecanoe County.</p>
          </div>
        </div>

        {/* map placeholder */}
        <div style={css('position:relative; border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,0.09); min-height:340px; background:#0E1513;')}>
          <div style={css('position:absolute; inset:0; background-image:linear-gradient(rgba(46,230,166,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,230,166,0.06) 1px, transparent 1px); background-size:40px 40px;')} />
          <div style={css('position:absolute; inset:0; background:radial-gradient(60% 50% at 50% 45%, rgba(46,230,166,0.12), transparent 70%);')} />
          <svg viewBox="0 0 300 200" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}>
            <path d="M0,120 C60,90 90,140 150,110 S250,80 300,120" fill="none" stroke="#2EE6A6" strokeWidth="2" />
            <path d="M40,0 L80,200" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <path d="M180,0 L220,200" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          </svg>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#2EE6A6', filter: 'drop-shadow(0 0 10px rgba(46,230,166,0.6))' }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="#2EE6A6" stroke="#06120D" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" fill="#06120D" /></svg>
            </span>
          </div>
          <div style={css('position:absolute; left:0; right:0; bottom:0; padding:18px; background:linear-gradient(0deg, rgba(8,12,10,0.95), transparent); text-align:center;')}>
            <span style={css('font-weight:600; font-size:15px; color:#F6F8F6;')}>Lafayette, Indiana</span>
            <span style={css('display:block; font-size:12.5px; color:#8C958F; margin-top:3px;')}>Add a Google Maps embed or pin here</span>
          </div>
        </div>
      </section>
    </main>
  );
}
