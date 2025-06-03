// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
const input1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputDiv = document.querySelector(".output");

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

copyButton.addEventListener("click", () => {
  outputDiv.textContent = input1.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area
const input2 = document.getElementById("userInput2");
const inputSection = document.getElementById("inputEventExample");

// fetch JavaScript objects representing specific elements in the DOM
const dynamicOutput = document.createElement("div");

inputSection.appendChild(dynamicOutput);

// add an event listener on the target element
input2.addEventListener("input", () => {
  dynamicOutput.textContent = input2.value;
});

// callback function to handle event
