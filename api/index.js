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
  const dur = `${texts.length * 3}s`;
  const step = 1 / texts.length;

  const textElements = texts.map((t, i) => {
    const keyTimes = texts.map((_, j) => (j * step).toFixed(4)).join(';');
    const values = texts.map((_, j) => (j === i ? '1' : '0')).join(';');
    return `<text x="1296" y="100" font-family="'Segoe UI','Helvetica Neue',Arial,sans-serif" font-size="80" font-weight="600" fill="#ffffff" text-anchor="middle" dominant-baseline="central" opacity="${i === 0 ? 1 : 0}">
    ${escapeXml(t)}
    <animate attributeName="opacity" values="${values}" keyTimes="${keyTimes}" calcMode="discrete" dur="${dur}" repeatCount="indefinite"/>
  </text>`;
  }).join('\n  ');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="2592" height="200">
  <rect width="2592" height="200" fill="#307262"/>
  ${textElements}
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.send(svg);
});

module.exports = app;
