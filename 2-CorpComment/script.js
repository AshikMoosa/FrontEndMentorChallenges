// -- Counter Component --
const counterEl = document.querySelector(".counter");
const textAreaEl = document.querySelector(".form__textarea");
const maxNrChars = textAreaEl.maxLength;

const inputHandler = (e) => {
  const nrCharsTyped = textAreaEl.value.length;
  let charsLeft = maxNrChars - nrCharsTyped;
  counterEl.textContent = charsLeft;
};

// add input event for counter increment and decrement
textAreaEl.addEventListener("input", inputHandler);
