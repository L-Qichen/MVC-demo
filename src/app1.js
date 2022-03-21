import "./app1.css";
import $ from "jquery";

const $button1 = $("#plus");
const $button2 = $("#minus");
const $button3 = $("#multi");
const $button4 = $("#divide");
const $currentNum = $("#num");
const n = localStorage.getItem("n");
$currentNum.text(n || 100);

$button1.on('click', () => {
  let n = parseInt($currentNum.text());
  n += 1;
  localStorage.setItem("n", n);
  $currentNum.text(n);
});

$button2.on('click', () => {
  let n = parseInt($currentNum.text());
  n -= 1;
  localStorage.setItem("n", n);
  $currentNum.text(n);
});

$button3.on('click', () => {
  let n = parseInt($currentNum.text());
  n *= 2;
  localStorage.setItem("n", n);
  $currentNum.text(n);
});

$button4.on('click', () => {
  let n = parseInt($currentNum.text());
  n /= 2;
  localStorage.setItem("n", n);
  $currentNum.text(n);
});