import React, { useState } from 'react';
import { SVG_MAP } from '../data/ppfSvgs';

const PKGS = [
  { id: 'partial', name: 'Partial Front', pct: '~25%', desc: 'Bumper, hood tip & mirrors' },
  { id: 'fullfront', name: 'Full Front', pct: '~50%', desc: 'Full hood, fenders & bumper' },
  { id: 'track', name: 'Track Package', pct: '~65%', desc: 'Front + rockers & full roof' },
  { id: 'full', name: 'Full Vehicle', pct: '100%', desc: 'Complete coverage' },
];
const FINS = [
  { id: 'gloss', name: 'Gloss' },
  { id: 'matte', name: 'Matte' },
];

const STYLES = `
.ppf-sim {
  --ppf-bg: #0b0e13;
  --ppf-panel: #141922;
  --ppf-panel2: #1b2230;
  --ppf-line: #27303f;
  --ppf-text: #eef2f7;
  --ppf-muted: #9aa7b8;
  --ppf-accent: #e11d2a;
  --ppf-accent2: #ff3b47;
  background: radial-gradient(1200px 600px at 50% -10%, #1a2230 0, var(--ppf-bg) 60%);
  color: var(--ppf-text);
  font-family: "Segoe UI", system-ui, Helvetica, Arial, sans-serif;
  min-height: 60vh;
  padding: 0 0 80px;
}
.ppf-sim .ppf-wrap {
  max-width: 1040px;
  margin: 0 auto;
  padding: 22px 18px 60px;
}
.ppf-sim .ppf-stage {
  position: relative;
  background: linear-gradient(180deg, #fdfeff, #e7edf3);
  border: 1px solid var(--ppf-line);
  border-radius: 16px;
  overflow: hidden;
  padding: 10px;
}
.ppf-sim .ppf-stage svg {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
}
.ppf-sim #carbox {
  line-height: 0;
  transition: filter .2s ease;
}
.ppf-sim .ppf-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #0b0e13e6;
  border: 1px solid var(--ppf-line);
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  color: #fff;
}
.ppf-sim .ppf-badge b { font-size: 17px; }
.ppf-sim .ppf-badge span { color: var(--ppf-muted); }
.ppf-sim .ppf-step {
  margin-top: 16px;
  background: var(--ppf-panel);
  border: 1px solid var(--ppf-line);
  border-radius: 16px;
  padding: 18px;
}
.ppf-sim .ppf-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--ppf-muted);
  margin: 0 0 10px;
}
.ppf-sim .ppf-label b { color: var(--ppf-accent); font-weight: 800; }
.ppf-sim .ppf-opts {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.ppf-sim .ppf-opt {
  flex: 1 1 110px;
  min-width: 110px;
  cursor: pointer;
  border: 1px solid var(--ppf-line);
  background: var(--ppf-panel2);
  border-radius: 12px;
  padding: 14px 10px;
  text-align: center;
  transition: .15s;
  color: var(--ppf-text);
}
.ppf-sim .ppf-opt:hover { border-color: #3a4658; }
.ppf-sim .ppf-opt.active {
  border-color: var(--ppf-accent);
  box-shadow: 0 0 0 2px var(--ppf-accent) inset;
  background: #221318;
}
.ppf-sim .ppf-opt .big { font-weight: 800; font-size: 15px; }
.ppf-sim .ppf-row2 {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 16px;
  margin-top: 16px;
}
@media (max-width: 760px) {
  .ppf-sim .ppf-row2 { grid-template-columns: 1fr; }
}
.ppf-sim .ppf-quote {
  background: linear-gradient(180deg, var(--ppf-panel), var(--ppf-panel2));
  border: 1px solid var(--ppf-line);
  border-radius: 16px;
  padding: 18px;
}
.ppf-sim .ppf-quote h3 { margin: 0 0 4px; font-size: 17px; color: var(--ppf-text); }
.ppf-sim .ppf-quote p { margin: 0 0 14px; color: var(--ppf-muted); font-size: 13px; }
.ppf-sim .ppf-quote input {
  width: 100%;
  background: #0d1219;
  border: 1px solid var(--ppf-line);
  color: var(--ppf-text);
  padding: 11px 12px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  outline: none;
}
.ppf-sim .ppf-quote input:focus { border-color: var(--ppf-accent); }
.ppf-sim .ppf-submit {
  width: 100%;
  background: var(--ppf-accent);
  color: #fff;
  border: 0;
  padding: 13px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
}
.ppf-sim .ppf-submit:hover { background: var(--ppf-accent2); }
.ppf-sim .ppf-ok {
  background: #11331f;
  border: 1px solid #1f6e3f;
  color: #b8f3cf;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 10px;
}
.ppf-sim .ppf-sumline {
  font-size: 13px;
  color: var(--ppf-text);
  background: #0d1219;
  border: 1px solid var(--ppf-line);
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 12px;
}
.ppf-sim .ppf-guide {
  background: var(--ppf-panel);
  border: 1px solid var(--ppf-line);
  border-radius: 16px;
  padding: 18px;
}
.ppf-sim .ppf-guide h3 { margin: 0 0 12px; font-size: 15px; color: var(--ppf-text); }
.ppf-sim .ppf-guide-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
}
.ppf-sim .ppf-guide-dot {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-top: 2px;
}
.ppf-sim .ppf-guide-dot.red { background: rgba(237,28,36,0.7); }
.ppf-sim .ppf-guide-dot.gray { background: #b0b0b0; }
.ppf-sim .ppf-guide-text { font-size: 13px; color: var(--ppf-muted); line-height: 1.5; }
.ppf-sim .ppf-note { font-size: 11px; color: var(--ppf-muted); margin-top: 10px; line-height: 1.5; }
`;

