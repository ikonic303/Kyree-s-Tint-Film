import React, { useState, useRef, useEffect } from 'react';
import { TINT_SVG } from '../data/tintSvg';

const TINTS = [
  { vlt: 70, name: 'Factory', none: true },
  { vlt: 50, name: 'Light' },
  { vlt: 35, name: 'Factory look' },
  { vlt: 20, name: 'Medium' },
  { vlt: 15, name: 'Dark' },
  { vlt: 5, name: 'Limo' },
];

const COVS = [
  { id: 'front2', name: 'Front 2' },
  { id: 'windshield', name: 'Windshield' },
  { id: 'sidesback', name: 'Sides + Back' },
  { id: 'full', name: 'Full Vehicle' },
];

const CERS = [
  { id: 'std', name: 'Standard Film' },
  { id: 'cer', name: 'Ceramic' },
];

function glassColor(v) {
  const t = v >= 70 ? 0 : (100 - v) / 100;
  const L = [150, 182, 208], D = [8, 12, 18];
  const m = L.map((c, i) => Math.round(c + (D[i] - c) * Math.pow(t, 0.82)));
  return `rgb(${m[0]},${m[1]},${m[2]})`;
}

const STYLES = `
.tint-sim {
  --ts-bg: #0b0e13;
  --ts-panel: #141922;
  --ts-panel2: #1b2230;
  --ts-line: #27303f;
  --ts-text: #eef2f7;
  --ts-muted: #9aa7b8;
  --ts-accent: #e11d2a;
  --ts-accent2: #ff3b47;
  background: radial-gradient(1200px 600px at 50% -10%, #1a2230 0, var(--ts-bg) 60%);
  color: var(--ts-text);
  font-family: "Segoe UI", system-ui, Helvetica, Arial, sans-serif;
  min-height: 60vh;
  padding: 0 0 80px;
}
.tint-sim .ts-wrap {
  max-width: 1040px;
  margin: 0 auto;
  padding: 22px 18px 60px;
}
.tint-sim .ts-stage {
  position: relative;
  background: linear-gradient(180deg, #fdfeff, #e7edf3);
  border: 1px solid var(--ts-line);
  border-radius: 16px;
  overflow: hidden;
  padding: 10px;
}
.tint-sim .ts-stage svg {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
}
.tint-sim .ts-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #0b0e13e6;
  border: 1px solid var(--ts-line);
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  color: #fff;
  max-width: 62%;
}
.tint-sim .ts-badge b { font-size: 20px; }
.tint-sim .ts-badge span { color: var(--ts-muted); }
.tint-sim .ts-step {
  margin-top: 16px;
  background: var(--ts-panel);
  border: 1px solid var(--ts-line);
  border-radius: 16px;
  padding: 18px;
}
.tint-sim .ts-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--ts-muted);
  margin: 0 0 10px;
}
.tint-sim .ts-label b { color: var(--ts-accent); font-weight: 800; }
.tint-sim .ts-opts {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.tint-sim .ts-opt {
  flex: 1 1 96px;
  min-width: 96px;
  cursor: pointer;
  border: 1px solid var(--ts-line);
  background: var(--ts-panel2);
  border-radius: 12px;
  padding: 12px 10px;
  text-align: center;
  transition: .15s;
  color: var(--ts-text);
}
.tint-sim .ts-opt:hover { border-color: #3a4658; }
.tint-sim .ts-opt.active {
  border-color: var(--ts-accent);
  box-shadow: 0 0 0 2px var(--ts-accent) inset;
  background: #221318;
}
.tint-sim .ts-sw {
  height: 30px;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid rgba(255,255,255,0.13);
}
.tint-sim .ts-opt .big { font-weight: 800; font-size: 15px; }
.tint-sim .ts-opt .nm { font-size: 11px; color: var(--ts-muted); }
.tint-sim .ts-row2 {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 16px;
  margin-top: 16px;
}
@media (max-width: 760px) {
  .tint-sim .ts-row2 { grid-template-columns: 1fr; }
}
.tint-sim .ts-quote {
  background: linear-gradient(180deg, var(--ts-panel), var(--ts-panel2));
  border: 1px solid var(--ts-line);
  border-radius: 16px;
  padding: 18px;
}
.tint-sim .ts-quote h3 { margin: 0 0 4px; font-size: 17px; color: var(--ts-text); }
.tint-sim .ts-quote > p { margin: 0 0 14px; color: var(--ts-muted); font-size: 13px; }
.tint-sim .ts-quote input {
  width: 100%;
  background: #0d1219;
  border: 1px solid var(--ts-line);
  color: var(--ts-text);
  padding: 11px 12px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}
.tint-sim .ts-quote input:focus { border-color: var(--ts-accent); }
.tint-sim .ts-submit {
  width: 100%;
  background: var(--ts-accent);
  color: #fff;
  border: 0;
  padding: 13px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
}
.tint-sim .ts-submit:hover { background: var(--ts-accent2); }
.tint-sim .ts-ok {
  background: #11331f;
  border: 1px solid #1f6e3f;
  color: #b8f3cf;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 10px;
}
.tint-sim .ts-sumline {
  font-size: 13px;
  color: var(--ts-text);
  background: #0d1219;
  border: 1px solid var(--ts-line);
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 12px;
}
.tint-sim .ts-note {
  font-size: 11px;
  color: var(--ts-muted);
  margin-top: 10px;
  line-height: 1.5;
}
`;

