let priceValue = parseFloat(document.getElementById('priceValue').value);
let quantity = parseFloat(document.getElementById('quantity').value);
let priceHidden = parseFloat(document.getElementById('priceHidden').value);

const adjustValues = () => {
  document.getElementById('quantity').value = quantity;
  document.getElementById('priceValue').value = priceValue.toFixed(2);
  document.getElementById('total').innerHTML = quantity;
}

if (document.getElementById('plus')) {
  document.getElementById('plus').addEventListener('click', event => {
    event.preventDefault();

    priceValue += priceHidden;
    quantity += 1;
    adjustValues();
  });
}

if (document.getElementById('minus')) {
  document.getElementById('minus').addEventListener('click', event => {
    event.preventDefault();

    if (quantity === 1) {
      quantity = 1;
      priceValue = priceHidden;
      return;
    } else {
      priceValue -= priceHidden;
      quantity -= 1;
      adjustValues();
    }
  });
}