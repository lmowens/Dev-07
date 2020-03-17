var greeting = "";
var name = "[null]";
var message = "[null]";
var welcome = greeting + name + message;

var sign = "[null]";
var tiles = "[null]";
var subTotal = "[null]";
var shipping = "[null]";
var grandTotal = "[null]";

(function() {
  initiateVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", subTotal);
  setTextContentById("shipping", shipping);
  setTextContentById("grandTotal", grandTotal);
})();

function setTextContentById(getId, setText) {
  var e = document.getElementById(getId);
  e.textContent = setText;
}

function initiateVars() {
  greeting = "Howdy ";
  name = "Molly";
  message = ", please check your order:";
  welcome = greeting + name + message;

  sign = "Montague House";
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;

  subTotal = "$" + subTotal;
  shipping = "$" + shipping;
  grandTotal = "$" + grandTotal;
}

function reset() {
  event.preventDefault();
  greeting = "[null]";
  name = "[null]";
  message = "[null]";
  welcome = greeting + name + message;

  sign = "[null]";
  tiles = "[0]";
  subTotal = "[0]";
  shipping = "[0]";
  grandTotal = "[0]";

  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", subTotal);
  setTextContentById("shipping", shipping);
  setTextContentById("grandTotal", grandTotal);
}

function payNow() {
  initiateVars();
  setTextContentById("greeting", welcome);
  setTextContentById("userSign", sign);
  setTextContentById("tiles", tiles);
  setTextContentById("subTotal", subTotal);
  setTextContentById("shipping", shipping);
  setTextContentById("grandTotal", grandTotal);
}
