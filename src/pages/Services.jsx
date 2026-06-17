import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '../lib/css';
import { ArrowRight } from '../components/Icons';

const eyebrow = 'color:#2EE6A6; font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;';
const svgBase = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

const CarIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" {...svgBase}><path d="M5 17h14M6 11l1.5-4.5A2 2 0 0 1 9.4 5h5.2a2 2 0 0 1 1.9 1.5L18 11" /><path d="M5 11h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a2 2 0 0 1 2-2z" /><circle cx="7.5" cy="14.5" r="1" /><circle cx="16.5" cy="14.5" r="1" /></svg>);
const FlameIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" {...svgBase}><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" /></svg>);
const ScrapeIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" {...svgBase}><path d="m7 21-4.3-4.3a1 1 0 0 1 0-1.4L13 5l6 6-9.9 9.9a1 1 0 0 1-.7.3H7z" /><path d="M22 21H7M5 11l6 6" /></svg>);
const ShieldIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" {...svgBase}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const DropIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" {...svgBase}><path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-5 5-9 5-9z" /></svg>);
const HomeIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" {...svgBase}><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg>);

const ROWS = [
  { id: 'auto', icon: <CarIcon />, title: 'Automotive window tint', body: 'Cars, trucks, and SUVs tinted to the exact shade you want — clean, even, and bubble-free. We help you pick a legal, great-looking VLT and dial it in for heat, glare, and privacy.', points: ['Full vehicle or individual windows', 'Heat, glare, and UV reduction', 'Indiana-legal shades available'], bg: 'linear-gradient(150deg,#10201b,#06100d)', glow: '70% 60% at 60% 20%, rgba(46,230,166,0.18)' },
  { id: 'ceramic', icon: <FlameIcon />, title: 'Ceramic & IR tint tiers', body: 'Our top tier. Nano-ceramic and infrared-rejection film blocks serious heat and 99% of UV without going pitch black or interfering with signal — so you stay cool and keep a clear view.', points: ['Maximum infrared heat rejection', 'No signal interference (non-metal)', 'Cooler cabin at lighter shades'], bg: 'linear-gradient(150deg,#0c1512,#070f0d)', glow: '70% 60% at 40% 20%, rgba(46,230,166,0.2)' },
  { id: 'removal', icon: <ScrapeIcon />, title: 'Tint removal', body: 'Old film bubbling, peeling, or turning purple? We strip it cleanly — film and adhesive — without scratching your glass or defroster lines, and we can re-tint the same day.', points: ['Safe on defroster lines', 'Full adhesive cleanup', 'Same-day re-tint available'], bg: 'linear-gradient(150deg,#141d22,#0b1316)', glow: '70% 60% at 60% 20%, rgba(46,230,166,0.14)' },
  { id: 'ppf', icon: <ShieldIcon />, title: 'Paint protection film (PPF)', body: 'A virtually invisible clear bra that shields your paint from rock chips, road debris, bug etching, and light scratches — ideal for the front end, mirrors, and high-impact areas.', points: ['Rock-chip & scratch protection', 'Self-healing options', 'Partial or full-front coverage'], bg: 'linear-gradient(150deg,#16201c,#0c1714)', glow: '70% 60% at 40% 20%, rgba(46,230,166,0.12)' },
  { id: 'coating', icon: <DropIcon />, title: 'Ceramic coating', body: 'A durable, hydrophobic layer bonded to your paint that locks in gloss, beads water, and makes washing far easier. Pairs perfectly with tint and PPF for a complete protection package.', points: ['Deep, long-lasting gloss', 'Hydrophobic, easy to wash', 'UV & contaminant resistance'], bg: 'linear-gradient(150deg,#0d1714,#06100d)', glow: '70% 60% at 60% 20%, rgba(46,230,166,0.16)' },
  { id: 'flatglass', icon: <HomeIcon />, title: 'Residential & commercial', body: 'The "and more." Flat-glass film for homes and storefronts cuts heat, glare, and fading, adds privacy and security, and lowers cooling costs — without changing the look of your space.', points: ['Heat & glare reduction', 'Privacy & security films', 'Homes, offices & storefronts'], bg: 'linear-gradient(150deg,#101b1f,#0a1316)', glow: '70% 60% at 40% 20%, rgba(46,230,166,0.13)' },
];

