let paragraphElement = document.querySelector("p");

function changeParagraphText() {
    paragraphElement.textContent = "Clicked!";
console.log("paragraphElement")
}

paragraphElement.addEventListener("click", changeParagraphText )

let inputElement = document.querySelector ('input')

function retrieveUserinput (event) {
    // let enteredText = inputElement.value; alternative
    let enteredText = event.target.value; 
    // let enteredText = event.data; => This is different!
    console.log(enteredText)
//     console.log(event)
}

inputElement.addEventListener('input', retrieveUserinput)