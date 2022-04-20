// import functions
const myName = document.getElementById('my-name');
const displayAnimalButton = document.getElementById('display-animal-button');
const displayNameButton = document.getElementById('display-name-button');
const animalHidden = document.getElementById('animal-hidden');
// grab DOM elements

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
displayAnimalButton.addEventListener('click', () => {
    animalHidden.classList.remove('hidden');
});