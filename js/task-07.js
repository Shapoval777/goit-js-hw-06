const inputFontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputFontSize.addEventListener("change", onInputFontSize);

function onInputFontSize(event) {
  inputFontSize.range = event.currentTarget.value;
  spanText.style.fontSize = `${event.target.value}px`;
}
