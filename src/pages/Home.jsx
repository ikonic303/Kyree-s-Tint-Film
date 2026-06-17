import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '../lib/css';
import { ArrowRight, Phone, Shield, Check, ShieldCheck, Sun, Thermometer, Wrench } from '../components/Icons';

/* --- icon set for the service cards --- */
const svgBase = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const CarIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><path d="M5 17h14M6 11l1.5-4.5A2 2 0 0 1 9.4 5h5.2a2 2 0 0 1 1.9 1.5L18 11" /><path d="M5 11h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a2 2 0 0 1 2-2z" /><circle cx="7.5" cy="14.5" r="1" /><circle cx="16.5" cy="14.5" r="1" /></svg>);
const FlameIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" /></svg>);
const ScrapeIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><path d="m7 21-4.3-4.3a1 1 0 0 1 0-1.4L13 5l6 6-9.9 9.9a1 1 0 0 1-.7.3H7z" /><path d="M22 21H7M5 11l6 6" /></svg>);
const ShieldIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const DropIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-5 5-9 5-9z" /></svg>);
const HomeIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg>);

const SERVICES = [
  { icon: <CarIcon />, title: 'Automotive window tint', blurb: 'Cars, trucks & SUVs tinted to your shade — even, clean, bubble-free.' },
  { icon: <FlameIcon />, title: 'Ceramic & IR tint', blurb: 'Top-tier infrared-rejection film that blocks heat without going pitch black.' },
  { icon: <ScrapeIcon />, title: 'Tint removal', blurb: 'Old, purple, or bubbling film stripped clean — then re-done right.' },
  { icon: <ShieldIcon />, title: 'Paint protection film', blurb: 'Clear bra that guards your paint from rock chips, bugs, and scratches.' },
  { icon: <DropIcon />, title: 'Ceramic coating', blurb: 'A slick, hydrophobic layer that locks in gloss and makes washing easy.' },
  { icon: <HomeIcon />, title: 'Residential & commercial', blurb: 'Flat-glass film for homes and storefronts — cooler rooms, less glare.' },
];

const TRUST = [
  { icon: <ShieldCheck />, title: 'Lifetime warranty', sub: 'Film & workmanship' },
  { icon: <Sun />, title: '99% UV blocked', sub: 'Skin & interior protection' },
  { icon: <Thermometer />, title: 'IR heat rejection', sub: 'Premium ceramic film' },
  { icon: <Wrench />, title: 'Owner-installed', sub: 'Hand-cut by Kyree' },
];

const whyBase = { fill: 'none', stroke: '#2EE6A6', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const WHY = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" {...whyBase}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" /></svg>, title: 'Hand-cut precision', sub: 'Every panel cut and fit by hand for tight, even edges.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" {...whyBase}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>, title: 'Lifetime warranty', sub: 'Backed against peel, bubble, and fade for as long as you own it.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" {...whyBase}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>, title: 'Premium ceramic film', sub: 'Real IR-rejection tech — not bargain dyed film.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" {...whyBase}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>, title: 'Fast turnaround', sub: 'Most cars done same day. Drop off, we handle it.' },
];

const HOME_GALLERY = [
  { tag: 'Sedan', title: 'Ceramic tint · 20%', meta: 'Full vehicle', bg: 'linear-gradient(150deg,#10201b,#0a1714)', glow: 0.14 },
  { tag: 'Truck', title: 'IR tint · 35%', meta: 'Cab + rear glass', bg: 'linear-gradient(150deg,#141d22,#0b1316)', glow: 0.12 },
  { tag: 'SUV', title: 'Limo rear · 5%', meta: 'Privacy package', bg: 'linear-gradient(150deg,#0c1512,#070f0d)', glow: 0.16 },
  { tag: 'Home', title: 'Living-room glass', meta: 'Heat + glare control', bg: 'linear-gradient(150deg,#16201c,#0c1714)', glow: 0.10 },
];

