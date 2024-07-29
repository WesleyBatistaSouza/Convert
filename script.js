const form = document.querySelector("form");
const footer = document.querySelector("footer");
// pegar os valores digitados e moedas selecionadas para a conversão
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");

amount.addEventListener("input", () => {
  // fazer a validação
  const charactersRegex = /\D+/g;
  amount.value = amount.value.replace(charactersRegex, "");
});

// capturar o evento de submit do formulário;
form.onsubmit = (event) => {
  event.preventDefault();

  // conversão
  function convert() {
    const valueCurrency = currency.value;

    const usd = amount.value * 5.64;
    const eur = amount.value * 6.13;
    const gbp = amount.value * 7.26;

    const description = document.getElementById("description");
    const result = document.getElementById("result");

    if (valueCurrency == "USD") {
      footer.classList.add("show-result");

      description.innerHTML = `US$ 1 = R$ 5.64`;

      result.innerHTML = `US$ ${String(usd.toFixed(2)).replace(
        ".",
        ","
      )} Reais`;
    } else if (valueCurrency == "EUR") {
      footer.classList.add("show-result");

      description.innerHTML = `€ 1 = R$ 6.13`;

      result.innerHTML = `€ ${String(eur.toFixed(2)).replace(".", ",")} Reais`;
    } else {
      footer.classList.add("show-result");

      description.innerHTML = `£ 1 = R$ $7.26`;
      result.innerHTML = `£ ${String(gbp.toFixed(2)).replace(".", ",")} Reais`;
    }
  }
  convert();
};