export default function TintSimulator() {
  const [vlt, setVlt] = useState(35);
  const [cov, setCov] = useState('full');
  const [cer, setCer] = useState('std');
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '' });
  const [submitted, setSubmitted] = useState(false);
  const stageRef = useRef(null);

  useEffect(() => {
    if (!stageRef.current) return;
    const none = vlt >= 70;
    const op = none ? 0 : (100 - vlt) / 100 * 0.85;
    stageRef.current.querySelectorAll('.tg').forEach(g => {
      g.style.fill = '#0a1018';
      g.style.fillOpacity = op;
    });
  }, [vlt]);

  const isNone = vlt >= 70;
  const currentCov = COVS.find(x => x.id === cov);
  const cerLabel = cer === 'cer' ? 'Ceramic' : 'Standard';
  const buildSummary = `${isNone ? 'Factory glass' : vlt + '% VLT'} · ${currentCov.name} · ${cerLabel} film`;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <style>{STYLES}</style>
      <div className="tint-sim">
        <div className="ts-wrap">

          <div className="ts-stage">
            <div className="ts-badge">
              <b>{isNone ? 'OFF' : vlt + '%'}</b>{' '}
              <span>{isNone ? 'VLT · factory glass' : 'VLT'}</span>
            </div>
            <div ref={stageRef} dangerouslySetInnerHTML={{ __html: TINT_SVG }} />
          </div>

          <div className="ts-step">
            <p className="ts-label"><b>1.</b>&nbsp; Choose your tint darkness (VLT %)</p>
            <div className="ts-opts">
              {TINTS.map(t => (
                <button
                  key={t.vlt}
                  className={`ts-opt${vlt === t.vlt ? ' active' : ''}`}
                  onClick={() => setVlt(t.vlt)}
                >
                  <div className="ts-sw" style={{ background: glassColor(t.vlt) }} />
                  <div className="big">{t.none ? 'OFF' : t.vlt + '%'}</div>
                  <div className="nm">{t.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="ts-step">
            <p className="ts-label"><b>2.</b>&nbsp; How many windows?</p>
            <div className="ts-opts">
              {COVS.map(o => (
                <button
                  key={o.id}
                  className={`ts-opt${cov === o.id ? ' active' : ''}`}
                  onClick={() => setCov(o.id)}
                >
                  <div className="big">{o.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="ts-step">
            <p className="ts-label"><b>3.</b>&nbsp; Ceramic upgrade?</p>
            <div className="ts-opts">
              {CERS.map(o => (
                <button
                  key={o.id}
                  className={`ts-opt${cer === o.id ? ' active' : ''}`}
                  onClick={() => setCer(o.id)}
                >
                  <div className="big">{o.name}</div>
                </button>
              ))}
            </div>
            <p className="ts-note">Ceramic rejects far more heat &amp; UV for the same look — premium upgrade.</p>
          </div>

          <div className="ts-row2">
            <div className="ts-quote">
              <h3>Love this build? Get your free quote</h3>
              <p>We'll reach out with pricing for your build.</p>
              {submitted ? (
                <div className="ts-ok">&#10003; Sent! We'll be in touch shortly.</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="ts-sumline">{buildSummary}</div>
                  <input
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                  <input
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    required
                  />
                  <input
                    placeholder="Vehicle (year / make / model)"
                    value={form.vehicle}
                    onChange={e => setForm(f => ({ ...f, vehicle: e.target.value }))}
                    required
                  />
                  <button type="submit" className="ts-submit">Get My Free Quote &rarr;</button>
                </form>
              )}
              <p className="ts-note">We'll reach out within 1 business day · Lafayette, IN</p>
            </div>

            <div className="ts-quote">
              <h3>About these shades</h3>
              <p style={{ marginBottom: 8 }}>Lower VLT = darker. Popular picks:</p>
              <p className="ts-note" style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--ts-text)' }}>
                <b>5%</b> — Limo, max privacy<br />
                <b>15%</b> — Dark, sleek<br />
                <b>20%</b> — Dark, see out at night<br />
                <b>35%</b> — Factory-match look<br />
                <b>50%</b> — Light, big heat/UV cut
              </p>
              <p className="ts-note">Tint laws vary by state &amp; window. We'll keep your install legal and warrantied.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
