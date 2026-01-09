
console.log("Script Running");

// Function to change the horse's position
const changePosition = (horse, position) => {
  // If position is less than or equal to 5, update the position, otherwise do nothing
  return position <= 5 ? horse.style.setProperty('grid-column', position) : null;
};

// Initial positions for the horses
let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

// Query Selectors for buttons and horses
const blueButton = document.querySelector("#blue-button");
const pinkButton = document.querySelector("#pink-button");
const brownButton = document.querySelector("#brown-button");

const blueHorse = document.querySelector("#blue-horse");
const pinkHorse = document.querySelector("#pink-horse");
const brownHorse = document.querySelector("#brown-horse");

// Function to advance blue horse's position
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
};

// Function to advance pink horse's position
const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink");
};

// Function to advance brown horse's position
const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown");
};

// Function to check if any horse has won (position 5)
const checkWinner = (position, color) => {
  if (position === 5) {
    console.log(`${color} horse wins!`);
    // Optionally, disable buttons after a win
    blueButton.disabled = true;
    pinkButton.disabled = true;
    brownButton.disabled = true;
  }
};

// Event Listeners for each button to advance the corresponding horse
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);
