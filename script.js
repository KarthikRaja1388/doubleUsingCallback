const numbers = [2, 3, 4, 5, 6, 7];

function doubleNumbers(arr, callback) {
  let result = [];

  arr.forEach((element) => {
    result.push(callback(element));
  });

  return result;
}

function double(num) {
  return num * 2;
}

let btnDouble = document.querySelector(".btn-double");
let result = document.querySelector(".result");
btnDouble.addEventListener("click", () => {
  let doubledArray = doubleNumbers(numbers, double);
  result.textContent = doubledArray;
});
