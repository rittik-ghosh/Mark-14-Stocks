
const initial = document.querySelector("#purchasePrice");
const quantity = document.querySelector("#quantity");
const current = document.querySelector("#currentPrice");
const btn = document.querySelector("#btn");
const output = document.querySelector("#outputDisplay");

function enterValue() {
  var ip = Number(initial.value);
  var q = Number(quantity.value);
  var cp = Number(current.value);

  calculateProfitAndLoss(ip, q, cp);
}

btn.addEventListener("click", enterValue);

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / (initial * quantity)) * 100;
    output.innerText = `Hey, the loss is ${loss} and the percent loss is ${lossPercentage.toFixed(
      2
    )}%`;
  } else if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / (initial * quantity)) * 100;
    output.innerText = `Hey, the profit is ${profit} and the percent loss is ${profitPercentage.toFixed(
      2
    )}%`;
  } else {
    output.innerText = `You didn't lose anything but you didn't gain anything either`;
  }
}
