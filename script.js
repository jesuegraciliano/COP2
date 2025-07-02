/* script.js */
document.getElementById('btnCalcular').addEventListener('click', function() {
  const h1 = parseFloat(document.getElementById('h1').value);
  const h4 = parseFloat(document.getElementById('h4').value);
  const h2 = parseFloat(document.getElementById('h2').value);
  const m  = parseFloat(document.getElementById('m').value);
  const resultadoEl = document.getElementById('resultado');

  const qL = h1 - h4;
  const W  = h2 - h1;

  if (![h1, h4, h2, m].every(val => !isNaN(val)) || W <= 0 || m <= 0) {
    resultadoEl.textContent = 'Por favor, verifique os valores inseridos.';
    return;
  }

  const cop = qL / W;
  const Qe  = m * qL;
  const Wc  = m * W;

  resultadoEl.innerHTML =
    `<p>COP = (${h1.toFixed(2)} – ${h4.toFixed(2)}) / (${h2.toFixed(2)} – ${h1.toFixed(2)}) ≈ <strong>${cop.toFixed(2)}</strong></p>` +
    `<p>Potência frigorífica (Qe): <strong>${Qe.toFixed(2)} kW</strong></p>` +
    `<p>Potência de compressão (Wc): <strong>${Wc.toFixed(2)} kW</strong></p>`;
});
