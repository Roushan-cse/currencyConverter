const fromEl = document.querySelector("#currency-first");
const toEl = document.querySelector("#currency-second");
const inputFEl = document.querySelector("#worth-first");
const displayEl = document.querySelector("#worth-second");
const result = document.querySelector(".result");
// const rates = {
//     USD: 1,
//     EUR: 0.86,
//     GBP: 0.74,
//     CAD: 1.37,
//     RUB: 78.5,
//     INR: 85.7
// };
// // function convert() {
//     const from = fromEl.value;
//     const to = toEl.value;
//     const amount = parseFloat(inputFEl.value);
//
//     const usdAmount = amount / rates[from];
//     const value = (usdAmount * rates[to]).toFixed(2);
//     displayEl.value = value;
//     result.innerText = amount + " " + from + " = " + value + " " + to;
//
// }
async function convert() {
    const from = fromEl.value;
    const to = toEl.value;
    const amount = parseFloat(inputFEl.value);

    const response = await fetch(
        `https://open.er-api.com/v6/latest/${from}`
    );

    const data = await response.json();

    const rate = data.rates[to];
    const value = amount * rate;

    displayEl.value = value.toFixed(2);

    result.innerText =
        `${amount} ${from} = ${value.toFixed(2)} ${to}`;
}
convert();
fromEl.addEventListener("change", convert);
toEl.addEventListener("change", convert);
inputFEl.addEventListener("input", convert);



