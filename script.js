// garante que o código só execute depois do DOM carregado
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btnCalcular');
  btn.addEventListener('click', function() {
    const h1 = parseFloat(document.getElementById('h1').value);
    const h4 = parseFloat(document.getElementById('h4').value);
    const h2 = parseFloat(document.getElementById('h2').value);
    const m  = parseFloat(document.getElementById('m').value);
    const resultadoEl = document.getElementById('resultado');

    // validação
    if ([h1,h4,h2,m].some(v => isNaN(v) || v <= 0) || (h2 - h1) <= 0) {
      resultadoEl.textContent = 'Verifique os valores inseridos.';
      return;
    }

    // cálculos
    const qL  = h1 - h4;         // efeito frigorífico
    const W   = h2 - h1;         // trabalho de compressão
    const cop = qL / W;          
    const Qe  = m * qL;          // potência frigorífica (kW)
    const Wc  = m * W;           // potência de compressão (kW)

    // exibição
    resultadoEl.innerHTML = `
      COP = (${h1.toFixed(2)} – ${h4.toFixed(2)}) / (${h2.toFixed(2)} – ${h1.toFixed(2)}) ≈ <strong>${cop.toFixed(2)}</strong><br>
      Potência frigorífica (Qe): <strong>${Qe.toFixed(2)} kW</strong><br>
      Potência de compressão (Wc): <strong>${Wc.toFixed(2)} kW</strong>
    `;
  });
});