export default function PPFSimulator() {
  const [pkg, setPkg] = useState('fullfront');
  const [fin, setFin] = useState('gloss');
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '' });
  const [submitted, setSubmitted] = useState(false);

  const currentPkg = PKGS.find(p => p.id === pkg);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <style>{STYLES}</style>
      <div className="ppf-sim">
        <div className="ppf-wrap">
          <div className="ppf-stage">
            <div className="ppf-badge">
              <b>{currentPkg.name}</b><br />
              <span>{fin === 'gloss' ? 'Gloss' : 'Matte'} PPF</span>
            </div>
            <div
              id="carbox"
              style={{ filter: fin === 'matte' ? 'saturate(.72) brightness(1.04)' : 'none' }}
              dangerouslySetInnerHTML={{ __html: SVG_MAP[pkg] }}
            />
          </div>

          <div className="ppf-step">
            <p className="ppf-label"><b>Step 1</b> — Choose your coverage package</p>
            <div className="ppf-opts">
              {PKGS.map(p => (
                <button
                  key={p.id}
                  className={`ppf-opt${pkg === p.id ? ' active' : ''}`}
                  onClick={() => setPkg(p.id)}
                >
                  <div className="big">{p.name}</div>
                  <div style={{ fontSize: 12, marginTop: 4, color: pkg === p.id ? '#ff8a8e' : 'var(--ppf-muted)' }}>{p.pct} coverage</div>
                  <div style={{ fontSize: 11, marginTop: 4, color: 'var(--ppf-muted)' }}>{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="ppf-step">
            <p className="ppf-label"><b>Step 2</b> — Choose your film finish</p>
            <div className="ppf-opts">
              {FINS.map(f => (
                <button
                  key={f.id}
                  className={`ppf-opt${fin === f.id ? ' active' : ''}`}
                  onClick={() => setFin(f.id)}
                >
                  <div className="big">{f.name}</div>
                  <div style={{ fontSize: 11, marginTop: 4, color: 'var(--ppf-muted)' }}>
                    {f.id === 'gloss' ? 'Classic clear finish' : 'Subtle satin look'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="ppf-row2">
            <div className="ppf-quote">
              <h3>Request a quote</h3>
              <p>We'll reach out with pricing for your build.</p>
              {submitted ? (
                <div className="ppf-ok">&#10003; Sent! We'll be in touch shortly.</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="ppf-sumline">
                    {currentPkg.name} · {fin === 'gloss' ? 'Gloss' : 'Matte'} PPF
                  </div>
                  <input
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                  <input
                    placeholder="Phone or email"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    required
                  />
                  <input
                    placeholder="Year / Make / Model"
                    value={form.vehicle}
                    onChange={e => setForm(f => ({ ...f, vehicle: e.target.value }))}
                    required
                  />
                  <button type="submit" className="ppf-submit">Get my PPF quote &rarr;</button>
                </form>
              )}
              <p className="ppf-note">We'll reach out within 1 business day · Lafayette, IN</p>
            </div>

            <div className="ppf-guide">
              <h3>Coverage guide</h3>
              <div className="ppf-guide-item">
                <div className="ppf-guide-dot red" />
                <div className="ppf-guide-text"><strong style={{color:'var(--ppf-text)'}}>Red area</strong> — PPF protected zones. Self-healing film guards against rock chips, scratches &amp; UV.</div>
              </div>
              <div className="ppf-guide-item">
                <div className="ppf-guide-dot gray" />
                <div className="ppf-guide-text"><strong style={{color:'var(--ppf-text)'}}>Gray area</strong> — Unprotected paint. Standard care recommended.</div>
              </div>
              <p className="ppf-note">Exact coverage may vary by vehicle. Contact us for a custom quote on your specific car.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
