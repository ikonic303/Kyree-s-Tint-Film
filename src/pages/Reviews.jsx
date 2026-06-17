import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '../lib/css';

const eyebrow = 'color:#2EE6A6; font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;';

const REVIEWS = [
  { name: 'Marcus R.', town: 'Lafayette, IN', initial: 'M', bg: '#1F8A57', quote: '"Kyree hooked my Charger up — even tint, no bubbles, and he matched the factory rear glass perfectly. Looks OEM."' },
  { name: 'Danielle P.', town: 'West Lafayette, IN', initial: 'D', bg: '#2EE6A6', quote: '"Got ceramic on our SUV and the heat difference is night and day. Booking was easy and he came in right on quote."' },
  { name: 'Tyler B.', town: 'Battle Ground, IN', initial: 'T', bg: '#6DCB9A', quote: '"Stripped the old purple tint off my truck and redid it same day. Clean shop, fair price, great work."' },
  { name: 'Alicia M.', town: 'Lafayette, IN', initial: 'A', bg: '#2AB072', quote: '"Did the windows in our living room and it cut the afternoon glare completely. Super professional install."' },
  { name: 'Jordan K.', town: 'Dayton, IN', initial: 'J', bg: '#1F8A57', quote: '"Clear bra on the front end looks invisible and already saved my paint from a rock on I-65. Worth every penny."' },
  { name: 'Sam V.', town: 'West Lafayette, IN', initial: 'S', bg: '#6DCB9A', quote: '"Quick turnaround, honest about what was legal, and the ceramic coating makes washing the car so easy now."' },
  { name: 'Brittany L.', town: 'Lafayette, IN', initial: 'B', bg: '#2EE6A6', quote: '"Texted a few photos, got a quote back same day, dropped off the next morning. Couldn\'t be easier."' },
  { name: 'Devon W.', town: 'Monticello, IN', initial: 'D', bg: '#2AB072', quote: '"Drove up from Monticello and it was 100% worth it. The tint lines are perfect — you can tell he cares."' },
  { name: 'Rachel T.', town: 'Lafayette, IN', initial: 'R', bg: '#1F8A57', quote: '"Storefront film for our shop looks clean and keeps the space cooler. Great communication start to finish."' },
];

export default function Reviews() {
  return (
    <main>
      <section style={css('position:relative; background:radial-gradient(120% 80% at 50% 0%, rgba(46,230,166,0.10), rgba(11,13,12,0) 55%), #0B0D0C; overflow:hidden;')}>
        <div style={css('position:absolute; inset:0; background-image:radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px); background-size:22px 22px; opacity:0.5;')} />
        <div style={css('position:relative; max-width:1000px; margin:0 auto; padding:clamp(44px,6vw,80px) clamp(20px,5vw,48px); text-align:center;')}>
          <span style={css(eyebrow)}>Reviews</span>
          <h1 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(38px,6vw,62px); line-height:1.04; letter-spacing:-0.025em; margin:16px 0 0;")}>What Lafayette is saying.</h1>
          <div style={css('display:inline-flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:clamp(20px,4vw,40px); margin-top:30px; background:#101513; border:1px solid rgba(255,255,255,0.09); border-radius:16px; padding:22px clamp(24px,4vw,40px);')}>
            <div style={css('text-align:center;')}>
              <span style={css("font-family:'Fraunces',serif; font-weight:600; font-size:44px; color:#2EE6A6; line-height:1;")}>5.0</span>
              <div style={css('color:#2EE6A6; letter-spacing:3px; font-size:16px; margin-top:6px;')}>★★★★★</div>
            </div>
            <span style={css('width:1px; height:48px; background:rgba(255,255,255,0.12);')} />
            <div style={css('text-align:left;')}>
              <span style={css('font-weight:700; font-size:17px; display:block;')}>Loved by local drivers</span>
              <span style={css('font-size:14px; color:#8C958F;')}>Tap a card to read more on Facebook &amp; Google.</span>
            </div>
          </div>
          <p style={css('font-size:12.5px; color:#5E6862; margin:18px 0 0;')}>Sample reviews shown — swap in your real Facebook &amp; Google reviews.</p>
        </div>
      </section>

      <section style={css('max-width:1100px; margin:0 auto; padding:clamp(36px,5vw,64px) clamp(20px,5vw,48px);')}>
        <div className="masonry">
          {REVIEWS.map((r, i) => (
            <div key={i} style={css('break-inside:avoid; margin-bottom:16px; background:#101513; border:1px solid rgba(255,255,255,0.08); border-radius:15px; padding:24px;')}>
              <span style={css('color:#2EE6A6; letter-spacing:2px; font-size:14px;')}>★★★★★</span>
              <p style={css('font-size:15px; line-height:1.62; color:#D5DAD7; margin:12px 0 18px;')}>{r.quote}</p>
              <div style={css('display:flex; align-items:center; gap:12px;')}>
                <span style={css(`width:40px; height:40px; border-radius:50%; background:${r.bg}; color:#06120D; display:flex; align-items:center; justify-content:center; font-weight:700;`)}>{r.initial}</span>
                <div style={css('line-height:1.3;')}>
                  <span style={css('font-weight:600; font-size:14px;')}>{r.name}</span>
                  <span style={css('display:block; font-size:12.5px; color:#8C958F;')}>{r.town}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={css('position:relative; background:radial-gradient(120% 100% at 50% 0%, rgba(46,230,166,0.13), rgba(11,13,12,0) 60%), #0B0D0C; border-top:1px solid rgba(255,255,255,0.06); overflow:hidden;')}>
        <div style={css('position:relative; max-width:760px; margin:0 auto; padding:clamp(52px,8vw,90px) clamp(20px,5vw,48px); text-align:center;')}>
          <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(30px,4.6vw,48px); line-height:1.06; letter-spacing:-0.02em; margin:0;")}>Ready to join them?</h2>
          <p style={css('font-size:17px; line-height:1.6; color:#AEB7B2; max-width:460px; margin:18px auto 0;')}>Get a free quote and find out why Lafayette keeps coming back to Kyree's.</p>
          <div style={css('display:flex; flex-wrap:wrap; justify-content:center; gap:14px; margin-top:30px;')}>
            <Link to="/quote" className="btn-primary" style={css('background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:16px; padding:15px 28px; border-radius:11px;')}>Get my free quote</Link>
            <a href="tel:+14247285089" className="btn-ghost" style={css('border:1px solid rgba(255,255,255,0.2); color:#F6F8F6; text-decoration:none; font-weight:600; font-size:16px; padding:15px 26px; border-radius:11px;')}>Call (424) 728-5089</a>
          </div>
        </div>
      </section>
    </main>
  );
}
