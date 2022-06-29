let quantityOfProducts = 0;
let price = 320000;
let colorSelected = undefined;

// Operators
const formatNumbers = (number) => {
  return number.toLocaleString("en-US");
};
const multiplyProducts = (price, quantity) => {
  return price * quantity;
};

document.getElementById("price").innerHTML = formatNumbers(price);
const operateTotal = () => {
  quantityOfProducts = parseInt(
    document.getElementById("quantity-products").value
  );
  const total = multiplyProducts(price, quantityOfProducts);

  document.getElementById("total").innerHTML = formatNumbers(total);
  document.getElementById("quantity").innerHTML = quantityOfProducts;
  colorSelected = document
    .getElementById("inputState")
    .value.toLocaleLowerCase();
  //Clear
  document.getElementById("quantity-products").value = "";
  document.getElementById("inputState").value = "Choose...";
  //Pass color
  document.getElementById("border-color").style.backgroundColor = document
    .getElementById(`${colorSelected}-color`)
    .innerHTML.toLocaleLowerCase();
};
