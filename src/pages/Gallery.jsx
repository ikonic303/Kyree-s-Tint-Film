import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '../lib/css';

const eyebrow = 'color:#2EE6A6; font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;';
const CATS = ['All', 'Cars', 'Trucks & SUVs', 'PPF', 'Home & Business'];

const ITEMS = [
  { cat: 'Cars', tag: 'Sedan', title: 'Ceramic tint · 20%', meta: 'Full vehicle', bg: 'linear-gradient(150deg,#10201b,#0a1714)', glow: 0.14 },
  { cat: 'Trucks & SUVs', tag: 'Truck', title: 'IR tint · 35%', meta: 'Cab + rear glass', bg: 'linear-gradient(150deg,#141d22,#0b1316)', glow: 0.12 },
  { cat: 'Trucks & SUVs', tag: 'SUV', title: 'Limo rear · 5%', meta: 'Privacy package', bg: 'linear-gradient(150deg,#0c1512,#070f0d)', glow: 0.16 },
  { cat: 'Cars', tag: 'Coupe', title: 'Ceramic · 35%', meta: 'Front + sides', bg: 'linear-gradient(150deg,#11201c,#0a1512)', glow: 0.13 },
  { cat: 'PPF', tag: 'PPF', title: 'Clear bra · front end', meta: 'Rock-chip protection', bg: 'linear-gradient(150deg,#16201c,#0c1714)', glow: 0.10 },
  { cat: 'Cars', tag: 'Tesla', title: 'Full ceramic package', meta: 'Max heat rejection', bg: 'linear-gradient(150deg,#0d1714,#06100d)', glow: 0.15 },
  { cat: 'Home & Business', tag: 'Home', title: 'Living-room glass', meta: 'Heat + glare control', bg: 'linear-gradient(150deg,#16201c,#0c1714)', glow: 0.12 },
  { cat: 'Home & Business', tag: 'Storefront', title: 'Commercial flat-glass', meta: 'Privacy + security', bg: 'linear-gradient(150deg,#101b1f,#0a1316)', glow: 0.11 },
  { cat: 'Trucks & SUVs', tag: 'Truck', title: 'Windshield + visor strip', meta: 'AS-1 line', bg: 'linear-gradient(150deg,#0e1a16,#070f0d)', glow: 0.13 },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? ITEMS : ITEMS.filter((i) => i.cat === filter);

  return (
    <main>
      <section style={css('position:relative; background:radial-gradient(120% 80% at 50% 0%, rgba(46,230,166,0.10), rgba(11,13,12,0) 55%), #0B0D0C; overflow:hidden;')}>
        <div style={css('position:absolute; inset:0; background-image:radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size:22px 22px; opacity:0.5;')} />
        <div style={css('position:relative; max-width:1100px; margin:0 auto; padding:clamp(44px,6vw,76px) clamp(20px,5vw,48px);')}>
          <div style={css('text-align:center; max-width:680px; margin:0 auto;')}>
            <span style={css(eyebrow)}>Gallery</span>
            <h1 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(38px,6vw,62px); line-height:1.04; letter-spacing:-0.025em; margin:16px 0 0;")}>Recent work.</h1>
            <p style={css('font-size:clamp(16px,2.2vw,18px); line-height:1.6; color:#AEB7B2; max-width:520px; margin:18px auto 0;')}>A look at recent installs across Greater Lafayette. Real photos drop in here from the Kyree's Tint &amp; Film Facebook page.</p>
          </div>
        </div>
      </section>

      <section style={css('max-width:1200px; margin:0 auto; padding:clamp(40px,6vw,72px) clamp(20px,5vw,48px);')}>
        <div style={css('display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:34px;')}>
          {CATS.map((c) => {
            const active = filter === c;
            return (
              <button key={c} onClick={() => setFilter(c)} style={css(`cursor:pointer; font-family:'Inter',sans-serif; font-weight:600; font-size:13.5px; padding:9px 16px; border-radius:999px; transition:all 160ms; border:1px solid ${active ? '#2EE6A6' : 'rgba(255,255,255,0.14)'}; background:${active ? 'rgba(46,230,166,0.14)' : 'transparent'}; color:${active ? '#2EE6A6' : '#C7CFCB'};`)}>{c}</button>
            );
          })}
        </div>

        <div style={css('display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:16px;')}>
          {items.map((g, i) => (
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
        <p style={css('text-align:center; font-size:12.5px; color:#5E6862; margin-top:24px;')}>Placeholder panels — swap in real before/after photos. Tip: keep file names like <span style={css('color:#8C958F;')}>sedan-ceramic-20.jpg</span> so they're easy to map in.</p>
      </section>

      <section style={css('position:relative; background:radial-gradient(120% 100% at 50% 0%, rgba(46,230,166,0.13), rgba(11,13,12,0) 60%), #0B0D0C; border-top:1px solid rgba(255,255,255,0.06); overflow:hidden;')}>
        <div style={css('position:relative; max-width:760px; margin:0 auto; padding:clamp(52px,8vw,90px) clamp(20px,5vw,48px); text-align:center;')}>
          <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(30px,4.6vw,48px); line-height:1.06; letter-spacing:-0.02em; margin:0;")}>Want your ride in the gallery?</h2>
          <p style={css('font-size:17px; line-height:1.6; color:#AEB7B2; max-width:460px; margin:18px auto 0;')}>Book your install and we'll make it look this good.</p>
          <div style={css('display:flex; flex-wrap:wrap; justify-content:center; gap:14px; margin-top:30px;')}>
            <Link to="/quote" className="btn-primary" style={css('background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:16px; padding:15px 28px; border-radius:11px;')}>Get my free quote</Link>
            <a href="tel:+14247285089" className="btn-ghost" style={css('border:1px solid rgba(255,255,255,0.2); color:#F6F8F6; text-decoration:none; font-weight:600; font-size:16px; padding:15px 26px; border-radius:11px;')}>Call (424) 728-5089</a>
          </div>
        </div>
      </section>
    </main>
  );
}
