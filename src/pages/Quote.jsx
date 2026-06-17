import React, { useState } from 'react';
import { css } from '../lib/css';
import { Shield, Phone, Check } from '../components/Icons';

const eyebrow = 'color:#2EE6A6; font-size:12px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase;';
const inputStyle = "background:#0B0D0C; border:1px solid rgba(255,255,255,0.14); border-radius:9px; padding:12px 13px; color:#F6F8F6; font-size:15px; font-family:'Inter',sans-serif;";
const labelText = 'font-size:13px; font-weight:600; color:#C7CFCB;';

const SERVICE_OPTIONS = [
  'Automotive window tint', 'Ceramic / IR tint', 'Tint removal',
  'Paint protection film (PPF)', 'Ceramic coating', 'Residential / commercial film', 'Not sure — need advice',
];

export default function Quote() {
  const [form, setForm] = useState({
    kind: 'Vehicle', name: '', phone: '', email: '',
    vehicle: '', service: 'Automotive window tint', date: '', shade: '', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = () => {
    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setSubmitted(true);
  };

  const isVehicle = form.kind === 'Vehicle';
  const lines = [
    "New quote request — Kyree's Tint & Film", '',
    'Name: ' + form.name, 'Phone: ' + form.phone, 'Email: ' + form.email,
    'For: ' + form.kind,
    (isVehicle ? 'Vehicle' : 'Property') + ': ' + form.vehicle,
    'Service: ' + form.service, 'Shade (VLT): ' + form.shade,
    'Preferred date: ' + form.date, 'Notes: ' + form.notes,
  ];
  const mailtoHref = 'mailto:kyriwindowtints.booking@gmail.com?subject=' +
    encodeURIComponent('Quote request — ' + (form.name || 'New customer')) +
    '&body=' + encodeURIComponent(lines.join('\n'));

  return (
    <main>
      <section style={css('max-width:1100px; margin:0 auto; padding:clamp(36px,5vw,64px) clamp(20px,5vw,48px); display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:clamp(28px,4vw,48px); align-items:start;')}>
        {/* LEFT */}
        <div>
          <span style={css(eyebrow)}>Free quote · book</span>
          <h1 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:clamp(34px,5vw,52px); line-height:1.04; letter-spacing:-0.025em; margin:16px 0 0;")}>Let's get your install on the calendar.</h1>
          <p style={css('font-size:16.5px; line-height:1.65; color:#AEB7B2; margin:18px 0 0; max-width:420px;')}>Tell us a few details and we'll text or email you a quote — usually the same day. No deposit to get a price.</p>
          <div style={css('display:flex; flex-direction:column; gap:14px; margin-top:30px;')}>
            <div style={css('display:flex; gap:13px; align-items:flex-start;')}>
              <span style={css('color:#2EE6A6; margin-top:2px;')}><Check size={20} sw={2} /></span>
              <div><span style={css('font-weight:600; font-size:15px; display:block;')}>Same-day quotes</span><span style={css('font-size:13.5px; color:#8C958F;')}>Fast turnaround, no run-around.</span></div>
            </div>
            <div style={css('display:flex; gap:13px; align-items:flex-start;')}>
              <span style={css('color:#2EE6A6; margin-top:2px;')}><Shield size={20} sw={2} /></span>
              <div><span style={css('font-weight:600; font-size:15px; display:block;')}>Lifetime warranty</span><span style={css('font-size:13.5px; color:#8C958F;')}>On film and workmanship.</span></div>
            </div>
            <div style={css('display:flex; gap:13px; align-items:flex-start;')}>
              <span style={css('color:#2EE6A6; margin-top:2px;')}><Phone size={20} sw={2} /></span>
              <div><span style={css('font-weight:600; font-size:15px; display:block;')}>Prefer to talk?</span><a href="tel:+14247285089" style={css('font-size:13.5px; color:#2EE6A6; text-decoration:none;')}>Call or text (424) 728-5089</a></div>
            </div>
          </div>
        </div>

        {/* RIGHT: form */}
        <div style={css('background:#101513; border:1px solid rgba(255,255,255,0.09); border-radius:20px; padding:clamp(22px,3vw,32px);')}>
          {submitted ? (
            <div style={css('text-align:center; padding:18px 4px;')}>
              <span style={css('display:inline-flex; width:62px; height:62px; border-radius:50%; background:rgba(46,230,166,0.14); color:#2EE6A6; align-items:center; justify-content:center; margin-bottom:18px;')}><Check size={30} sw={2.2} /></span>
              <h2 style={css("font-family:'Fraunces',serif; font-weight:600; font-size:28px; letter-spacing:-0.02em; margin:0 0 10px;")}>Request ready to send.</h2>
              <p style={css('font-size:15px; line-height:1.6; color:#AEB7B2; margin:0 0 22px;')}>Tap below to send your details straight to Kyree, or call now and we'll get you quoted.</p>
              <div style={css('display:flex; flex-direction:column; gap:11px;')}>
                <a href={mailtoHref} style={css('background:#2EE6A6; color:#06120D; text-decoration:none; font-weight:700; font-size:15.5px; padding:14px; border-radius:11px;')}>Send my request by email</a>
                <a href="tel:+14247285089" style={css('border:1px solid rgba(46,230,166,0.4); color:#2EE6A6; text-decoration:none; font-weight:600; font-size:15.5px; padding:14px; border-radius:11px;')}>Call (424) 728-5089</a>
                <button onClick={() => setSubmitted(false)} style={css("background:transparent; border:none; color:#8C958F; font-size:13.5px; cursor:pointer; padding:8px; font-family:'Inter',sans-serif;")}>Edit my request</button>
              </div>
            </div>
          ) : (
            <div style={css('display:flex; flex-direction:column; gap:16px;')}>
              <div style={css('display:grid; grid-template-columns:1fr 1fr; gap:12px;')}>
                <label style={css('display:flex; flex-direction:column; gap:7px;')}><span style={css(labelText)}>Name</span><input value={form.name} onChange={set('name')} placeholder="Your name" style={css(inputStyle)} /></label>
                <label style={css('display:flex; flex-direction:column; gap:7px;')}><span style={css(labelText)}>Phone</span><input value={form.phone} onChange={set('phone')} placeholder="(000) 000-0000" style={css(inputStyle)} /></label>
              </div>
              <label style={css('display:flex; flex-direction:column; gap:7px;')}><span style={css(labelText)}>Email</span><input value={form.email} onChange={set('email')} placeholder="you@email.com" style={css(inputStyle)} /></label>

              <div>
                <span style={css(labelText + ' display:block; margin-bottom:8px;')}>This is for</span>
                <div style={css('display:flex; gap:8px;')}>
                  {['Vehicle', 'Home / Business'].map((k) => {
                    const active = form.kind === k;
                    return (
                      <button key={k} onClick={() => setForm((f) => ({ ...f, kind: k }))} style={css(`flex:1; cursor:pointer; font-family:'Inter',sans-serif; font-weight:600; font-size:14px; padding:11px; border-radius:9px; transition:all 160ms; border:1px solid ${active ? '#2EE6A6' : 'rgba(255,255,255,0.14)'}; background:${active ? 'rgba(46,230,166,0.14)' : 'transparent'}; color:${active ? '#2EE6A6' : '#C7CFCB'};`)}>{k}</button>
                    );
                  })}
                </div>
              </div>

              <label style={css('display:flex; flex-direction:column; gap:7px;')}>
                <span style={css(labelText)}>{isVehicle ? 'Vehicle (year / make / model)' : 'Property type / details'}</span>
                <input value={form.vehicle} onChange={set('vehicle')} placeholder={isVehicle ? 'e.g. 2021 Honda Civic' : 'e.g. Home — 4 living-room windows'} style={css(inputStyle)} />
              </label>

              <label style={css('display:flex; flex-direction:column; gap:7px;')}><span style={css(labelText)}>Service wanted</span>
                <select value={form.service} onChange={set('service')} style={css(inputStyle)}>
                  {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>

              <div style={css('display:grid; grid-template-columns:1fr 1fr; gap:12px;')}>
                <label style={css('display:flex; flex-direction:column; gap:7px;')}><span style={css(labelText)}>Preferred date</span><input type="date" value={form.date} onChange={set('date')} style={css(inputStyle)} /></label>
                <label style={css('display:flex; flex-direction:column; gap:7px;')}><span style={css(labelText)}>Shade (VLT)</span><input value={form.shade} onChange={set('shade')} placeholder="e.g. 35% / not sure" style={css(inputStyle)} /></label>
              </div>

              <label style={css('display:flex; flex-direction:column; gap:7px;')}><span style={css(labelText)}>Anything else?</span><textarea value={form.notes} onChange={set('notes')} placeholder="Tell us anything else that helps us quote." rows={3} style={css(inputStyle + ' resize:vertical;')} /></label>

              {showError && <span style={css('font-size:13px; color:#E8A53A;')}>Please add your name and a phone or email so we can reach you.</span>}

              <button onClick={submit} style={css("background:#2EE6A6; color:#06120D; border:none; cursor:pointer; font-weight:700; font-size:16px; padding:15px; border-radius:11px; font-family:'Inter',sans-serif; box-shadow:0 0 24px rgba(46,230,166,0.25);")}>Get my free quote</button>
              <span style={css('font-size:12px; color:#5E6862; text-align:center;')}>Submissions reach kyriwindowtints.booking@gmail.com. Connect to a CRM webhook anytime.</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
