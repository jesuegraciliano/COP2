/* script.js */
document.getElementById('btnCalcular').addEventListener('click', function() {
  const h1 = parseFloat(document.getElementById('h1').value);
  const h4 = parseFloat(document.getElementById('h4').value);
  const h2 = parseFloat(document.getElementById('h2').value);
  const resultadoEl = document.getElementById('resultado');

  // Cálculo do efeito frigorífico (qL) e trabalho de compressão (W)
  const qL = h1 - h4;
  const W = h2 - h1;

  if (isNaN(qL) || isNaN(W) || W <= 0) {
    resultadoEl.textContent = 'Por favor, verifique os valores inseridos.';
    return;
  }

  const cop = qL / W;
  resultadoEl.textContent = 
    `COP = (${h1.toFixed(2)} – ${h4.toFixed(2)}) / (${h2.toFixed(2)} – ${h1.toFixed(2)}) ≈ ${cop.toFixed(2)}`;
});
