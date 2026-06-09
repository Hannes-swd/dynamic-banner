const express = require('express');
const app = express();

const texts = [
  "Primary: C++",
  "Always Learning",
  "Problem Solver",
  "Let's build something",
  "Passionate Developer",
  "Real-time Focused",
  "Stay Curious",
  "SOLID Code",
  "Tested & Proven",
  "Solutions Focused",
  "Open Source Fan",
  "Experience First",
  "Think Big",
  "Logic First",
  "Learn by Doing",
  "Backend Focus",
  "Practice Daily",
  "making cool stuff"
];

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

app.get('/', (req, res) => {
  const text = texts[Math.floor(Math.random() * texts.length)];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="2592" height="200">
  <rect width="2592" height="200" fill="#307262"/>
  <text x="1296" y="100" font-family="'Segoe UI','Helvetica Neue',Arial,sans-serif" font-size="80" font-weight="600" fill="#ffffff" text-anchor="middle" dominant-baseline="central">${escapeXml(text)}</text>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.send(svg);
});

module.exports = app;
