// Reusable inline SVG icons (Lucide-style, currentColor).
import React from 'react';

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const ArrowRight = ({ size = 18, sw = 2.2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={sw} {...base}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Phone = ({ size = 17, sw = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={sw} {...base}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Shield = ({ size = 17, sw = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={sw} {...base}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const ShieldCheck = ({ size = 26, sw = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={sw} {...base} style={{ flexShrink: 0 }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Check = ({ size = 15, sw = 2.2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={sw} {...base}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Sun = ({ size = 26, sw = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={sw} {...base} style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const Thermometer = ({ size = 26, sw = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={sw} {...base} style={{ flexShrink: 0 }}>
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
);

export const Wrench = ({ size = 26, sw = 1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={sw} {...base} style={{ flexShrink: 0 }}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const Burger = ({ size = 22, sw = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round">
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="17" x2="21" y2="17" />
  </svg>
);
