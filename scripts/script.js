async function obterBid() {
  const url = "https://economia.awesomeapi.com.br/last/JPY-BRL";
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      const bid = parseFloat(data.JPYBRL.bid) * 1000;
      const pctChange = parseFloat(data.JPYBRL.pctChange);
      document.getElementById("cotacao").textContent = `¥1000 = R$${bid.toFixed(2)} | ${pctChange.toFixed(2)}%`;
    } else {
      document.getElementById("cotacao").textContent = `Erro: Código de status ${response.status}`;
    }
  } catch (error) {
    document.getElementById("cotacao").textContent = `Erro: ${error.message}`;
  }
}