const inputEl = document.querySelector("#name-input");
let spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value;
  if (spanEl.textContent === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
}
