let quantityOfProducts = 0;
let price = 320000;
let colorSelected = undefined;

document.getElementById("price").innerHTML = price;

const multiplyProducts = (price, quantity) => {
  return price * quantity;
};

const probando = () => {
  quantityOfProducts = parseInt(
    document.getElementById("quantity-products").value
  );
  const total = multiplyProducts(price, quantityOfProducts);

  document.getElementById("total").innerHTML = total;
  document.getElementById("quantity").innerHTML = quantityOfProducts;
  document.getElementById("quantity-products").value = "";

  colorSelected = document
    .getElementById("inputState")
    .value.toLocaleLowerCase();

  document.getElementById("border-color").style.backgroundColor = document
    .getElementById(`${colorSelected}-color`)
    .innerHTML.toLocaleLowerCase();
};
