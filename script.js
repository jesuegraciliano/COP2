/* script.js */
document.getElementById('btnCalcular').addEventListener('click', function() {
  const h1 = parseFloat(document.getElementById('h1').value);
  const h4 = parseFloat(document.getElementById('h4').value);
  const h2 = parseFloat(document.getElementById('h2').value);
  const m  = parseFloat(document.getElementById('m').value);
  const resultadoEl = document.getElementById('resultado');

  // Cálculo do efeito frigorífico (qL) e trabalho de compressão (W)
  const qL = h1 - h4;
  const W  = h2 - h1;

  // Validação dos valores
  if (isNaN(qL) || isNaN(W) || isNaN(m) || W <= 0 || m <= 0) {
    resultadoEl.textContent = 'Por favor, verifique os valores inseridos.';
    return;
  }

  // Cálculos finais
  const cop = qL / W;
  const Qe  = m * qL; // Potência frigorífica (kW)
  const Wc  = m * W;  // Potência de compressão (kW)

  resultadoEl.innerHTML =
    `COP = (${h1.toFixed(2)} – ${h4.toFixed(2)}) / (${h2.toFixed(2)} – ${h1.toFixed(2)}) ≈ ${cop.toFixed(2)}<br>` +
    `Potência frigorífica: ${Qe.toFixed(2)} kW<br>` +
    `Potência de compressão: ${Wc.toFixed(2)} kW`;
});