const REVIEWS = [
  { initial: 'M', bg: '#1F8A57', quote: '"Kyree hooked my Charger up — even tint, no bubbles, matched the factory rear glass perfectly. Looks OEM."', name: 'Marcus R.', town: 'Lafayette, IN' },
  { initial: 'D', bg: '#2EE6A6', quote: '"Got ceramic on our SUV and the heat difference is night and day. Booking was easy and right on quote."', name: 'Danielle P.', town: 'West Lafayette, IN' },
  { initial: 'T', bg: '#6DCB9A', quote: '"Stripped the old purple tint off my truck and redid it same day. Clean shop, fair price, great work."', name: 'Tyler B.', town: 'Battle Ground, IN' },
];

const STEPS = [
  { n: '1', title: 'Get a quote', body: 'Send your vehicle or glass details and the shade you want. We quote fast — usually same day.' },
  { n: '2', title: 'Book your slot', body: 'Pick a day that works. Most installs wrap in a few hours, so plan to drop off and relax.' },
  { n: '3', title: 'Drop off & enjoy', body: 'We install, inspect every edge, and hand it back ready to roll — cooler, darker, protected.' },
];

const LAW = [
  { big: '30%+', text: 'Front side windows must let in more than 30% of light (VLT).' },
  { big: '30%+', text: 'Back side & rear windows also need more than 30% VLT.' },
  { big: 'AS-1', text: 'Windshield: a non-reflective strip is allowed down to the AS-1 line.' },
];

const FAQS = [
  { q: 'How long does window tint last?', a: 'Quality ceramic and IR films installed correctly last for years — typically the life of the vehicle. Cheaper dyed films fade and turn purple over time, which is exactly what we avoid. Your install is backed by a lifetime warranty against peeling, bubbling, and fading.' },
  { q: "What's the difference between ceramic and regular tint?", a: 'Regular dyed film mostly darkens the glass. Ceramic and IR film use a nano-ceramic layer that rejects infrared heat and 99% of UV without relying on a dark shade or metal — so you get a cooler cabin, no signal interference, and a clearer view, even at lighter shades.' },
  { q: 'What are the legal tint limits in Indiana?', a: "Indiana requires more than 30% VLT on the front side windows, back side windows, and rear window. A non-reflective strip is allowed on the windshield down to the AS-1 line. Medical exemptions exist. We'll always confirm a street-legal setup with you before installing." },
  { q: 'Does tint actually help with heat?', a: 'Yes — especially ceramic and IR film. By rejecting infrared, it noticeably lowers cabin temperature and reduces how hard your A/C has to work. It also blocks 99% of UV, protecting your skin and keeping your interior from cracking and fading.' },
  { q: 'Is there a warranty?', a: 'Every install comes with a lifetime warranty covering the film and the workmanship — no peeling, no bubbling, no purple fade. If anything goes wrong with the film, we make it right.' },
  { q: 'How long does an install take?', a: 'Most full-vehicle tints are done the same day, usually within a few hours. Larger jobs, PPF, or ceramic coating may take longer — we give you a clear timeline when you book.' },
  { q: 'Can you remove old tint?', a: 'Absolutely. We strip old, bubbling, or purple film cleanly — including the adhesive — and can re-tint the same day with fresh premium film.' },
];

