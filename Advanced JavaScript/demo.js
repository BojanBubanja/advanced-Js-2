const productNameInputElement = document.getElementById("product-name");
const ramainingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement)

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredtText = event.target.value;
  const enteredTextLength = enteredtText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  ramainingCharsElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    ramainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    ramainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
    ramainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error",);
  } else {
    ramainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");

    // ramainingCharsElement.classList.remove("warning");   ALTERNATIVA
    // productNameInputElement.classList.remove("warning");  MOZE I U ZAGRADI SAMO GORE DA SE NABROJI
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