function PhotoPanel({ bg, glow, order }) {
  return (
    <div style={css(`position:relative; border-radius:16px; overflow:hidden; aspect-ratio:4/3; border:1px solid rgba(255,255,255,0.08); background:${bg}; order:${order};`)}>
      <div style={css(`position:absolute; inset:0; background:radial-gradient(${glow}, transparent 60%);`)} />
      <div style={css('position:absolute; left:0; right:0; top:42%; height:28%; background:linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.3)); transform:skewY(-6deg);')} />
      <span style={css('position:absolute; bottom:14px; left:16px; font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#2EE6A6; font-weight:600;')}>Photo placeholder</span>
    </div>
  );
}

function Copy({ row }) {
  return (
    <div>
      <span style={css('display:inline-flex; width:48px; height:48px; border-radius:13px; background:rgba(46,230,166,0.12); color:#2EE6A6; align-items:center; justify-content:center;')}>{row.icon}</span>
      <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(26px,3.4vw,34px); letter-spacing:-0.02em; margin:16px 0 12px;")}>{row.title}</h2>
      <p style={css('font-size:15.5px; line-height:1.65; color:#AEB7B2; margin:0 0 16px;')}>{row.body}</p>
      <ul style={css('list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:9px;')}>
        {row.points.map((p, i) => (
          <li key={i} style={css('display:flex; gap:9px; font-size:14.5px; color:#C7CFCB;')}><span style={css('color:#2EE6A6;')}>✓</span> {p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <main>
      <section style={css('position:relative; background:radial-gradient(120% 80% at 50% 0%, rgba(46,230,166,0.10), rgba(11,13,12,0) 55%), #0B0D0C; overflow:hidden;')}>
        <div style={css('position:absolute; inset:0; background-image:radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size:22px 22px; opacity:0.5;')} />
        <div style={css('position:relative; max-width:900px; margin:0 auto; padding:clamp(48px,7vw,84px) clamp(20px,5vw,48px); text-align:center;')}>
          <span style={css(eyebrow)}>Our services</span>
          <h1 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(38px,6vw,64px); line-height:1.04; letter-spacing:-0.025em; margin:16px 0 0;")}>Tint &amp; film, done to a higher standard.</h1>
          <p style={css('font-size:clamp(16px,2.2vw,19px); line-height:1.6; color:#AEB7B2; max-width:560px; margin:20px auto 0;')}>From ceramic auto tint to clear bra and flat-glass film — every job is hand-installed by Kyree and backed for life.</p>
        </div>
      </section>

      <section style={css('max-width:1100px; margin:0 auto; padding:clamp(40px,6vw,72px) clamp(20px,5vw,48px); display:flex; flex-direction:column; gap:clamp(28px,4vw,44px);')}>
        {ROWS.map((row, i) => {
          const reversed = i % 2 === 1;
          return (
            <div key={row.id} id={row.id} style={css('display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:clamp(24px,4vw,44px); align-items:center; background:#101513; border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:clamp(22px,3.5vw,38px);')}>
              {reversed ? <><PhotoPanel bg={row.bg} glow={row.glow} order={2} /><Copy row={row} /></> : <><Copy row={row} /><PhotoPanel bg={row.bg} glow={row.glow} order={0} /></>}
            </div>
          );
        })}
      </section>

      <section style={css('position:relative; background:radial-gradient(120% 100% at 50% 0%, rgba(46,230,166,0.13), rgba(11,13,12,0) 60%), #0B0D0C; border-top:1px solid rgba(255,255,255,0.06); overflow:hidden;')}>
        <div style={css('position:relative; max-width:760px; margin:0 auto; padding:clamp(52px,8vw,90px) clamp(20px,5vw,48px); text-align:center;')}>
          <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(30px,4.6vw,48px); line-height:1.06; letter-spacing:-0.02em; margin:0;")}>Not sure which film you need?</h2>
          <p style={css('font-size:17px; line-height:1.6; color:#AEB7B2; max-width:480px; margin:18px auto 0;')}>Tell us your vehicle or project and we'll recommend the right shade and film — free.</p>
          <div style={css('display:flex; flex-wrap:wrap; justify-content:center; gap:14px; margin-top:30px;')}>
            <Link to="/quote" className="btn-primary" style={css('display:inline-flex; align-items:center; gap:9px; background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:16px; padding:15px 28px; border-radius:11px;')}>Get my free quote</Link>
            <a href="tel:+14247285089" className="btn-ghost" style={css('display:inline-flex; align-items:center; gap:9px; background:transparent; border:1px solid rgba(255,255,255,0.2); color:#F6F8F6; text-decoration:none; font-weight:600; font-size:16px; padding:15px 26px; border-radius:11px;')}>Call (424) 728-5089</a>
          </div>
        </div>
      </section>
    </main>
  );
}
