// Stitch Design Components Runtime
// This is a minimal support file for .dc.html files
(function() {
  'use strict';

  const DC = {
    version: '1.0.0',
    components: {},
    register: function(name, component) {
      this.components[name] = component;
    }
  };

  // Simple DC logic placeholder
  window.DCLogic = function() {};
  window.DCLogic.prototype = {
    renderVals: function() { return {}; }
  };

  // Inject runtime styles
  const style = document.createElement('style');
  style.textContent = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .dc-screen { min-height: 100vh; display: flex; flex-direction: column; }
    .fx { display: flex; }
    .col { flex-direction: column; }
    .row { flex-direction: row; }
    .ac { align-items: center; }
    .jc { justify-content: center; }
    .jb { justify-content: space-between; }
    .fs10 { font-size: 10px; }
    .fs12 { font-size: 12px; }
    .fs14 { font-size: 14px; }
    .fs16 { font-size: 16px; }
    .fs20 { font-size: 20px; }
    .fs24 { font-size: 24px; }
    .fs32 { font-size: 32px; }
    .fs40 { font-size: 40px; }
    .fs48 { font-size: 48px; }
    .fs56 { font-size: 56px; }
    .fs64 { font-size: 64px; }
    .fw3 { font-weight: 300; }
    .fw4 { font-weight: 400; }
    .fw5 { font-weight: 500; }
    .fw6 { font-weight: 600; }
    .fw7 { font-weight: 700; }
    .gap4 { gap: 4px; }
    .gap8 { gap: 8px; }
    .gap12 { gap: 12px; }
    .gap16 { gap: 16px; }
    .gap24 { gap: 24px; }
    .gap32 { gap: 32px; }
    .gap48 { gap: 48px; }
    .p8 { padding: 8px; }
    .p16 { padding: 16px; }
    .p24 { padding: 24px; }
    .p32 { padding: 32px; }
    .p48 { padding: 48px; }
    .p64 { padding: 64px; }
    .br8 { border-radius: 8px; }
    .br12 { border-radius: 12px; }
    .br16 { border-radius: 16px; }
    .br24 { border-radius: 24px; }
    .text-cream { color: #F4EFE6; }
    .text-muted { color: #9A958C; }
    .text-accent { color: #FF0570; }
    .bg-dark { background: #0C0C0F; }
  `;
  document.head.appendChild(style);

  window.DC = DC;
})();
