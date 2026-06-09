const express = require('express');
const app = express();

const texts = [
  "Primary: C++",
  "Always Learning",
  "making cool stuff"
];

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

app.get('/', (req, res) => {
  const index = Math.floor(Date.now() / 5000) % texts.length;
  const text = texts[index];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="2592" height="200">
  <rect width="2592" height="200" fill="#2d5a4a"/>
  <text x="1296" y="100" font-family="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" font-size="80" font-weight="600" fill="#ffffff" text-anchor="middle" dominant-baseline="central">${escapeXml(text)}</text>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.send(svg);
});

module.exports = app;