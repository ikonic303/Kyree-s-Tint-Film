import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '../lib/css';
import { Burger, Phone, ArrowRight } from './Icons';

const NAV = [
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
  { to: '/tint-simulator', label: 'Tint' },
  { to: '/ppf-simulator', label: 'PPF' },
];

function AnnouncementBar() {
  return (
    <div style={css('background:#0E1311; border-bottom:1px solid rgba(46,230,166,0.16); color:#AEB7B2; font-size:13px; text-align:center; padding:9px 16px;')}>
      Owner-installed in Lafayette, IN · Lifetime tint warranty ·{' '}
      <a href="tel:+14247285089" style={css('color:#2EE6A6; text-decoration:none; font-weight:600;')}>Text or call (424) 728-5089</a>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" style={css('display:flex; align-items:center; gap:12px; text-decoration:none;')}>
      <span style={css("width:38px; height:38px; border-radius:9px; background:#2EE6A6; color:#06120D; display:flex; align-items:center; justify-content:center; font-family:'Fraunces',serif; font-weight:700; font-size:21px; box-shadow:0 0 22px rgba(46,230,166,0.35);")}>K</span>
      <span style={css('display:flex; flex-direction:column; line-height:1;')}>
        <span style={css("font-family:'Fraunces',serif; font-weight:600; font-size:18px; color:#F6F8F6;")}>Kyree's Tint &amp; Film</span>
        <span style={css('font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#76817B; margin-top:3px;')}>Lafayette · Indiana</span>
      </span>
    </Link>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <header style={css('position:sticky; top:0; z-index:40; background:rgba(11,13,12,0.86); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); border-bottom:1px solid rgba(255,255,255,0.07);')}>
        <nav style={css('max-width:1200px; margin:0 auto; padding:0 clamp(20px,5vw,48px); height:72px; display:flex; align-items:center; justify-content:space-between;')}>
          <Logo />
          <div className="nav-links" style={css('align-items:center; gap:30px;')}>
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={pathname === n.to ? undefined : 'navlink'}
                style={css(`text-decoration:none; font-size:15px; font-weight:${pathname === n.to ? 600 : 500}; color:${pathname === n.to ? '#2EE6A6' : '#C7CFCB'};`)}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/quote" className="btn-primary" style={css('background:#2EE6A6; color:#06120D; text-decoration:none; font-size:15px; font-weight:700; padding:11px 20px; border-radius:9px;')}>Get a free quote</Link>
          </div>
          <button className="burger" onClick={() => setOpen(true)} aria-label="Menu" style={css('background:transparent; border:1px solid rgba(255,255,255,0.16); color:#F6F8F6; width:46px; height:46px; border-radius:10px; align-items:center; justify-content:center; cursor:pointer;')}>
            <Burger />
          </button>
        </nav>
      </header>

      {open && (
        <div style={css('position:fixed; inset:0; z-index:50; background:rgba(8,10,9,0.97); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); display:flex; flex-direction:column; padding:24px;')}>
          <div style={css('display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;')}>
            <span style={css("font-family:'Fraunces',serif; font-weight:600; font-size:20px;")}>Kyree's Tint &amp; Film</span>
            <button onClick={() => setOpen(false)} aria-label="Close" style={css('background:transparent; border:1px solid rgba(255,255,255,0.16); color:#F6F8F6; width:46px; height:46px; border-radius:10px; cursor:pointer; font-size:22px;')}>×</button>
          </div>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} style={css("color:#F6F8F6; text-decoration:none; font-family:'Fraunces',serif; font-size:30px; padding:15px 0; border-bottom:1px solid rgba(255,255,255,0.08);")}>{n.label}</Link>
          ))}
          <Link to="/quote" onClick={() => setOpen(false)} style={css('margin-top:26px; background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:18px; padding:16px; border-radius:11px; text-align:center;')}>Get a free quote</Link>
          <a href="tel:+14247285089" style={css('margin-top:14px; border:1px solid rgba(46,230,166,0.4); color:#2EE6A6; text-decoration:none; font-weight:600; font-size:18px; padding:16px; border-radius:11px; text-align:center;')}>Call (424) 728-5089</a>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer style={css('background:#080A09; border-top:1px solid rgba(255,255,255,0.07);')}>
      <div style={css('max-width:1200px; margin:0 auto; padding:clamp(48px,7vw,80px) clamp(20px,5vw,48px) 36px; display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:40px;')}>
        <div style={css('max-width:300px;')}>
          <div style={css('display:flex; align-items:center; gap:11px;')}>
            <span style={css("width:36px; height:36px; border-radius:9px; background:#2EE6A6; color:#06120D; display:flex; align-items:center; justify-content:center; font-family:'Fraunces',serif; font-weight:700; font-size:20px;")}>K</span>
            <span style={css("font-family:'Fraunces',serif; font-weight:600; font-size:18px;")}>Kyree's Tint &amp; Film</span>
          </div>
          <p style={css('font-size:14px; line-height:1.6; color:#8C958F; margin:16px 0 0;')}>Premium automotive &amp; flat-glass window tint, PPF, and ceramic coating — owner-installed in Lafayette, Indiana.</p>
        </div>
        <div>
          <span style={css('font-size:12px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:#5E6862;')}>Explore</span>
          <div style={css('display:flex; flex-direction:column; gap:11px; margin-top:16px;')}>
            <Link to="/services" className="footer-link" style={css('color:#C7CFCB; text-decoration:none; font-size:14.5px;')}>Services</Link>
            <Link to="/gallery" className="footer-link" style={css('color:#C7CFCB; text-decoration:none; font-size:14.5px;')}>Gallery</Link>
            <Link to="/reviews" className="footer-link" style={css('color:#C7CFCB; text-decoration:none; font-size:14.5px;')}>Reviews</Link>
            <Link to="/quote" className="footer-link" style={css('color:#C7CFCB; text-decoration:none; font-size:14.5px;')}>Get a quote</Link>
            <Link to="/contact" className="footer-link" style={css('color:#C7CFCB; text-decoration:none; font-size:14.5px;')}>Contact</Link>
          </div>
        </div>
        <div>
          <span style={css('font-size:12px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:#5E6862;')}>Contact</span>
          <div style={css('display:flex; flex-direction:column; gap:11px; margin-top:16px;')}>
            <a href="tel:+14247285089" className="footer-link" style={css('color:#C7CFCB; text-decoration:none; font-size:14.5px;')}>(424) 728-5089</a>
            <a href="mailto:kyriwindowtints.booking@gmail.com" className="footer-link" style={css('color:#C7CFCB; text-decoration:none; font-size:14.5px; word-break:break-all;')}>kyriwindowtints.booking@gmail.com</a>
            <span style={css('color:#8C958F; font-size:14.5px;')}>Lafayette, Indiana</span>
            <span style={css('color:#8C958F; font-size:14.5px;')}>By appointment — text or call</span>
          </div>
        </div>
        <div>
          <span style={css('font-size:12px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:#5E6862;')}>Service area</span>
          <p style={css('font-size:14px; line-height:1.7; color:#8C958F; margin:16px 0 0;')}>Lafayette · West Lafayette · Battle Ground · Dayton · Monticello · Delphi · Tippecanoe County</p>
        </div>
      </div>
      <div style={css('border-top:1px solid rgba(255,255,255,0.07);')}>
        <div style={css('max-width:1200px; margin:0 auto; padding:20px clamp(20px,5vw,48px); display:flex; flex-wrap:wrap; justify-content:space-between; gap:10px;')}>
          <span style={css('font-size:13px; color:#5E6862;')}>© 2026 Kyree's Tint &amp; Film. All rights reserved.</span>
          <span style={css('font-size:13px; color:#5E6862;')}>Lifetime warranty · Owner-installed in Lafayette, IN</span>
        </div>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="mobile-bar" style={css('position:fixed; bottom:0; left:0; right:0; z-index:45; background:rgba(8,10,9,0.96); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); border-top:1px solid rgba(255,255,255,0.1); padding:10px 14px calc(10px + env(safe-area-inset-bottom)); gap:10px;')}>
      <a href="tel:+14247285089" style={css('flex:1; display:flex; align-items:center; justify-content:center; gap:8px; border:1px solid rgba(46,230,166,0.45); color:#2EE6A6; text-decoration:none; font-weight:700; font-size:15px; padding:13px; border-radius:11px;')}>
        <Phone size={17} /> Call
      </a>
      <Link to="/quote" style={css('flex:1.4; display:flex; align-items:center; justify-content:center; gap:8px; background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:15px; padding:13px; border-radius:11px;')}>Get a free quote</Link>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div style={css("background:#0B0D0C; color:#F6F8F6; font-family:'Inter',sans-serif; min-height:100vh; overflow-x:hidden;")}>
      <AnnouncementBar />
      <Nav />
      {children}
      <Footer />
      <MobileBar />
    </div>
  );
}

export { ArrowRight };
