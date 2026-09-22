/* Minimal inline SVG icon set (stroke-based, Feather-style). No external requests. */

const ICONS = {
  code: '<path d="M8 3 3 8l5 5M13 3l5 5-5 5M9.5 1l-1 14"/>',
  layers: '<path d="M8 1 1 4.5 8 8l7-3.5L8 1Z"/><path d="M1 8l7 3.5L15 8"/><path d="M1 11.5l7 3.5 7-3.5"/>',
  database: '<ellipse cx="8" cy="3" rx="6" ry="2.2"/><path d="M2 3v10c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V3"/><path d="M2 8c0 1.2 2.7 2.2 6 2.2S14 9.2 14 8"/>',
  server: '<rect x="1.5" y="1.5" width="13" height="5" rx="1"/><rect x="1.5" y="9.5" width="13" height="5" rx="1"/><path d="M4.5 4h.01M4.5 12h.01"/>',
  tool: '<path d="M11.3 1.7a3.3 3.3 0 0 0-4.4 4l-5.4 5.4a1.5 1.5 0 0 0 2.1 2.1l5.4-5.4a3.3 3.3 0 0 0 4-4.4l-2.1 2.1-1.7-1.7 2.1-2.1Z"/>',
  globe: '<circle cx="8" cy="8" r="6.5"/><path d="M1.5 8h13M8 1.5c1.8 1.8 2.7 4 2.7 6.5s-.9 4.7-2.7 6.5c-1.8-1.8-2.7-4-2.7-6.5S6.2 3.3 8 1.5Z"/>',
  cpu: '<rect x="4.5" y="4.5" width="7" height="7" rx="1"/><rect x="1.5" y="6" width="2" height="1.5"/><rect x="1.5" y="8.5" width="2" height="1.5"/><rect x="12.5" y="6" width="2" height="1.5"/><rect x="12.5" y="8.5" width="2" height="1.5"/><rect x="6" y="1.5" width="1.5" height="2"/><rect x="8.5" y="1.5" width="1.5" height="2"/><rect x="6" y="12.5" width="1.5" height="2"/><rect x="8.5" y="12.5" width="1.5" height="2"/>',
  package: '<path d="M8 1.5 1.5 5 8 8.5 14.5 5 8 1.5Z"/><path d="M1.5 5v6L8 14.5 14.5 11V5"/><path d="M8 8.5V14.5"/>',
  terminal: '<rect x="1.5" y="2" width="13" height="12" rx="1.5"/><path d="M4 6l2.5 2L4 10M8 10.5h4"/>',
  puzzle: '<path d="M6 2h2.2a1 1 0 0 1 1 1.2 1.3 1.3 0 0 0 2.5.5V3a1 1 0 0 1 1-1H14v3.3a1.3 1.3 0 0 0-.5 2.5 1 1 0 0 1-1.2 1H10v2.1a1.2 1.2 0 1 1 0 2.3V14H7.8a1 1 0 0 1-1-1.2 1.3 1.3 0 1 0-2.5-.5V13a1 1 0 0 1-1 1H1v-3.2a1.2 1.2 0 1 0 0-2.4V6h2.3a1 1 0 0 1 1-1.2A1.3 1.3 0 0 0 6 3.3V2Z"/>',
  github: '<path d="M8 1a7 7 0 0 0-2.2 13.6c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.8-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.08 1.65.77 2.05.59.06-.46.24-.77.44-.95-1.56-.18-3.2-.78-3.2-3.48 0-.77.27-1.4.72-1.9-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.94.72a6.7 6.7 0 0 1 3.53 0c1.35-.91 1.94-.72 1.94-.72.38.97.14 1.69.07 1.87.45.5.72 1.13.72 1.9 0 2.71-1.65 3.3-3.22 3.47.25.22.48.65.48 1.31v1.94c0 .19.13.41.49.34A7 7 0 0 0 8 1Z"/>',
  linkedin: '<rect x="1.5" y="1.5" width="13" height="13" rx="2"/><path d="M5 6.5v5M5 4.4h.01M8 11.5v-3a1.6 1.6 0 0 1 3.2 0v3M8 8.2v3.3"/>',
  mail: '<rect x="1.5" y="3" width="13" height="10" rx="1.5"/><path d="m2 4 6 5 6-5"/>',
  phone: '<path d="M3 2.2h2.3l1 3-1.4 1.3a8.6 8.6 0 0 0 4.6 4.6l1.3-1.4 3 1V13a1 1 0 0 1-1 1h-.5C6.9 14 2 9.1 2 3.5V3a1 1 0 0 1 1-.8Z"/>',
  "map-pin": '<path d="M8 14.5S3 10.2 3 6.5a5 5 0 0 1 10 0c0 3.7-5 8-5 8Z"/><circle cx="8" cy="6.5" r="1.7"/>',
  "external-link": '<path d="M6.5 2.5H2.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4M9.5 1.5h5v5M14 2 7.5 8.5"/>',
  menu: '<path d="M2 4h12M2 8h12M2 12h12"/>',
  close: '<path d="M3 3l10 10M13 3 3 13"/>',
  send: '<path d="M14.5 1.5 7 9M14.5 1.5 10 14.5 7 9M14.5 1.5 1.5 6l5.5 3"/>',
  "arrow-down": '<path d="M8 2.5v11M3 9l5 5 5-5"/>',
  compass: '<circle cx="8" cy="8" r="6.5"/><path d="m10.2 5.8-1.4 3.4-3.4 1.4 1.4-3.4 3.4-1.4Z"/>',
  motorcycle:
    '<circle cx="3.4" cy="12.3" r="2.1"/><circle cx="12.6" cy="12.3" r="2.1"/><path d="M3.4 12.3 6.2 8.2h3.6l2.8 4.1M6.2 8.2 5 6H3.2"/><rect x="7" y="9.3" width="2" height="1.6" rx="0.3"/>',
};

function icon(name, cls = "icon") {
  const body = ICONS[name] || "";
  return `<svg class="${cls}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}
