// get references
let input = document.getElementById('boxtext')
let submitButton = document.querySelector('button')
let ourDiv = document.querySelector('div')
let bodyRef = document.querySelector('body')

// set up onclick for clickButton

submitButton.onclick = (event) => {
    // prevent the page from reloading
    event.preventDefault();

    // capture user input
    let userInput = input.value;
    console.log(userInput);

    // change backgroundColor based on userInput
    bodyRef.style.backgroundColor = userInput;

    // show userInput on the screen
    ourDiv.innerHTML = userInput;
    
    // Clear input  
    input.value = ''

}