const eyebrow = 'color:#2EE6A6; font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;';
const h2style = "font-family:'Fraunces',serif; font-weight:600; font-size:clamp(30px,4.4vw,46px); line-height:1.08; letter-spacing:-0.02em; margin:14px 0 0;";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <main>
      {/* HERO */}
      <section style={css('position:relative; background:radial-gradient(120% 80% at 78% 0%, rgba(46,230,166,0.10) 0%, rgba(11,13,12,0) 55%), #0B0D0C; overflow:hidden;')}>
        <div style={css('position:absolute; inset:0; background-image:radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size:22px 22px; opacity:0.5; pointer-events:none;')} />
        <div style={css('position:relative; max-width:1200px; margin:0 auto; padding:clamp(48px,7vw,90px) clamp(20px,5vw,48px); display:grid; grid-template-columns:repeat(auto-fit,minmax(330px,1fr)); gap:clamp(36px,5vw,60px); align-items:center;')}>
          <div>
            <span style={css('display:inline-flex; align-items:center; gap:8px; ' + eyebrow)}>
              <span style={css('width:7px; height:7px; border-radius:50%; background:#2EE6A6; box-shadow:0 0 10px #2EE6A6;')} />
              Window tint &amp; film · Lafayette, IN
            </span>
            <h1 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(42px,6.4vw,74px); line-height:1.02; letter-spacing:-0.025em; margin:20px 0 0; color:#F6F8F6;")}>
              Premium window tint,<br />done right in <span style={css('color:#2EE6A6; font-style:italic;')}>Lafayette.</span>
            </h1>
            <p style={css('font-size:clamp(16px,2.2vw,19px); line-height:1.65; color:#AEB7B2; max-width:520px; margin:22px 0 0;')}>
              Ceramic and IR film that kills the heat, blocks 99% of UV, and looks factory-clean — installed by hand and backed for life. Cars, homes, and storefronts across Greater Lafayette.
            </p>
            <div style={css('display:flex; flex-wrap:wrap; gap:14px; margin-top:32px;')}>
              <Link to="/quote" className="btn-primary" style={css('display:inline-flex; align-items:center; gap:9px; background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:16px; padding:15px 26px; border-radius:11px; box-shadow:0 0 28px rgba(46,230,166,0.28);')}>
                Get my free quote <ArrowRight />
              </Link>
              <a href="tel:+14247285089" className="btn-ghost" style={css('display:inline-flex; align-items:center; gap:9px; background:transparent; border:1px solid rgba(255,255,255,0.2); color:#F6F8F6; text-decoration:none; font-weight:600; font-size:16px; padding:15px 24px; border-radius:11px;')}>
                <Phone /> (424) 728-5089
              </a>
            </div>
            <div style={css('display:flex; flex-wrap:wrap; align-items:center; gap:20px; margin-top:34px;')}>
              <span style={css('display:inline-flex; align-items:center; gap:8px; color:#AEB7B2; font-size:14px;')}><Shield /> Lifetime warranty</span>
              <span style={css('width:1px; height:18px; background:rgba(255,255,255,0.14);')} />
              <span style={css('display:inline-flex; align-items:center; gap:8px; color:#AEB7B2; font-size:14px;')}><Check size={17} sw={2} /> Owner-installed</span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div style={css('position:relative;')}>
            <div style={css('position:relative; border-radius:20px; overflow:hidden; border:1px solid rgba(255,255,255,0.1); aspect-ratio:4/3; background:linear-gradient(135deg,#0c1714 0%,#0a1411 50%,#06100d 100%);')}>
              <div style={css('position:absolute; inset:0; background:radial-gradient(90% 60% at 30% 20%, rgba(46,230,166,0.18), transparent 60%);')} />
              <div style={css('position:absolute; left:0; right:0; top:38%; height:34%; background:linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.4)); transform:skewY(-6deg);')} />
              <div style={css('position:absolute; inset:0; background:linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.07) 48%, transparent 55%);')} />
              <span style={css('position:absolute; bottom:14px; left:16px; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:#2EE6A6; font-weight:600;')}>Ceramic tint · photo placeholder</span>
            </div>
            <div style={css('position:absolute; bottom:-18px; right:18px; background:rgba(14,19,17,0.94); border:1px solid rgba(46,230,166,0.25); border-radius:13px; padding:13px 17px; display:flex; align-items:center; gap:12px;')}>
              <span style={css("font-family:'Fraunces',serif; font-weight:600; font-size:30px; color:#2EE6A6; line-height:1;")}>99%</span>
              <span style={css('font-size:12.5px; line-height:1.35; color:#C7CFCB;')}>UV &amp; infrared<br />heat rejection</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={css('background:#0E1311; border-top:1px solid rgba(255,255,255,0.06); border-bottom:1px solid rgba(255,255,255,0.06);')}>
        <div style={css('max-width:1200px; margin:0 auto; padding:26px clamp(20px,5vw,48px); display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px;')}>
          {TRUST.map((t, i) => (
            <div key={i} style={css('display:flex; align-items:center; gap:13px; color:#2EE6A6;')}>
              {t.icon}
              <div style={css('display:flex; flex-direction:column; line-height:1.25; color:#F6F8F6;')}>
                <span style={css('font-weight:700; font-size:16px;')}>{t.title}</span>
                <span style={css('font-size:13px; color:#8C958F;')}>{t.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={css('background:#0E1311; border-top:1px solid rgba(255,255,255,0.06);')}>
        <div style={css('max-width:1200px; margin:0 auto; padding:clamp(56px,8vw,96px) clamp(20px,5vw,48px);')}>
          <div style={css('display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:18px; margin-bottom:38px;')}>
            <div style={css('max-width:620px;')}>
              <span style={css(eyebrow)}>What we do</span>
              <h2 style={css(h2style)}>Film for everything you drive, live, and work in.</h2>
            </div>
            <Link to="/services" className="accent-link" style={css('color:#2EE6A6; text-decoration:none; font-weight:600; font-size:15px; display:inline-flex; align-items:center; gap:7px; white-space:nowrap;')}>All services <ArrowRight size={16} /></Link>
          </div>
          <div style={css('display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:18px;')}>
            {SERVICES.map((sv, i) => (
              <Link key={i} to="/services" className="svc-card" style={css('text-decoration:none; display:flex; flex-direction:column; background:#121614; border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:26px;')}>
                <span style={css('width:46px; height:46px; border-radius:12px; background:rgba(46,230,166,0.12); color:#2EE6A6; display:flex; align-items:center; justify-content:center;')}>{sv.icon}</span>
                <h3 style={css('font-weight:600; font-size:19px; margin:18px 0 0; color:#F6F8F6;')}>{sv.title}</h3>
                <p style={css('font-size:14.5px; line-height:1.55; color:#9BA49E; margin:9px 0 0; flex:1;')}>{sv.blurb}</p>
                <span style={css('color:#2EE6A6; font-size:14px; font-weight:600; margin-top:18px;')}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={css('max-width:1200px; margin:0 auto; padding:clamp(56px,8vw,96px) clamp(20px,5vw,48px); display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:clamp(36px,5vw,60px); align-items:center;')}>
        <div>
          <span style={css(eyebrow)}>Why Kyree's</span>
          <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(30px,4.4vw,46px); line-height:1.08; letter-spacing:-0.02em; margin:14px 0 16px;")}>A clean install, the first time.</h2>
          <p style={css('font-size:16px; line-height:1.65; color:#AEB7B2; max-width:480px;')}>No bubbles, no purple fade, no gaps at the edges. Every panel is hand-cut and squeegeed by Kyree — not rushed through a chain shop. You drop off, we dial it in, you drive away looking factory-fresh.</p>
          <Link to="/quote" className="btn-primary" style={css('display:inline-flex; align-items:center; gap:9px; margin-top:26px; background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:15px; padding:13px 22px; border-radius:10px;')}>Get a free quote <ArrowRight size={16} /></Link>
        </div>
        <div style={css('display:grid; grid-template-columns:1fr 1fr; gap:14px;')}>
          {WHY.map((w, i) => (
            <div key={i} style={css('background:#121614; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:22px;')}>
              {w.icon}
              <h4 style={css('font-weight:600; font-size:16px; margin:14px 0 6px; color:#F6F8F6;')}>{w.title}</h4>
              <p style={css('font-size:13.5px; line-height:1.5; color:#8C958F; margin:0;')}>{w.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={css('background:#0E1311; border-top:1px solid rgba(255,255,255,0.06);')}>
        <div style={css('max-width:1200px; margin:0 auto; padding:clamp(56px,8vw,96px) clamp(20px,5vw,48px);')}>
          <div style={css('display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:18px; margin-bottom:34px;')}>
            <div>
              <span style={css(eyebrow)}>Recent work</span>
              <h2 style={css(h2style)}>Before &amp; after.</h2>
            </div>
            <Link to="/gallery" className="accent-link" style={css('color:#2EE6A6; text-decoration:none; font-weight:600; font-size:15px; display:inline-flex; align-items:center; gap:7px;')}>Full gallery <ArrowRight size={16} /></Link>
          </div>
          <div style={css('display:grid; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); gap:16px;')}>
            {HOME_GALLERY.map((g, i) => (
              <div key={i} style={css('position:relative; border-radius:15px; overflow:hidden; border:1px solid rgba(255,255,255,0.08); aspect-ratio:4/5;')}>
                <div style={css('position:absolute; inset:0; background:' + g.bg + ';')} />
                <div style={css(`position:absolute; inset:0; background:radial-gradient(80% 50% at 50% 0%, rgba(46,230,166,${g.glow}), transparent 60%);`)} />
                <div style={css('position:absolute; left:0; right:0; top:40%; height:30%; background:linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.3)); transform:skewY(-7deg);')} />
                <span style={css('position:absolute; top:13px; left:13px; background:rgba(8,12,10,0.7); color:#2EE6A6; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; padding:5px 10px; border-radius:6px; border:1px solid rgba(46,230,166,0.3);')}>{g.tag}</span>
                <div style={css('position:absolute; left:0; right:0; bottom:0; padding:16px; background:linear-gradient(0deg, rgba(6,9,8,0.92), transparent);')}>
                  <span style={css('font-weight:600; font-size:15px; color:#F6F8F6;')}>{g.title}</span>
                  <span style={css('display:block; font-size:12.5px; color:#9BA49E; margin-top:3px;')}>{g.meta}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={css('text-align:center; font-size:12.5px; color:#5E6862; margin-top:22px;')}>Placeholder panels — swap in real photos from the Kyree's Tint &amp; Film Facebook page.</p>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={css('max-width:1200px; margin:0 auto; padding:clamp(56px,8vw,96px) clamp(20px,5vw,48px);')}>
        <div style={css('text-align:center; max-width:600px; margin:0 auto 40px;')}>
          <span style={css(eyebrow)}>Reviews</span>
          <h2 style={css(h2style)}>Lafayette drivers. Lafayette homeowners.</h2>
        </div>
        <div style={css('display:grid; grid-template-columns:repeat(auto-fill,minmax(290px,1fr)); gap:16px;')}>
          {REVIEWS.map((r, i) => (
            <div key={i} style={css('background:#121614; border:1px solid rgba(255,255,255,0.08); border-radius:15px; padding:26px; display:flex; flex-direction:column;')}>
              <span style={css('color:#2EE6A6; letter-spacing:2px; font-size:15px;')}>★★★★★</span>
              <p style={css('font-size:15.5px; line-height:1.6; color:#D5DAD7; margin:14px 0 18px; flex:1;')}>{r.quote}</p>
              <div style={css('display:flex; align-items:center; gap:12px;')}>
                <span style={css(`width:40px; height:40px; border-radius:50%; background:${r.bg}; color:#06120D; display:flex; align-items:center; justify-content:center; font-weight:700;`)}>{r.initial}</span>
                <div style={css('line-height:1.3;')}>
                  <span style={css('font-weight:600; font-size:14px; color:#F6F8F6;')}>{r.name}</span>
                  <span style={css('display:block; font-size:12.5px; color:#8C958F;')}>{r.town}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={css('text-align:center; font-size:12.5px; color:#5E6862; margin-top:22px;')}>Sample layout — swap in real reviews from Facebook or Google.</p>
      </section>

      {/* HOW IT WORKS */}
      <section style={css('background:#0E1311; border-top:1px solid rgba(255,255,255,0.06);')}>
        <div style={css('max-width:1200px; margin:0 auto; padding:clamp(56px,8vw,96px) clamp(20px,5vw,48px);')}>
          <div style={css('text-align:center; max-width:600px; margin:0 auto 44px;')}>
            <span style={css(eyebrow)}>How it works</span>
            <h2 style={css(h2style)}>Three steps to cooler glass.</h2>
          </div>
          <div style={css('display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:18px;')}>
            {STEPS.map((s) => (
              <div key={s.n} style={css('background:#121614; border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:30px;')}>
                <span style={css("font-family:'Fraunces',serif; font-size:18px; color:#06120D; background:#2EE6A6; width:38px; height:38px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:700;")}>{s.n}</span>
                <h3 style={css('font-weight:600; font-size:19px; margin:18px 0 8px; color:#F6F8F6;')}>{s.title}</h3>
                <p style={css('font-size:14.5px; line-height:1.6; color:#9BA49E; margin:0;')}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TINT LAW + FAQ */}
      <section style={css('max-width:1100px; margin:0 auto; padding:clamp(56px,8vw,96px) clamp(20px,5vw,48px);')}>
        <div style={css('background:#121614; border:1px solid rgba(46,230,166,0.22); border-radius:18px; padding:clamp(24px,4vw,38px); margin-bottom:46px;')}>
          <span style={css(eyebrow)}>Indiana tint law</span>
          <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(24px,3.4vw,34px); line-height:1.12; letter-spacing:-0.02em; margin:12px 0 18px;")}>Know the legal limits before you go dark.</h2>
          <div style={css('display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px;')}>
            {LAW.map((l, i) => (
              <div key={i} style={css('border-left:2px solid #2EE6A6; padding-left:14px;')}>
                <span style={css("display:block; font-family:'Fraunces',serif; font-size:26px; color:#2EE6A6; font-weight:600;")}>{l.big}</span>
                <span style={css('font-size:13.5px; color:#AEB7B2;')}>{l.text}</span>
              </div>
            ))}
          </div>
          <p style={css('font-size:12.5px; color:#6E7872; margin:18px 0 0;')}>General information, not legal advice. Indiana statutes can change and medical exemptions exist — we'll confirm a street-legal install with you before we start.</p>
        </div>

        <div style={css('text-align:center; max-width:560px; margin:0 auto 34px;')}>
          <span style={css(eyebrow)}>FAQ</span>
          <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(30px,4.4vw,44px); line-height:1.1; letter-spacing:-0.02em; margin:14px 0 0;")}>Common tint questions.</h2>
        </div>
        <div style={css('display:flex; flex-direction:column; gap:12px;')}>
          {FAQS.map((f, i) => {
            const open = faqOpen === i;
            return (
              <div key={i} style={css('background:#121614; border:1px solid rgba(255,255,255,0.08); border-radius:13px; overflow:hidden;')}>
                <button onClick={() => setFaqOpen(open ? -1 : i)} style={css('width:100%; background:transparent; border:none; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:16px; padding:20px 22px; text-align:left;')}>
                  <span style={css('font-weight:600; font-size:16.5px; color:#F6F8F6;')}>{f.q}</span>
                  <span style={{ flexShrink: 0, fontSize: '26px', color: '#2EE6A6', lineHeight: 1, transition: 'transform 180ms', display: 'inline-block', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                </button>
                {open && <p style={css('font-size:15px; line-height:1.65; color:#AEB7B2; margin:0; padding:0 22px 22px;')}>{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={css('position:relative; background:radial-gradient(120% 100% at 50% 0%, rgba(46,230,166,0.14), rgba(11,13,12,0) 60%), #0B0D0C; border-top:1px solid rgba(255,255,255,0.06); overflow:hidden;')}>
        <div style={css('position:absolute; inset:0; background-image:radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size:22px 22px; opacity:0.5;')} />
        <div style={css('position:relative; max-width:900px; margin:0 auto; padding:clamp(56px,9vw,100px) clamp(20px,5vw,48px); text-align:center;')}>
          <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(34px,5.4vw,60px); line-height:1.04; letter-spacing:-0.025em; margin:0;")}>Ready to beat the heat?</h2>
          <p style={css('font-size:clamp(16px,2.2vw,19px); line-height:1.6; color:#AEB7B2; max-width:520px; margin:20px auto 0;')}>Get a free, no-pressure quote on tint, PPF, or ceramic coating — and we'll get your install on the calendar.</p>
          <div style={css('display:flex; flex-wrap:wrap; justify-content:center; gap:14px; margin-top:34px;')}>
            <Link to="/quote" className="btn-primary" style={css('display:inline-flex; align-items:center; gap:9px; background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:16px; padding:16px 28px; border-radius:11px; box-shadow:0 0 30px rgba(46,230,166,0.3);')}>Get my free quote <ArrowRight /></Link>
            <a href="tel:+14247285089" className="btn-ghost" style={css('display:inline-flex; align-items:center; gap:9px; background:transparent; border:1px solid rgba(255,255,255,0.2); color:#F6F8F6; text-decoration:none; font-weight:600; font-size:16px; padding:16px 26px; border-radius:11px;')}>Call (424) 728-5089</a>
          </div>
        </div>
      </section>
    </main>
  );
}
