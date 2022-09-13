// Entry fields
let billInput = document.getElementById("bill");
let billValue = parseInt(billInput.value);
let numberPeopleInput = document.querySelector(".number-people__input");
let numberPeopleValue = parseInt(numberPeopleInput.value);
let customInput = document.getElementById("custom");
// Errors
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let customValue = parseInt(customInput.value);
// Events fields
let button = document.querySelectorAll(".container-tip__button");
let reset = document.querySelector(".section-2__button");
// Output fields
let tip_amount_input = document.querySelector(".up__tip-amount-value");
let total_input = document.querySelector(".down__total-value");
// Variables
let tip_button = 15;
let tip_amount_result;
let total_result;

button.forEach((element) => {
  element.addEventListener("click", (e) => {
    clearActiveButtons();
    element.classList.add("container-tip__button--selected");
    tip_button = parseInt(e.target.innerText.slice(0, -1));

    calculateTipAmount();

    calculateTotalAmount();
  });
});

billInput.addEventListener("input", () => {
  billValue = parseFloat(billInput.value);

  calculateTipAmount();

  calculateTotalAmount();
});

customInput.addEventListener("click", () => {
  clearActiveButtons();

  calculateCustom();
});

customInput.addEventListener("input", () => {
  calculateCustom();
});

numberPeopleInput.addEventListener("input", () => {
  numberPeopleValue = parseInt(numberPeopleInput.value);

  if (numberPeopleValue == 0 || isNaN(numberPeopleValue)) {
    // Error
    error1.classList.add("error1");
    error1.classList.remove("error1-bis");
    error2.classList.add("error2");
  } else {
    // Very good
    error1.classList.remove("error1");
    error1.classList.add("error1-bis");
    error2.classList.remove("error2");
    calculateTipAmount();
    calculateTotalAmount();
  }
});

reset.addEventListener("click", () => {
  billValue = 0;
  billInput.value = 0;
  numberPeopleValue = 1;
  numberPeopleInput.value = 1;
  calculateTipAmount();
  calculateTotalAmount();
});

function calculateCustom() {
  tip_button = parseInt(customInput.value);

  if (!isNaN(tip_button)) {
    calculateTipAmount();

    calculateTotalAmount();
  }
}

function clearActiveButtons() {
  button.forEach((element) => {
    element.classList.remove("container-tip__button--selected");
  });
}

function calculateTipAmount() {
  // Calculation
  tip_amount_result = (
    (billValue * tip_button) /
    100 /
    numberPeopleValue
  ).toFixed(2);
  // Output
  tip_amount_input.value = tip_amount_result;
}

function calculateTotalAmount() {
  // Calculation
  total_result =
    ((billValue * tip_button) / 100 + billValue) / numberPeopleValue;
  // Output
  total_input.value = total_result.toFixed(2);
}
